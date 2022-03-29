const env = process.env.NODE_ENV === "development" ? "" : "/blog";

module.exports = {
  base: env,
  dest: "public",
};
