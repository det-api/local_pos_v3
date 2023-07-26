import {
  addDeviceHandler,
  deletDeviceHandler,
  getDeviceHandler,
} from "../controller/device.controller";
import { hasAnyPermit } from "../middleware/permitValidator";
import { validateToken } from "../middleware/validator";

const deviceRoute = require("express").Router();

deviceRoute.get("/", getDeviceHandler);
deviceRoute.post("/", validateToken, hasAnyPermit(["add"]), addDeviceHandler);

export default deviceRoute;
