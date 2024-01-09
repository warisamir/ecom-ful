import multer from "multer";
multer().single("file");

const storage=multer.diskStorage({});
export const singleupload=multer({storage}).single("photo")