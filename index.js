const dotenv = require("dotenv").config();
const express = require("express");
const connectDb = require("./configs/connectDb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
var cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const uploadRouter = require("./routes/uploadRoute");
const templateRouter = require("./routes/templateRoute");
const emailRouter = require("./routes/emailRoute");
const mailLogRouter = require("./routes/mailLogRoute");

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://r8752nt4-5173.inc1.devtunnels.ms",
    ],
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/template", templateRouter);
app.use("/api/email", emailRouter);
app.use("/api/mail", mailLogRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
  connectDb();
});
