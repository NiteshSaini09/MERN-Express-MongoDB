import multer from "multer";
const storage=multer.diskStorage({
    destination:function(req,file,cd){
        cd(null,("./src/public/temp"))
    },
    filename:function(req,file,cd){
        cd(null,file.originalname.replaceAll(" ","_").replaceAll(/\d+/g, ""))
    }
})
export const upload=multer({storage})