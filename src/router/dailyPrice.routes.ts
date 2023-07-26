import {
  addDailyPriceHandler,
  deleteDailyPriceHandler,
  getDailyPriceHandler,
  updateDailyPriceHandler,
} from "../controller/dailyPrice.controller";
import { hasAnyPermit } from "../middleware/permitValidator";
import { validateToken } from "../middleware/validator";

const dailyPriceRoute = require("express").Router();

dailyPriceRoute.get(
  "/:page",
  validateToken,
  hasAnyPermit(["view"]),
  getDailyPriceHandler
);

dailyPriceRoute.post(
  "/",
  validateToken,
  hasAnyPermit(["add"]),
  addDailyPriceHandler
);

dailyPriceRoute.patch(
  "/",
  validateToken,
  hasAnyPermit(["edit"]),
  updateDailyPriceHandler
);

dailyPriceRoute.delete(
  "/",
  validateToken,
  hasAnyPermit(["delete"]),
  deleteDailyPriceHandler
);

export default dailyPriceRoute;
