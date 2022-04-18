import express from "express"
//import * as controllers from "../public/js/controllers/index.js"
import * as attributeControllers from "../public/js/controllers/attr.js"

const router = express.Router()

//router.get('/table' , controllers.attributeControllers.getPointList)
router.get('/table', attributeControllers.getPointList)

export default router
//module.exports = router
