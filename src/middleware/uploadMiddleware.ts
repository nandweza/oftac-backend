import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // Specify the directory where you want to store the uploaded files
        callback(null, 'uploads/'); // You can customize the path as needed
    },
    filename: (req, file, callback) => {
        // Specify how the file should be named
        callback(null, file.originalname); // You can customize the filename if needed
    },
});

const upload = multer({ storage }).single('img');

export { upload };
