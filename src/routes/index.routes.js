import { Router } from "express";
const { model } = require("mongoose")
// var Project = model('Project');
const router = Router()
const projectModel = require("../models/Project");

router.get("/", (req, res) => {
    res.send("Holaaa")
})

router.post("/", async (req, res) => {
    const { name, priority } = req.body
    const newPost = new projectModel({ name, priority })
    try {

        const post = await newPost.save()

        res.json(post)
    } catch (error) {
        console.log(error);
    }
})


export default router;