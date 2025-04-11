import express from "express";
import { addAddress, getAddress } from "../controllers/addressController.js";

const addressRouter = express.Router();

addressRouter.post("/add", authUser, addAddress);
addressRouter.post("/add", authUser, getAddress);

export default addressRouter;
