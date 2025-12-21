# Git Setup

## Simple Deployment Workflow

Built files are committed to Git for easy deployment.

## Commit Everything

```bash
git add .
git commit -m "Initial commit"
git push
```

## What's Ignored

- `node_modules/` - Dependencies
- `.env` files - Sensitive data
- `temp_images/` - Temporary files
- IDE/OS files

## What's Committed

- ✅ `frontend/src/` - Source code
- ✅ `public/assets/` - Built files (for deployment)
- ✅ `public/index.html`, `public/index.php`
- ✅ `public/images/` - Images
- ✅ `backend/` - PHP code

## Deploy

1. Clone repo on server
2. Upload `public/` to web root
3. Done!
