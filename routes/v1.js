import express from "express"

import robotRoutes from "./robot.js"
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


