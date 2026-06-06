# Divye Singh - Personal Portfolio

A Swiss/International style portfolio website with refined editorial design. Helvetica headings, Georgia serif body text, grid discipline and a sidebar layout for clean information architecture.

## Features

✨ **What's Included:**
- **Home** (`index.html`) - About and areas of interest
- **Experience** (`experience.html`) - Work history and education
- **Writing** (`blogs.html`) - Medium articles with auto-fetch from RSS
- **ML Notes** (`ml-notes.html`) - Deep dives into machine learning
- **Publications** (`publications.html`) - Research papers with citations

### Design Highlights
- 🎨 **Swiss/International Style** - Helvetica headings, Georgia body, red accent line
- 📏 **Grid Discipline** - Clean typography, no unnecessary decoration
- 🔴 **Red Kicker Label** - Accent color for visual hierarchy
- 📄 **Sidebar Layout** - Profile info always visible, inspired by editorial design
- 🔄 **Auto-Fetched Articles** - Medium RSS feed automatically updates Writing page
- 📱 **Fully Responsive** - Optimized for mobile, tablet and desktop
- 🏗️ **Multi-Page Structure** - Each section is its own HTML file for easy maintenance
- ⚡ **No Build Process** - Pure HTML and CSS
- 🚀 **GitHub Pages Ready** - Deploy instantly

## Setup Instructions

### Option 1: Using an Existing Repository

If you already have a GitHub Pages repository (like `username.github.io`):

1. Clone or navigate to your repository:
   ```bash
   cd sdivye92.github.io
   ```

2. Copy all files from this directory:
   ```bash
   cp -r /path/to/MyProfile/* .
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "Add portfolio website"
   git push origin main
   ```

4. Your site will be live at: **https://sdivye92.github.io**

### Option 2: Create a New Repository

1. Create a new repository on GitHub named `sdivye92.github.io`

2. Initialize git in this directory:
   ```bash
   git init
   git remote add origin https://github.com/sdivye92/sdivye92.github.io.git
   ```

3. Add and commit:
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   ```

4. Push:
   ```bash
   git branch -M main
   git push -u origin main
   ```

5. Enable GitHub Pages in repository settings (Settings → Pages → Source: Deploy from a branch → main)

6. Your site will be live at: **https://sdivye92.github.io**

## File Structure

```
sdivye92.github.io/
├── index.html          # Home & About
├── experience.html     # Work experience & education
├── blogs.html          # Medium articles (auto-updated)
├── ml-notes.html       # Machine learning resources
├── publications.html   # Research publications
├── css/
│   └── style.css       # Swiss/International styling (responsive)
├── js/
│   ├── fetch-medium.js # Auto-fetch Medium RSS articles
│   └── script.js       # Optional: future interactivity
└── README.md           # This file
```

Each HTML file has the same sidebar and masthead, making it easy to navigate between pages.

## Customization

### Update Personal Info
All pages have a sidebar with contact information. Edit the sidebar section in any HTML file:
- Name and title
- Contact email
- Social media links
- Languages and hobbies

The masthead in each file shows your name and tagline.

### Modify Typography & Colors
Edit `css/style.css` to customize:
- **Headings**: Change `--sans` (default: Helvetica)
- **Body**: Change `--serif` (default: Georgia)
- **Colors**: Modify `--text-color`, `--border-color`, `--link-color`, `--accent-red`
- **Spacing**: Adjust padding in section classes
- **Red Accent**: The red line comes from `--accent-red` (currently `#d41159`)

### Update Content Pages

**Home/About** (`index.html`)
- Edit the About section with your bio

**Experience** (`experience.html`)
- Add/remove job entries
- Update education section

**Writing** (`blogs.html`)
- Medium articles **automatically fetch** from your RSS feed via `js/fetch-medium.js`
- Customize by editing the `MEDIUM_USERNAME` variable in the JS file
- Add custom links (like the Bayesian dating link) directly in the `article-list`
- The page loads your 10 latest Medium articles automatically on page load

**ML Notes** (`ml-notes.html`)
- Add more note entries with links

**Publications** (`publications.html`)
- Update the publication list with your papers

### Add New Pages
1. Copy one of the existing HTML files (e.g., `blogs.html`)
2. Update the sidebar navigation in ALL files to include the new page
3. Create the new content in the `<article-section>`
4. Add the CSS styles to `css/style.css` if needed

## Auto-Fetching Medium Articles

The **Writing** page automatically fetches your latest 10 articles from Medium via RSS feed. This happens client-side in the browser with no server setup needed.

**How it works:**
1. `js/fetch-medium.js` fetches your Medium RSS feed
2. Uses the free `rss2json.com` service to convert RSS to JSON
3. Automatically updates the article list on the page when loaded
4. Falls back gracefully to the hardcoded list if the fetch fails

**To customize:**
- Edit the `MEDIUM_USERNAME` variable in `js/fetch-medium.js` if you use a different Medium username
- Update the hardcoded fallback list in `blogs.html` for default articles
- Add custom links (like the Bayesian dating example) directly in the HTML

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- ⚡ Fast load times (fully static)
- 📦 Zero build dependencies (one external service for Medium fetch)
- 🔒 No tracking or analytics (your privacy!)
- 🌍 Works offline after first load (except Medium fetch requires internet)

## Deployment

The site automatically deploys when you push to your main branch. GitHub Pages builds and serves it within seconds.

### Check Deployment Status
1. Go to your repository on GitHub
2. Settings → Pages
3. Check the green checkmark and deployment URL

## Fun Additions

Want to make it even more fun? Try:
- Add a dark mode toggle
- Include project showcases with images
- Add email subscription for blog updates
- Create an RSS feed for your blog
- Add analytics (optional, respecting privacy)

## License

Feel free to fork and customize for your own use!

---

**Happy coding!** 🚀

For questions or updates, reach out at sdivye92@gmail.com or connect on [LinkedIn](https://www.linkedin.com/in/divye-singh).
