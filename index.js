const express = require("express");
const helmet = require("helmet");
// const morgan = require("morgan");
const logger = require("./middleware/logger");
const hubRouter = require("./routers/hub");
const welcomeRouter = require("./routers/welcome");
const agent = require("./middleware/agent");

const server = express();
server.use(helmet());
// server.use(morgan("short"));
server.use(logger());
server.use(agent("insomnia"));
server.use(express.json());
// Bring all our subroutes into the main application
// (Remember, subroutes can have more children routers)
server.use("/", welcomeRouter);
server.use("/api/hubs", hubRouter);

server.use((err, req, res, next) => {
  console.log(err),
    res.status(500).json({
      message: "Internal error occured, please try again later!"
    });
});
server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
