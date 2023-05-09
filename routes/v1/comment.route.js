const router = require("express").Router();
const commentController = require("../../controller/comment.controller")

router.route("/")
.post(commentController.createComment)

router.route("/:id")
    .get(commentController.getAcomment)

module.exports = router