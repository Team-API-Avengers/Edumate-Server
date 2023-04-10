const router = require("express").Router();
const blogController = require("../../controller/blog.controller");



router.route("/")
    .post(blogController.createBlog)
    .get(blogController.getAllBlog)


router.route("/:id")
    .patch(blogController.updateBlog)
    .delete(blogController.deleteBlog)
    .get(blogController.getASingleBlog)


module.exports = router;