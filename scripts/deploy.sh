#!/usr/bin/env bash
set -e

echo "🚀 Pushing latest changes to GitHub..."
git push origin main

echo "🌐 Deploying to stibe VPS..."
ssh -o BatchMode=yes -o ConnectTimeout=15 stibe 'cd /var/www/keller-next && git pull origin main && npm install && npm run build && pm2 restart keller-adapt'

echo "✅ Deployed successfully! Verified on https://kelleradapt.com"
