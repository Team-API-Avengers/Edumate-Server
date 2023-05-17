const express = require("express");
const app = express();
const cors = require("cors");
const tutorRouter = require("./routes/v1/tutor.route");
const userRouter = require("./routes/v1/user.route");
const blogRouter = require("./routes/v1/blog.route");
const feedBackRouter = require("./routes/v1/feedback.route")
const bookingRouter = require("./routes/v1/booking.route");
const paymentRouter = require("./routes/v1/payment.route")
const testRouter = require("./routes/v1/test.route");
const postRouter = require("./routes/v1/post.route");
const commentRouter = require("./routes/v1/comment.route")
const tutorTestRouter= require("./routes/v1/tutorTest.route")
const assesmentRouter = require("./routes/v1/assesment.route")



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



// bookings route api---------------
app.use("/api/v1/bookings", bookingRouter)


// test route --------------------- 
app.use("/api/v1/test", testRouter)

// post route --------------------- 
app.use("/api/v1/searching-teacher", postRouter)


// payment route --------------------------
app.use("/api/v1/payment", paymentRouter)

// comment route-----------------------------
app.use("/api/v1/comment",commentRouter)

// tutor test ------------------------------
app.use("/api/v1/tutortest",tutorTestRouter)

// assement route -----------------------
app.use("/api/v1/assesment",assesmentRouter)


// ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});









module.exports = app;