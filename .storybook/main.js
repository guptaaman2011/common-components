module.exports = {
  stories: [
    "../components/**/*.stories.js",
    "../modules/**/container/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs/register"
  ]
};
