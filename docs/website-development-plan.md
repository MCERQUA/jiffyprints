# Jiffyprints Website Development Plan

*11ty + Netlify + GitHub modular component system for efficient, maintainable website*

## Tech Stack Overview

### Core Technologies
- **Framework**: 11ty (Eleventy) - Static Site Generator
- **Deployment**: Netlify - Hosting & Form Handling
- **Repository**: GitHub - Version Control & Source
- **Styling**: Custom CSS (jiffyprints-stylesheet.css)
- **Components**: Modular 11ty includes system

### Key Principles
- **Modular Design**: Each component under 1000 lines
- **Reusable Components**: DRY principle with variations
- **Component Registry**: Always maintain updated component list
- **Performance**: Modern effects with efficiency
- **Maintainability**: Small, focused files

## Project Structure

```
jiffyprints/
├── src/
│   ├── _data/
│   │   ├── site.js              # Site configuration
│   │   ├── components.json      # Component registry
│   │   └── navigation.js        # Navigation data
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk         # Base layout template
│   │   │   └── page.njk         # Page layout template
│   │   └── components/
│   │       ├── navigation/
│   │       │   └── navbar.njk   # Navigation component
│   │       ├── hero/
│   │       │   ├── hero-main.njk
│   │       │   └── hero-simple.njk
│   │       ├── cta/
│   │       │   ├── cta-primary.njk
│   │       │   └── cta-secondary.njk
│   │       ├── forms/
│   │       │   ├── quote-form.njk
│   │       │   └── contact-form.njk
│   │       ├── content/
│   │       │   ├── text-section.njk
│   │       │   ├── feature-grid.njk
│   │       │   └── testimonials.njk
│   │       ├── cards/
│   │       │   ├── service-card.njk
│   │       │   └── blog-card.njk
│   │       └── footer/
│   │           └── footer.njk
│   ├── pages/
│   │   ├── index.njk            # Home page
│   │   ├── embroidery.njk       # Embroidery page
│   │   ├── printing.njk         # Printing page
│   │   ├── blog/
│   │   │   ├── blog.njk         # Blog listing
│   │   │   └── posts/           # Individual blog posts
│   │   ├── quote.njk            # Quote page
│   │   ├── about.njk            # About page
│   │   └── contact.njk          # Contact page
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css        # Main stylesheet
│   │   ├── js/
│   │   │   └── main.js          # Main JavaScript
│   │   └── images/
│   └── admin/
│       └── config.yml           # Netlify CMS config
├── .eleventy.js                 # 11ty configuration
├── netlify.toml                 # Netlify configuration
├── package.json                 # Dependencies
└── README.md                    # Setup instructions
```

## Component System Architecture

### Component Registry (`_data/components.json`)
```json
{
  "components": {
    "navigation": {
      "navbar": {
        "file": "components/navigation/navbar.njk",
        "description": "Main site navigation with logo and menu",
        "props": ["current_page"],
        "variants": ["desktop", "mobile"],
        "lines": 45
      }
    },
    "hero": {
      "hero-main": {
        "file": "components/hero/hero-main.njk",
        "description": "Large hero section with CTA buttons",
        "props": ["title", "subtitle", "cta_primary", "cta_secondary"],
        "variants": ["default", "embroidery-focused"],
        "lines": 65
      },
      "hero-simple": {
        "file": "components/hero/hero-simple.njk",
        "description": "Simple hero for interior pages",
        "props": ["title", "subtitle"],
        "variants": ["default"],
        "lines": 35
      }
    },
    "cta": {
      "cta-primary": {
        "file": "components/cta/cta-primary.njk",
        "description": "Primary call-to-action section",
        "props": ["title", "description", "button_text", "button_link"],
        "variants": ["default", "quote-focused"],
        "lines": 40
      }
    },
    "forms": {
      "quote-form": {
        "file": "components/forms/quote-form.njk",
        "description": "Quote request form with file upload",
        "props": ["form_action", "success_message"],
        "variants": ["default", "embroidery-specific"],
        "lines": 120
      }
    }
  },
  "last_updated": "2025-07-09",
  "total_components": 5,
  "guidelines": {
    "max_lines": 1000,
    "naming_convention": "kebab-case",
    "required_props": ["description", "props", "variants", "lines"]
  }
}
```

### Component Development Rules

#### 1. Component Structure Template
```njk
{# Component: [Name] #}
{# Description: [Brief description] #}
{# Props: [List required props] #}
{# Variants: [List available variants] #}
{# Lines: [Current line count] #}

{% set component_data = {
  name: component_name or "default",
  variant: variant or "default",
  props: props or {}
} %}

<section class="component-[name] variant-{{ component_data.variant }}">
  <!-- Component content here -->
</section>

{# Component styles specific to this component only #}
<style>
  .component-[name] {
    /* Component-specific styles */
  }
</style>
```

#### 2. Line Count Monitoring
- **Maximum**: 1000 lines per file
- **Target**: 50-200 lines for most components
- **Check**: Add line count comment at top of each file
- **Update**: Registry must be updated when components change

#### 3. Component Variants
```njk
{# Example: Hero component with variants #}
{% if variant == "embroidery-focused" %}
  <h1>Professional Embroidery Services</h1>
{% elif variant == "printing-focused" %}
  <h1>Custom Printing Solutions</h1>
{% else %}
  <h1>{{ title }}</h1>
{% endif %}
```

## Page Assembly System

### Page Template Structure
```njk
---
layout: layouts/page.njk
title: "Page Title"
description: "Page description"
components_used: ["navbar", "hero-main", "feature-grid", "cta-primary", "footer"]
---

{# Page-specific data #}
{% set page_data = {
  hero: {
    title: "Custom Page Title",
    subtitle: "Page subtitle",
    variant: "default"
  },
  features: [
    { title: "Feature 1", description: "Description" },
    { title: "Feature 2", description: "Description" }
  ]
} %}

{# Assemble page from components #}
{% include "components/navigation/navbar.njk" %}

{% include "components/hero/hero-main.njk" with {
  title: page_data.hero.title,
  subtitle: page_data.hero.subtitle,
  variant: page_data.hero.variant
} %}

{% include "components/content/feature-grid.njk" with {
  features: page_data.features,
  variant: "three-column"
} %}

{% include "components/cta/cta-primary.njk" with {
  title: "Ready to Start Your Project?",
  button_text: "Get Quote",
  button_link: "/quote"
} %}

{% include "components/footer/footer.njk" %}
```

## Setup Instructions

### 1. Initial Project Setup
```bash
# Clone repository
git clone https://github.com/MCERQUA/jiffyprints.git
cd jiffyprints

# Install dependencies
npm init -y
npm install @11ty/eleventy --save-dev
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
npm install @11ty/eleventy-navigation --save-dev

# Create package.json scripts
```

### 2. 11ty Configuration (`.eleventy.js`)
```javascript
module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Add plugins
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));
  
  // Set directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk"
  };
};
```

### 3. Netlify Configuration (`netlify.toml`)
```toml
[build]
  publish = "_site"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/admin/*"
  to = "/admin/index.html"
  status = 200

[form]
  settings = { spam_protection = true }
```

### 4. Component Development Workflow

#### Creating New Components:
1. **Create component file** in appropriate directory
2. **Follow component template** structure
3. **Add to component registry** in `components.json`
4. **Test component** in isolation
5. **Document props and variants**
6. **Count lines and update registry**

#### Component Update Process:
1. **Modify component** file
2. **Update line count** in registry
3. **Test all pages** using the component
4. **Update documentation** if props change
5. **Commit changes** with clear message

### 5. Page Creation Workflow

#### New Page Process:
1. **Create page file** in `src/pages/`
2. **Define required components** in frontmatter
3. **Assemble components** with page-specific data
4. **Test page rendering**
5. **Add to navigation** if needed
6. **Update sitemap**

## Development Guidelines

### Component Best Practices
- **Single Responsibility**: Each component has one clear purpose
- **Configurable**: Use props for customization
- **Reusable**: Design for multiple contexts
- **Documented**: Clear comments and prop descriptions
- **Tested**: Verify in multiple page contexts

### File Organization
- **Logical Grouping**: Group related components
- **Clear Naming**: Use descriptive, consistent names
- **Version Control**: Commit component changes separately
- **Registry Updates**: Always update registry with changes

### Performance Considerations
- **CSS Scoping**: Component-specific styles only
- **Image Optimization**: Use appropriate formats and sizes
- **JavaScript**: Minimal, progressive enhancement
- **Modern Effects**: CSS-based animations and transitions

## Deployment Workflow

### GitHub to Netlify Pipeline
1. **Push to GitHub** - Code changes committed
2. **Netlify Build** - Automatic deployment trigger
3. **11ty Build** - Static site generation
4. **Deploy** - Live site update
5. **Form Handling** - Netlify forms for quote/contact

### Development Process
1. **Local Development**: `npm run dev` for live reload
2. **Component Testing**: Test components individually
3. **Page Assembly**: Build pages from components
4. **Registry Update**: Keep component list current
5. **Git Commit**: Clear, descriptive commits
6. **Deploy**: Push to trigger auto-deployment

## Component Maintenance

### Regular Tasks
- **Line Count Audits**: Ensure components stay under 1000 lines
- **Registry Updates**: Keep component.json current
- **Performance Checks**: Monitor page load times
- **Component Cleanup**: Remove unused variants
- **Documentation Updates**: Keep README current

### Quality Assurance
- **Component Isolation**: Test each component separately
- **Cross-Page Testing**: Verify components work on all pages
- **Mobile Responsiveness**: Test all components on mobile
- **Accessibility**: Ensure proper semantic HTML
- **Browser Testing**: Check modern browser compatibility

---
*Document created: July 9, 2025*  
*System designed for efficient, maintainable component-based development*
