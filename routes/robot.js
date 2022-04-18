import express from "express"
import * as controllers from "../public/js/controllers/index.js"

const router = express.Router()

router.post('/remote', controllers.robotController.createRemoteCall)
router.post('/back', controllers.robotController.backRemoteCall)

export default router
//module.exports = router

