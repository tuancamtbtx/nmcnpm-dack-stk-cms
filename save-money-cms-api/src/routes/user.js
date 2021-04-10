import express from "express";
let router = express.Router()

router.get('/', (req, res) => {
    res.json({
        status: true,
        message: "success",
        data: [
            {
                name: "tuan cam",
                age: 24
            },
            {
                name: "Khang",
                age: 21
            }
        ]
    })

})
export default router;
  