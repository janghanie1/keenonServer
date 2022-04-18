import express from "express"

//var robotRoutes = require('./robot.js')
import robotRoutes from "./robot.js"
//var attrRoutes = require('./attr.js')
import attrRoutes from "./attr.js"

const router = express.Router()

router.get("/", function(req, res, next) {
	res.json({
		status: "success",
	})
})

router.use("/robot", robotRoutes)
router.use("/attr", attrRoutes)

export default router

//module.exports = router

