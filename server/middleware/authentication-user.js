export const authenticate_user = (req,res,next)=>{
    if(req.session.currentUserId)
    {
        console.log(req.session.currentUserId);
        next();
    }
    else{
        res.redirect("/user");
        console.log(req.session);
    }
}