import {Router} from "express";

const router = Router()

router.get("/", (req,res) => {
    res.send("Holaaa")
})

router.get("/about", (req,res) => {
    res.send("<h1>About</h1>")
})


export default router;