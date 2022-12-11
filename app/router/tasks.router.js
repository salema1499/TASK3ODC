const router=require("express").Router()
const taskControl=require("../controller/task.control")

router.get("/", taskControl.allTasks)


router.get("/addTask", taskControl.addTask)


router.get("/delTask", taskControl.delTask)


router.get("/editTask", taskControl.editTask)


router.get("/singleTask", taskControl.singleTask)




module.exports=router