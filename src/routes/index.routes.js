import { Router } from "express";
const router = Router()
const projectModel = require("../models/Project");

router.get("/", async (req, res) => {
    const projects = await projectModel.find()
    res.json(projects)
})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const projectId = await projectModel.findById(id)
        console.log(projectId);
        projectId?.name?.length?
            res.json(projectId) :
            res.json({ message: "Project not found" })

    } catch (error) {
        res.json({ message: error.message })

    }
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

router.put("/:id", async (req, res) => {
    // console.log("Update")
    const { id } = req.params
    const { name, priority } = req.body
    const updateProject = await projectModel.findByIdAndUpdate(id, { name, priority })
    res.json(updateProject)
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const projectId = await projectModel.findByIdAndDelete(id)

        res.json(projectId)
    } catch (error) {
        console.log(error);
    }
})

export default router;