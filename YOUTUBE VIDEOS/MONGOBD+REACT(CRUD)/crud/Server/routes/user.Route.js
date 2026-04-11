import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router()

router.get("/get", userController.getAll)
router.post("/create", userController.create)
router.get("/get/:id", userController.getOne)
router.put("/update/:id", userController.update)
router.delete("/delete/:id",userController.remove)


export default router