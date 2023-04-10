const express = require("express");
const app = express();
const cors = require("cors");
const tutorRouter = require("./routes/v1/tutor.route");
const userRouter = require("./routes/v1/user.route");
const blogRouter = require("./routes/v1/blog.route");
const feedBackRouter = require("./routes/v1/feedback.route")




// middleware
app.use(express.json());
app.use(cors());


// tutor Api-----------------------------
app.use("/api/v1/tutor", tutorRouter)

// user api ------------------------------
app.use("/api/v1/user", userRouter)


// use blog routes ---
app.use("/api/v1/blogs", blogRouter)


// feedback api ----------------------------
app.use("/api/v1/feedback", feedBackRouter)









// ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});


module.exports = app;