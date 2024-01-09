import multer from "multer";
multer().single("file");
//storing it in the harddisk not in server so that after server restart file remain

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});
export const singleupload=multer({storage}).single("photo");
