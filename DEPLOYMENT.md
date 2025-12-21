# Deployment

## Deploy from Git

### Step 1: Clone/Pull on Server

```bash
git clone <your-repo-url>
# or
git pull
```

### Step 2: Upload to Web Server

Upload `public/` directory to your web root.

That's it! Built files are already in Git.

## Apache

Ensure `.htaccess` is enabled in `public/`.

## Nginx

```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

## Notes

- Built files (`public/assets/`) are committed to Git
- Just clone and deploy - no build step needed
- To update: pull latest, upload `public/` again
