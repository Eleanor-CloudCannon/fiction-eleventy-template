const pluginBookshop = require("@bookshop/eleventy-bookshop");
const fg = require('fast-glob');
const fs = require('fs');

module.exports = function (eleventyConfig) {
  // ...

  eleventyConfig.addPlugin(pluginBookshop({
    bookshopLocations: ["component-library"],
    pathPrefix: '',
  })
  );
  const CleanCSS = require("clean-css");
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
}


eleventyConfig.addShortcode("include-all", function(dir) {
  const entries = fg.sync([dir], { dot: true });
  let css = ""
  for(entry in entries){
      css += fs.readFileSync(entries[entry])
  }
  return css
});

  // ...
  eleventyConfig.ignores.add("site/schemas");
  eleventyConfig.addPassthroughCopy("site/css");
  eleventyConfig.addPassthroughCopy("site/fonts");
  eleventyConfig.addPassthroughCopy("site/images");
  eleventyConfig.addPassthroughCopy("site/video");
  eleventyConfig.addPassthroughCopy("site/js");
  eleventyConfig.addPassthroughCopy("site/vendor");
  eleventyConfig.addPassthroughCopy("theme.css");
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("site/assets/scss");
  return {
    dir: {
      input: "site",
      pages: "pages",
    },
  };
};
