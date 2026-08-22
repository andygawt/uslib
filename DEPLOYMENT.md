# Deployment Guide

## Testing Locally (Do This First!)

1. **Start the test server:**
   ```bash
   cd ~/gawthorpe-research
   ./test-server.sh
   ```

2. **Open your browser to:** http://localhost:8000

3. **Test all pages:**
   - Home page loads correctly
   - Navigation works on all pages
   - Mobile responsiveness (resize browser window)
   - All links work

4. **Stop the server:** Press `Ctrl+C`

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Name it: `gawthorpe-research` (or your preferred name)
3. **Keep it private** (for now, while testing)
4. Don't initialize with README (we already have one)
5. Click "Create repository"

## Step 2: Push to GitHub

```bash
cd ~/gawthorpe-research

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/gawthorpe-research.git

# Push code
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select branch: `main`
5. Select folder: `/ (root)`
6. Click "Save"

Wait 1-2 minutes, then your site will be live at:
`https://YOUR-USERNAME.github.io/gawthorpe-research`

## Step 4: Test the Live Site

Visit the URL above and verify:
- All pages load
- Navigation works
- CSS is applied
- No broken links

## Step 5: Register Domain (When Ready)

### Recommended Registrar: Porkbun

1. Go to https://porkbun.com
2. Search for `gawthorpe-research.org`
3. Purchase domain ($9-12/year)
4. Wait for registration email (usually instant)

### Alternative: Namecheap

1. Go to https://www.namecheap.com
2. Search for `gawthorpe-research.org`
3. Purchase domain (~$12/year)

## Step 6: Connect Custom Domain to GitHub Pages

### A. Configure DNS at Your Registrar

Add these DNS records at Porkbun/Namecheap:

```
Type    Host    Value                   TTL
A       @       185.199.108.153         600
A       @       185.199.109.153         600
A       @       185.199.110.153         600
A       @       185.199.111.153         600
CNAME   www     YOUR-USERNAME.github.io 600
```

### B. Configure GitHub Pages

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `gawthorpe-research.org`
3. Click "Save"
4. Wait for DNS check (may take a few minutes)
5. Once checked, enable "Enforce HTTPS"

### C. Add CNAME File

```bash
cd ~/gawthorpe-research
mv CNAME.example CNAME
# Edit CNAME to contain just: gawthorpe-research.org
git add CNAME
git commit -m "Add custom domain"
git push
```

## Step 7: Verify Live Site

Wait 5-10 minutes for DNS to propagate, then visit:
- http://gawthorpe-research.org
- https://gawthorpe-research.org (with HTTPS)
- https://www.gawthorpe-research.org

All should redirect to the HTTPS version.

## Step 8: Make Repository Public (Optional)

Once everything is working:
1. Go to repository Settings
2. Scroll to "Danger Zone"
3. Click "Change visibility"
4. Select "Make public"

## Troubleshooting

### Site not loading after DNS setup
- DNS can take up to 48 hours (usually 10-30 minutes)
- Check DNS propagation: https://dnschecker.org

### CSS not loading
- Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache

### 404 errors
- Verify CNAME file contains only the domain (no http://)
- Check GitHub Pages settings show domain as configured

### HTTPS not working
- Wait for GitHub to provision SSL certificate (5-10 minutes)
- DNS must be fully propagated first

## Making Updates

After the site is live, to update content:

```bash
cd ~/gawthorpe-research

# Make your edits to HTML files
# Then:

git add .
git commit -m "Update content: describe your changes"
git push

# Changes go live in 30-60 seconds
```

## Costs Summary

- Domain registration: $9-12/year
- GitHub Pages hosting: FREE
- SSL certificate: FREE (via GitHub)
- Total: **$9-12/year**

## Support

If you encounter issues:
1. Check GitHub Pages documentation
2. Verify DNS settings at your registrar
3. Test locally first to isolate issues
