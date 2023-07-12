import { Application } from "express";
import tutorialRoutes from "./tutorial.routes";
import homeRoutes from "./home.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/tutorials", tutorialRoutes);
  }
}
