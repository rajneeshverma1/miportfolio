#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<EOF
Usage: $0 --name "Full Name" --email "email@example.com" [--branch main] [--push]

Creates 20 commits (one per day for the last 20 days) authored by the provided name/email.
Each commit appends a line to CONTRIBUTIONS.md. If --push is supplied the script will attempt to
push to the given branch on the origin remote.

You must run this in a git repository. The email used must be a verified email on your GitHub
account to appear on your contribution graph.
EOF
}

NAME=""
EMAIL=""
BRANCH="main"
PUSH=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    --name) NAME="$2"; shift 2;;
    --email) EMAIL="$2"; shift 2;;
    --branch) BRANCH="$2"; shift 2;;
    --push) PUSH=true; shift 1;;
    -h|--help) usage; exit 0;;
    *) echo "Unknown arg: $1"; usage; exit 1;;
  esac
done

if [[ -z "$NAME" || -z "$EMAIL" ]]; then
  echo "--name and --email are required"
  usage
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not a git repository. cd to your repo and run again."
  exit 1
fi

# Ensure branch exists
git rev-parse --verify "$BRANCH" >/dev/null 2>&1 || git checkout -b "$BRANCH"
git checkout "$BRANCH"

FILE=CONTRIBUTIONS.md
mkdir -p .
touch "$FILE"
git add "$FILE" || true

for i in $(seq 0 19); do
  DAY_OFFSET=$i
  # date -d works on GNU (Linux/macOS with gdate); on macOS/BSD use -v. We try both.
  if COMMIT_DATE=$(date -d "-$DAY_OFFSET day" --iso-8601=seconds 2>/dev/null); then
    DATE_LABEL=$(date -d "-$DAY_OFFSET day" +%Y-%m-%d 2>/dev/null)
  else
    COMMIT_DATE=$(date -v -${DAY_OFFSET}d -Iseconds 2>/dev/null || date -u +%Y-%m-%dT%H:%M:%SZ)
    DATE_LABEL=$(date -v -${DAY_OFFSET}d +%Y-%m-%d 2>/dev/null || date -u +%Y-%m-%d)
  fi

  echo "Commit for $DATE_LABEL - $RANDOM" >> "$FILE"
  GIT_AUTHOR_DATE="$COMMIT_DATE" GIT_COMMITTER_DATE="$COMMIT_DATE" git add "$FILE"
  GIT_AUTHOR_NAME="$NAME" GIT_AUTHOR_EMAIL="$EMAIL" GIT_COMMITTER_NAME="$NAME" GIT_COMMITTER_EMAIL="$EMAIL" \
    git commit -m "chore: contribution #$((i+1))" --no-gpg-sign || true
done

echo "Created 20 commits on branch $BRANCH authored as $NAME <$EMAIL>"

if [ "$PUSH" = true ]; then
  echo "Pushing to origin/$BRANCH..."
  git push origin "$BRANCH"
  echo "Push complete. Check GitHub to verify contributions." 
else
  echo "Run with --push to push commits to origin. Example: $0 --name \"$NAME\" --email \"$EMAIL\" --branch $BRANCH --push"
fi
