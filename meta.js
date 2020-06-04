module.exports = {
  prompts: {
    name: {
      type: "string",
      message: "Project name",
    },
    description: {
      type: "string",
      message: "Project description",
      default: "A VuePress project",
    },
    author: {
      type: "string",
      message: "Author",
    },
    licence: {
      type: "string",
      message: "licence",
      default: "MIT",
    },
    // confirm flugs
    isUseGlsl: {
      type: "confirm",
      message: "Do you need GLSL loader?",
    },
    isUseAnalytics: {
      type: "confirm",
      message: "Do you need GoogleAnalytics?",
    },
  },
  skipInterpolation: ["src/**/*.vue", "src/.vuepress/templates/*.html"],
  complete: (data) => {
    console.log("\nTo get started:");
    if (!data.inPlace) {
      console.log(`  cd ${data.destDirName}`);
    }
    console.log("  yarn install");
    console.log("  yarn start");
  },
};
