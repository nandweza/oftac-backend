// import multer from 'multer';

// const Storage = multer.diskStorage({
//     destination: 'uploads/',
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

// export const upload = multer({ storage: Storage }).single('img');

import multer from 'multer';

const storage = multer.memoryStorage(); // Store the file in memory, not on disk

const upload = multer({ storage }).single('img');

export { upload };
