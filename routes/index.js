import express from "express"
import v1 from "./v1.js"

const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('keenon server')
})

router.use("/v1", v1)

export default router
//module.exports = router
