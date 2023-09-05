import multer from 'multer';

const storage = multer.memoryStorage(); // Store the file in memory, not on disk

const upload = multer({ storage }).single('img');

export { upload };
