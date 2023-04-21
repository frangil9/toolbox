const express = require("express");
const config = require("./config");
const cors = require("cors");
const logger = require("./utils/logger");
const morgan = require("morgan");
const fileRoute = require("./routes/file.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  morgan("short", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

app.use("/api/files", fileRoute);

app.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

const PORT = config.PORT;

app.listen(PORT, () => {
  logger.info(
    `Server running on port number: ${PORT}`
  );
});
