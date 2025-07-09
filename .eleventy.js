module.exports = function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Add plugins
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));
  
  // Watch for changes in CSS files
  eleventyConfig.addWatchTarget("src/assets/css/");
  
  // Date filter for blog posts
  eleventyConfig.addFilter("dateDisplay", function(dateObj) {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  
  // Excerpt filter for blog posts
  eleventyConfig.addFilter("excerpt", function(content) {
    const excerpt = content.replace(/(<([^>]+)>)/gi, "");
    return excerpt.substr(0, 150) + "...";
  });
  
  // Collection for blog posts
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("src/blog/posts/**/*.md").reverse();
  });
  
  // Return directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    pathPrefix: "/"
  };
};