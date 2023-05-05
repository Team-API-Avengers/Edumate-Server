const router = require("express").Route();
const postController = require("../../controller/post.controller");


router.router("/")
    .get(postController.createAPost)




// exports post routes
module.exports = router;