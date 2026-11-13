#!/bin/sh
# Publie le site : génère dist/ puis l'envoie sur la branche gh-pages (GitHub Pages).
# Usage : sh publier.sh
set -e
cd "$(dirname "$0")"
REMOTE=$(git remote get-url origin)
npm run build
cd dist
touch .nojekyll
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Publication du site"
git push -q -f "$REMOTE" gh-pages
rm -rf .git
echo "Site publié."
