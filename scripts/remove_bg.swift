import Foundation
import Vision
import CoreImage
import CoreImage.CIFilterBuiltins
import AppKit

func removeBackground(inputPath: String, outputPath: String) {
    let inputUrl = URL(fileURLWithPath: inputPath)
    let outputUrl = URL(fileURLWithPath: outputPath)
    
    guard let ciImage = CIImage(contentsOf: inputUrl) else {
        print("Error: Could not load image from \(inputPath)")
        exit(1)
    }
    
    let request = VNGenerateForegroundInstanceMaskRequest()
    let handler = VNImageRequestHandler(ciImage: ciImage, options: [:])
    
    do {
        print("Running Vision background removal...")
        try handler.perform([request])
        guard let result = request.results?.first else {
            print("Error: Vision request returned no results.")
            exit(1)
        }
        
        let maskBuffer = try result.generateScaledMaskForImage(
            forInstances: result.allInstances,
            from: handler
        )
        let maskImage = CIImage(cvPixelBuffer: maskBuffer)
        
        let filter = CIFilter.blendWithMask()
        filter.inputImage = ciImage
        filter.maskImage = maskImage
        filter.backgroundImage = CIImage.empty()
        
        guard let outputCIImage = filter.outputImage else {
            print("Error: Filter output is empty.")
            exit(1)
        }
        
        let context = CIContext()
        guard let cgImage = context.createCGImage(outputCIImage, from: outputCIImage.extent) else {
            print("Error: Could not create CGImage.")
            exit(1)
        }
        
        let size = NSSize(width: cgImage.width, height: cgImage.height)
        let rep = NSBitmapImageRep(cgImage: cgImage)
        rep.size = size
        
        guard let pngData = rep.representation(using: .png, properties: [:]) else {
            print("Error: Could not represent as PNG.")
            exit(1)
        }
        
        try pngData.write(to: outputUrl)
        print("Success! Background-removed image saved to \(outputPath)")
    } catch {
        print("Error processing background removal: \(error)")
        exit(1)
    }
}

let arguments = CommandLine.arguments
if arguments.count < 3 {
    print("Usage: swift remove_bg.swift <input_path> <output_path>")
    exit(1)
}

removeBackground(inputPath: arguments[1], outputPath: arguments[2])
