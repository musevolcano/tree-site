#!/usr/bin/env bash
# =============================================================
# Weapon Audio 774 — Three-Layer Backup
# Acyuta KD | gopidust@gmail.com
# Run: bash ~/tree-site/weapon_audio_backup.sh
# =============================================================
set -euo pipefail

EMAIL="gopidust@gmail.com"
GIT_NAME="Acyuta KD"
TODAY=$(date +%Y-%m-%d)
BACKUP_FOLDER_NAME="weapon-audio-774_${TODAY}"
REPORT_FILE="$HOME/tree-site/weapon_audio_backup_report.txt"

echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║   Weapon Audio 774 — Three-Layer Backup          ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# ─────────────────────────────────────────────
# STEP 1 — Locate source folder
# ─────────────────────────────────────────────
echo "▶ STEP 1: Locating weapon-audio-774 source folder..."

SOURCE_DIR=""
if [ -d "$HOME/Projects/weapon-audio-774" ]; then
  SOURCE_DIR="$HOME/Projects/weapon-audio-774"
  echo "  ✓ Found: $SOURCE_DIR"
else
  echo "  ⚠ Not at ~/Projects/weapon-audio-774. Searching..."
  FOUND=$(find "$HOME" -maxdepth 4 -type d -iname "weapon-audio-774*" 2>/dev/null | head -1)
  if [ -n "$FOUND" ]; then
    SOURCE_DIR="$FOUND"
    echo "  ✓ Found at: $SOURCE_DIR"
  else
    echo ""
    echo "  ✗ ERROR: weapon-audio-774 directory not found within 4 levels of home."
    echo "  Please move the project to ~/Projects/weapon-audio-774 and re-run."
    exit 1
  fi
fi

# ─────────────────────────────────────────────
# STEP 2 — Locate R&D spreadsheet
# ─────────────────────────────────────────────
echo ""
echo "▶ STEP 2: Locating weapon_audio_rd*.xlsx..."

RD_FILE=""
# Search common locations
for SEARCH_PATH in "$HOME/Desktop" "$HOME/Documents" "$HOME"; do
  FOUND_XL=$(find "$SEARCH_PATH" -maxdepth 3 -iname "*weapon*rd*.xlsx" 2>/dev/null | head -1)
  if [ -n "$FOUND_XL" ]; then
    RD_FILE="$FOUND_XL"
    echo "  ✓ Found: $RD_FILE"
    break
  fi
done

# Also try broader search if still not found
if [ -z "$RD_FILE" ]; then
  FOUND_XL=$(find "$HOME" -maxdepth 4 -iname "*weapon*.xlsx" 2>/dev/null | head -1)
  if [ -n "$FOUND_XL" ]; then
    RD_FILE="$FOUND_XL"
    echo "  ✓ Found (broader search): $RD_FILE"
  else
    echo "  ⚠ R&D spreadsheet not found — will skip spreadsheet backup."
  fi
fi

# ─────────────────────────────────────────────
# STEP 3 — Write .gitignore
# ─────────────────────────────────────────────
echo ""
echo "▶ STEP 3: Writing .gitignore..."

cat > "$SOURCE_DIR/.gitignore" << 'GITIGNORE'
Build/
build/
DerivedData/
*.o
*.a
*.so
*.dylib
*.component
*.vst3
*.aaxplugin
*.app
xcuserdata/
*.xcuserstate
.DS_Store
._*
*.log
*.zip
GITIGNORE

echo "  ✓ .gitignore written"

# ─────────────────────────────────────────────
# STEP 4 — Git init and initial commit
# ─────────────────────────────────────────────
echo ""
echo "▶ STEP 4: Initializing git repo and committing..."

cd "$SOURCE_DIR"

if [ ! -d ".git" ]; then
  git init
  echo "  ✓ git init complete"
else
  echo "  ℹ Git repo already exists, skipping init"
fi

git config user.email "$EMAIL"
git config user.name "$GIT_NAME"

git add .
COMMIT_MSG="Initial commit: Weapon Audio 774 v1.1 Universal AU+VST3 with Phase 2 GUI"
git commit -m "$COMMIT_MSG" 2>/dev/null || git commit --allow-empty -m "$COMMIT_MSG"

COMMIT_HASH=$(git log --oneline -1 | awk '{print $1}')
FILE_COUNT=$(git ls-files | wc -l | tr -d ' ')

echo "  ✓ Commit: $COMMIT_HASH | Files tracked: $FILE_COUNT"
git log --oneline

# ─────────────────────────────────────────────
# STEP 5 — Determine backup destination
# ─────────────────────────────────────────────
echo ""
echo "▶ STEP 5: Setting up iCloud / Documents backup location..."

ICLOUD_DOCS="$HOME/Library/Mobile Documents/com~apple~CloudDocs"
BACKUP_BASE=""

if [ -d "$ICLOUD_DOCS" ]; then
  BACKUP_BASE="$ICLOUD_DOCS/WeaponAudio_Backup"
  echo "  ✓ iCloud Drive detected — using: $BACKUP_BASE"
else
  BACKUP_BASE="$HOME/Documents/WeaponAudio_Backup"
  echo "  ℹ iCloud not found — falling back to: $BACKUP_BASE"
fi

mkdir -p "$BACKUP_BASE"
BACKUP_DEST="$BACKUP_BASE/$BACKUP_FOLDER_NAME"

# ─────────────────────────────────────────────
# STEP 5b — Copy source to backup
# ─────────────────────────────────────────────
echo ""
echo "▶ STEP 5b: Copying source folder to backup..."

if [ -d "$BACKUP_DEST" ]; then
  echo "  ℹ Backup folder already exists: $BACKUP_DEST — removing old copy..."
  rm -rf "$BACKUP_DEST"
fi

cp -R "$SOURCE_DIR" "$BACKUP_DEST"
echo "  ✓ Copied to: $BACKUP_DEST"

# ─────────────────────────────────────────────
# STEP 6 — Copy R&D spreadsheet
# ─────────────────────────────────────────────
echo ""
echo "▶ STEP 6: Copying R&D spreadsheet..."
RD_BACKUP_PATH=""

if [ -n "$RD_FILE" ]; then
  RD_FILENAME=$(basename "$RD_FILE")
  cp "$RD_FILE" "$BACKUP_BASE/$RD_FILENAME"
  RD_BACKUP_PATH="$BACKUP_BASE/$RD_FILENAME"
  echo "  ✓ Copied: $RD_BACKUP_PATH"
else
  echo "  ⚠ Skipped — spreadsheet not found"
fi

# ─────────────────────────────────────────────
# STEP 7 — Check GitHub CLI
# ─────────────────────────────────────────────
echo ""
echo "▶ STEP 7: Checking GitHub CLI..."

GH_PATH=$(which gh 2>/dev/null || echo "")
GH_STATUS="not_installed"
GH_URL=""

if [ -z "$GH_PATH" ]; then
  echo "  ⚠ gh not found — attempting brew install..."
  if command -v brew &>/dev/null; then
    brew install gh
    GH_PATH=$(which gh 2>/dev/null || echo "")
    if [ -n "$GH_PATH" ]; then
      GH_STATUS="installed_needs_auth"
      echo "  ✓ gh installed at $GH_PATH"
    fi
  else
    echo "  ✗ brew not found either — GitHub layer skipped"
    GH_STATUS="not_installed"
  fi
else
  echo "  ✓ gh found at $GH_PATH"
  AUTH_CHECK=$(gh auth status 2>&1 || true)
  if echo "$AUTH_CHECK" | grep -q "Logged in"; then
    GH_STATUS="authenticated"
    echo "  ✓ gh is authenticated"
  else
    GH_STATUS="installed_needs_auth"
    echo "  ℹ gh installed but NOT authenticated — GitHub push skipped"
    echo "  $AUTH_CHECK"
  fi
fi

# ─────────────────────────────────────────────
# STEP 8 — GitHub push (only if authenticated)
# ─────────────────────────────────────────────
if [ "$GH_STATUS" = "authenticated" ]; then
  echo ""
  echo "▶ STEP 8: Creating private GitHub repo and pushing..."
  cd "$SOURCE_DIR"

  # Check if remote already exists
  if git remote get-url origin &>/dev/null; then
    echo "  ℹ Remote 'origin' already set — skipping repo creation"
  else
    gh repo create weapon-audio-774 \
      --private \
      --source=. \
      --remote=origin \
      --description="Weapon Audio 774 saturation/EQ channel strip plugin (JUCE, AU/VST3 Universal Binary)" \
      2>&1 || echo "  ⚠ Repo may already exist on GitHub — trying push anyway"
  fi

  git branch -M main
  git push -u origin main

  GH_URL=$(gh repo view --json url --jq .url 2>/dev/null || echo "check GitHub.com")
  echo "  ✓ Pushed — $GH_URL"
else
  echo ""
  echo "▶ STEP 8: SKIPPED — gh not authenticated"
fi

# ─────────────────────────────────────────────
# STEP 9 — Final report
# ─────────────────────────────────────────────
echo ""
echo "══════════════════════════════════════════════════"
echo "  WEAPON AUDIO 774 — BACKUP REPORT  ($TODAY)"
echo "══════════════════════════════════════════════════"
echo ""
echo "  LAYER 1 — Local Git"
echo "    Status:  ✓ Committed"
echo "    Commit:  $COMMIT_HASH"
echo "    Files:   $FILE_COUNT tracked"
echo "    Path:    $SOURCE_DIR"
echo ""
echo "  LAYER 2 — iCloud / Documents"
echo "    Status:  ✓ Copied"
echo "    Path:    $BACKUP_DEST"
if [ -n "$RD_BACKUP_PATH" ]; then
echo "    R&D:     $RD_BACKUP_PATH"
else
echo "    R&D:     ⚠ Not found — backup skipped"
fi
echo ""
if [ "$GH_STATUS" = "authenticated" ] && [ -n "$GH_URL" ]; then
echo "  LAYER 3 — GitHub (Private Repo)"
echo "    Status:  ✓ Pushed"
echo "    URL:     $GH_URL"
else
echo "  LAYER 3 — GitHub"
echo "    Status:  ⏸ Pending auth"
echo ""
echo "  ┌─ Run these 3 lines to complete Layer 3: ───────┐"
echo "  │  cd ~/Projects/weapon-audio-774                │"
echo "  │  gh auth login                                  │"
echo "  │  gh repo create weapon-audio-774 --private \\   │"
echo "  │    --source=. --remote=origin && \\             │"
echo "  │    git branch -M main && git push -u origin main│"
echo "  └─────────────────────────────────────────────────┘"
fi
echo ""
echo "══════════════════════════════════════════════════"

# Write report to workspace
{
  echo "Weapon Audio 774 — Backup Report ($TODAY)"
  echo ""
  echo "LAYER 1 — Local Git"
  echo "  Commit: $COMMIT_HASH | Files: $FILE_COUNT"
  echo "  Path: $SOURCE_DIR"
  echo ""
  echo "LAYER 2 — iCloud / Documents"
  echo "  Source backup: $BACKUP_DEST"
  if [ -n "$RD_BACKUP_PATH" ]; then
    echo "  R&D backup: $RD_BACKUP_PATH"
  else
    echo "  R&D: Not found"
  fi
  echo ""
  echo "LAYER 3 — GitHub"
  if [ "$GH_STATUS" = "authenticated" ] && [ -n "$GH_URL" ]; then
    echo "  URL: $GH_URL"
  else
    echo "  Status: Pending — run gh auth login then re-push"
  fi
} > "$REPORT_FILE"

echo "  Report saved → $REPORT_FILE"
echo ""
