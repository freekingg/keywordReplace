const Router = require("koa-router");
const router = new Router({
  prefix: "/replace",
});
const { create } = require("../controllers/replace");

// router.get("/progress", progress);

router.post("/", create);

// router.get("/:id", findById);

module.exports = router;
