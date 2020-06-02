// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// https://docs.google.com/spreadsheets/d/1opOCQWMLPI6aSzauqv2dLfjZVvLgVOJOGA8-kQkkZ64/edit?usp=sharing

module.exports = {
  siteName: "Korea Pet Project",
  plugins: [
    {
      use: "gridsome-source-google-sheets",
      options: {
        sheetId: "1opOCQWMLPI6aSzauqv2dLfjZVvLgVOJOGA8-kQkkZ64",
        apiKey: "AIzaSyAYnaT7RMC4Knz8XsDSDUrfrfojS8bxFDM",
	  }
    },
  ],
  templates: {
    googleSheet: [
      {
        path: "/:id",
        component: "./src/templates/googleSheet.vue",
      },
	]
  },
};
