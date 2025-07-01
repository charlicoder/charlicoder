#!/bin/bash

# Exit on any error
set -e

# 1. Build the React app
#echo "🔧 Building React app..."
#npm run build

# 2. Define target directory (Nginx web root)
NGINX_ROOT="/var/www/html"

# 3. Remove existing files in the Nginx root (optional)
echo "🧹 Cleaning old build in $NGINX_ROOT..."
sudo rm -rf $NGINX_ROOT/*

# 4. Copy new build to Nginx root
echo "📦 Copying new build to $NGINX_ROOT..."
sudo cp -r dist/* $NGINX_ROOT/

# 5. Restart Nginx
echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx

echo "✅ Deployment completed successfully!"
