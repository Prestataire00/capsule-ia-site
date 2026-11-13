#!/bin/sh
# Publie le site sur Netlify (https://capsuleia.netlify.app).
# Usage : sh publier-netlify.sh
set -e
cd "$(dirname "$0")"
npm run build
npx --yes netlify-cli@latest deploy --prod --dir dist --no-build --site d3af1e24-dc2f-4370-af0e-3a72db5e1839
