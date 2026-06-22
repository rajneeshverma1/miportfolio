import sys
import os
from PIL import Image

try:
    from rembg import remove
except ImportError:
    print("rembg is not installed yet. Please wait for the installation to finish.")
    sys.exit(1)

def main():
    input_path = "public/Profile2.jpeg"
    output_path = "public/Profile3.png"

    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        sys.exit(1)

    print(f"Removing background from {input_path}...")
    try:
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print(f"Success! Background-removed image saved to {output_path}")
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
