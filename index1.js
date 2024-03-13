// Asynchronous operation to create a folder 
const fs = require('fs');
// fs.mkdir('space_project', (err) => {
//     if (err) {
//        console.error('Error creating folder asynchronously (Promise):', err);
//         reject(err);
//        return;
//     }
// });
// Synchronous operation to create a folder

// fs.mkdirSync('space_project_Sync');
// console.log('Folder created synchronously.');
//fs.appendFileSync("First Text","\n hello");

// // Synchronous operation to create a file and write content

//fs.writeFileSync('space_project_Sync/log.txt', "is planning Gaganyaan mission, i.e., an Indian crewed orbital spacecraft.\n");
// console.log('File created and content written synchronously.');

// // Asynchronous operation to create a file and write content 

// fs.writeFile('space_project/log.txt', "ISRO ing Gaganyaan mission, i.e., an Indian crewed orbital spacecraft.\n", (err) => {
//     if (err) {
//         console.error('Error creating file and writing content asynchronously :', err);
//         return;
//     }
// }
// );
//fs.writeFileSync('space_project_Sync/log.txt', " ISRO has started working on Gaganyaan. \n");
// console.log('File created and content written synchronously.');

// // Asynchronous operation to create a file and write content 

// fs.writeFile('space_project/log.txt', " ISRO has started working on Gaganyaan. \n", (err) => {
//     if (err) {
//         console.error('Error creating file and writing content asynchronously :', err);
//         return;
//     }
// }
// );

// // Synchronous operation to append content to a file

 //fs.appendFileSync('space_project_Sync/log.txt', "The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.\n");

// // Asynchronous operation to append content to a file 

// fs.appendFile('space_project/log.txt', "The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.\n", (err) => {
//     if (err) {
//         console.error('Error appending content asynchronously (Callback):', err);
//         return;
//     }
//     console.log('Content appended asynchronously.');
// });
// fs.renameSync('space_project_Sync/log.txt', 'space_project_Sync/update.txt');
//        console.log('File renamed synchronously.');

// fs.rename('space_project/log.txt', 'space_project/update.txt', (err) => {
//     if (err) {
//         console.error('Error renaming file asynchronously (Callback):', err);
//             return;
//         }
//         console.log('File renamed asynchronously.');
// });

// // Synchronous operation to read file content

// const data = fs.readFileSync('space_project_Sync/update.txt', 'utf-8');
// console.log('File content (synchronously):', data);
// console.log('We are excited.');

// // Asynchronous operation to read file content using callbacks

// fs.readFile('space_project/update.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error reading file asynchronously :', err);
//         return;
//     }
//     console.log('File content (asynchronously):', data);
//     console.log('We are excited.');
// });

// Synchronous operation to delete a file


// fs.unlinkSync('space_project_Sync/update.txt');
//         console.log('File deleted synchronously.');

// // Asynchronous operation to delete a file 

// fs.unlink('space_project/update.txt', (err) => {
//         if (err) {
//             console.error('Error deleting file asynchronously:', err);
//             return;
//             }
//             console.log('File deleted asynchronously.');
// });

// Synchronous operation to delete a folder

fs.rmdirSync('space_project_Sync', { recursive: true });
        console.log('Folder deleted synchronously.');

// Asynchronous operation to delete a folder using callbacks

fs.rmdir('space_project', { recursive: true }, (err) => {
    if (err) {
        console.error('Error deleting folder asynchronously :', err);
            return;
        }
        console.log('Folder deleted asynchronously.');
});