# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation and planning repository for **Jiffyprints**, a custom embroidery and printing services website. The project is designed to use **11ty (Eleventy)** as a static site generator with **Netlify** deployment and a **modular component system**.

## Architecture

### Planned Tech Stack
- **Framework**: 11ty (Eleventy) - Static Site Generator
- **Deployment**: Netlify - Hosting & Form Handling
- **Styling**: Custom CSS with jiffyprints-stylesheet.css
- **Components**: Modular 11ty includes system

### Project Structure (Planned)
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
│   │       ├── hero/
│   │       ├── cta/
│   │       ├── forms/
│   │       ├── content/
│   │       ├── cards/
│   │       └── footer/
│   ├── pages/
│   │   ├── index.njk            # Home page
│   │   ├── embroidery.njk       # Embroidery page (primary focus)
│   │   ├── printing.njk         # Printing page
│   │   ├── blog/
│   │   ├── quote.njk            # Quote page
│   │   ├── about.njk            # About page
│   │   └── contact.njk          # Contact page
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   └── admin/
│       └── config.yml           # Netlify CMS config
├── .eleventy.js                 # 11ty configuration
├── netlify.toml                 # Netlify configuration
└── package.json                 # Dependencies
```

## Development Commands

**Note**: The actual implementation has not yet been built. These commands are from the planning documentation:

### Setup Commands
```bash
# Install dependencies
npm init -y
npm install @11ty/eleventy --save-dev
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
npm install @11ty/eleventy-navigation --save-dev

# Development server
npm run dev

# Build for production
npm run build
```

## Business Context

**Jiffyprints** is a custom embroidery and printing services company with:
- **Primary Focus**: Embroidery services (logos, text, designs)
- **Secondary Services**: DTF printing, DTG printing, screen printing
- **Target Market**: Businesses, teams, organizations in Toronto with national reach
- **Key Value Props**: Fast turnaround, quality, personalized service, low minimums (6 items)

### Page Priority
1. **Home** - First impression and overview
2. **Embroidery** - Primary service (highest priority)
3. **Quote** - Lead generation
4. **Blog** - Content marketing and SEO
5. **Contact** - Customer communication
6. **About** - Trust building
7. **Printing** - Secondary services

## Component System Guidelines

### Component Development Rules
- **Maximum**: 1000 lines per component file
- **Target**: 50-200 lines for most components
- **Registry**: Must maintain updated components.json
- **Variants**: Support multiple variations per component
- **Props**: Use standardized prop system
- **Naming**: kebab-case convention

### Component Structure Template
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
```

## Key Development Principles

1. **Modular Design**: Each component under 1000 lines
2. **Reusable Components**: DRY principle with variations
3. **Component Registry**: Always maintain updated component list
4. **Embroidery Focus**: Primary service should be prominently featured
5. **Performance**: Modern effects with efficiency
6. **Maintainability**: Small, focused files

## Content Strategy

- **Embroidery-First**: 60% embroidery content, 40% general printing
- **Blog Categories**: Embroidery Tips, Design Ideas, Industry Insights, Customer Stories
- **SEO Focus**: Embroidery-related keywords, local Toronto SEO
- **User Journey**: Home → Embroidery → Blog → Quote → Contact

## Current Status

This repository currently contains **documentation and planning only**. The actual 11ty implementation has not been built yet. All references to build commands, components, and file structure are planning documents for future implementation.

## Next Steps for Implementation

1. Initialize npm project with 11ty dependencies
2. Create .eleventy.js configuration
3. Build basic component system with registry
4. Implement core pages (Home, Embroidery, Quote)
5. Set up Netlify deployment configuration
6. Create blog system with CMS integration