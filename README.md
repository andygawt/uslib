# Gawthorpe Research Group Website

Website for the American Foreign Policy and Liberalism research project at Leiden University.

## Local Testing

To test the website locally before deploying:

```bash
# Option 1: Python 3
python3 -m http.server 8000

# Option 2: Python 2
python -m SimpleHTTPServer 8000

# Option 3: PHP
php -S localhost:8000
```

Then open your browser to: http://localhost:8000

## Project Structure

```
gawthorpe-research/
├── index.html          # Homepage
├── research.html       # Research overview
├── team.html          # Team members
├── publications.html  # Publications list
├── news.html          # News and updates
├── contact.html       # Contact information
├── css/
│   └── style.css      # Main stylesheet
├── js/               # JavaScript files
├── images/           # Images and media
└── data/             # Data files (if needed)
```

## Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a new GitHub repository
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at: `https://yourusername.github.io/gawthorpe-research`

### Option 2: Custom Domain with GitHub Pages

1. Follow steps above
2. Register domain (e.g., gawthorpe-research.org)
3. Add `CNAME` file with your domain name
4. Configure DNS settings at your registrar

### Option 3: Cloudflare Pages (Free)

1. Create Cloudflare account
2. Connect your GitHub repository
3. Cloudflare will automatically deploy on each push
4. Add custom domain in Cloudflare dashboard

### Option 4: Netlify (Free)

1. Create Netlify account
2. Connect your GitHub repository
3. Netlify will automatically deploy
4. Custom domain available

## DNS Configuration (When Ready)

When you register your domain, configure these DNS records:

**For GitHub Pages:**
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   yourusername.github.io
```

**For Cloudflare Pages:**
```
CNAME @   your-site.pages.dev
CNAME www your-site.pages.dev
```

## Updating Content

### Adding Team Members

Edit `team.html` and add a new team member block:

```html
<div class="team-member">
    <img src="images/person-name.jpg" alt="Name">
    <h4>Name</h4>
    <p class="role">Role</p>
    <p>Bio text here...</p>
</div>
```

### Adding Publications

Edit `publications.html` and add a new publication:

```html
<div class="publication">
    <h4>Article Title</h4>
    <p class="authors">Author Names</p>
    <p class="venue">Journal/Publisher, Year</p>
    <p>Description...</p>
    <p><a href="url">Read Article</a></p>
</div>
```

### Adding News Items

Edit `news.html` and add a new article:

```html
<article class="publication">
    <h4>News Title</h4>
    <p class="date">Date</p>
    <p>Content...</p>
</article>
```

## Maintenance

- All HTML files use the same header/footer - update consistently
- Images should be optimized for web (< 500KB recommended)
- Test on mobile devices before deploying changes

## Support

For questions about the website infrastructure, contact the development team.
