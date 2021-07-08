const Router = require("koa-router");
const router = new Router({
  prefix: "/replace",
});
const { create ,getWebsite} = require("../controllers/replace");

router.get("/getWebsite", getWebsite);

router.post("/", create);

// router.get("/:id", findById);

module.exports = router;
