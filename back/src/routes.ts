import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import PotholesController from "./controllers/PotholesController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/potholes", PotholesController.index);

routes.get("/potholes/:id", PotholesController.show);

routes.post("/potholes", upload.array("images"), PotholesController.create);

export default routes;
