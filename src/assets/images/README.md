# Images Directory

This directory contains all image assets for the Jiffyprints website.

## Directory Structure

```
images/
├── embroidery/         # Embroidery samples and process photos
├── printing/           # DTF, DTG, and screen printing samples
├── products/           # Product showcase images
├── process/            # Process and equipment photos
├── team/               # Team and about us photos
├── blog/               # Blog post images
└── icons/              # Icons and small graphics
```

## Image Guidelines

- **Format**: Use WebP for photos when possible, with JPEG fallbacks
- **Size**: Optimize images for web (max 1920px width for full-width images)
- **Naming**: Use descriptive, kebab-case names (e.g., `custom-embroidered-hat.jpg`)
- **Alt Text**: Always provide descriptive alt text in your templates

## Upload Instructions

1. Place images in the appropriate subdirectory
2. Optimize images before uploading (use tools like TinyPNG or ImageOptim)
3. Use descriptive filenames
4. Update this README if adding new categories

## Usage in Templates

```njk
<!-- In Nunjucks templates -->
<img src="/assets/images/embroidery/custom-logo.jpg" 
     alt="Custom embroidered company logo on polo shirt">
```
