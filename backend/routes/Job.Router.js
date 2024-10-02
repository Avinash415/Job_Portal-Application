import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { postJob, getAllJobs, getMyJobs, deleteJob, getASingleJob } from "../controllers/Job.Controller.js";

const jobRouter = express.Router();

jobRouter.post("/post", isAuthenticated, isAuthorized("Employer"), postJob);
jobRouter.get("/getall", getAllJobs);
jobRouter.get("/getmyjobs", isAuthenticated, isAuthorized("Employer"), getMyJobs);
jobRouter.delete("/delete/:id", isAuthenticated, isAuthorized("Employer"), deleteJob);
jobRouter.get("/get/:id", getASingleJob);

export default jobRouter;