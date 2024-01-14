import multer from "multer";
import {v4 as uuid , v3} from "uuid"
multer().single("file");
//storing it in the harddisk not in server so that after server restart file remain

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads");
    },
    filename:(req,file,cb)=>{
        const id=uuid();
        const extname=file.originalname.split(".").pop();
        const fileName=`${id}.${extname}`;
        cb(null,fileName);
    }
});
export const singleupload=multer({storage}).single("photo");
