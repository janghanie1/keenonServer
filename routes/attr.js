import express from "express"
import * as attributeControllers from "../public/js/controllers/attr.js"
//import * as controllers from "../public/js/controllers/index.js"

const router = express.Router()

//router.get('/table' , controllers.attributeControllers.getPointList)
//router.get('/scene' , controllers.attributeControllers.getSceneList)

router.get('/table', attributeControllers.getPointList)
router.get('/scene', attributeControllers.getSceneList)

export default router
//module.exports = router
