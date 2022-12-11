class task{
    static allTasks=(req,res)=>{
        res.render("allTasks", {pageTitle: "all Task"})
  
    }
    static addTask=(req,res)=>{
        res.render("addtask", {pageTitle: "add Task"})
  
    }
    static delTask=(req,res)=>{
        res.render("del", {pageTitle: "delete Task"})
  
    }
    static editTask=(req,res)=>{
        res.render("edit", {pageTitle: "edit Task"})
  
    }
    static singleTask=(req,res)=>{
        res.render("single", {pageTitle: "single Task"})
  
    }
}





module.exports=task;