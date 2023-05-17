const pluginBookshop = require("@bookshop/eleventy-bookshop");

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

  // ...
  eleventyConfig.ignores.add("site/schemas");
  eleventyConfig.addPassthroughCopy("site/css");
  eleventyConfig.addPassthroughCopy("site/fonts");
  eleventyConfig.addPassthroughCopy("site/images");
  eleventyConfig.addPassthroughCopy("site/js");
  eleventyConfig.addPassthroughCopy("site/vendor");
  eleventyConfig.addPassthroughCopy("theme.css");
  eleventyConfig.addPassthroughCopy("site/assets");
  return {
    dir: {
      input: "site",
      pages: "pages",
    },
  };
};
