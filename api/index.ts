// const { conn } = require("./src/db.js");
import server from "./src/app";

// Syncing all the models at once.
// conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 5000, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
// });
