const express = require("express")
const router = express.Router()

const { getAllTasks, 
    createTask,
    getTasksTodo,
    getTask,
    updateTask,
    deleteTask } = require("../controllers/tasks")

router.route("/").get(getAllTasks).post(createTask)
router.route("/todo").get(getTasksTodo)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router