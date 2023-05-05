const router = require("express").Router();
const postController = require("../../controller/post.controller")



router.route("/")
    .post(postController.createAPost)
    .get(postController.getSubmittedData)



// exports post routes
module.exports = router;