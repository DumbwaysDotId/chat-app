module.exports = {
  "presets": ["module:metro-react-native-babel-preset"],
  plugins: [
    ["module-resolver", {
      alias: {
        // "@actions": `./src/_redux/actions`
      }
    }]
  ]
}