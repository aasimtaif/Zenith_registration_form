// import React, { useState } from 'react'
// // import { db } from './fireBaseConfig';
// // import { collection, addDoc } from "firebase/firestore";
// import { db, storage } from "./fireBaseConfig"
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import Input from '@mui/material/Input';
// import Button from '@mui/material/Button';

// // Create an initial document to update.
// function Form() {
//     const [Input, setInput] = useState();
//     const [image, setImage] = useState();
//     const handleFile = (e) => {
//         if (e.target.files[0]) {
//             setImage( e.target.files[0] )
//             // console.log(file);
//         }
//     }
//     const handleUpload = () => {
//         console.log("imageUploading")
//         if (!image) {
//             console.log("image not found");
//             return
//         }
//         const storageRef = ref(storage, `images/${image.name}`)
//         const uploadTask = uploadBytesResumable(storageRef, image)
//         console.log(image)
//         uploadTask.on(
//             "state_changed",
//             (snapshot) => {
//                 const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                 // setProgress(prog)
//             },
//             (err) => {
//                 console.log(err)
//                 alert(err)
//             },
//             () => {
//                 getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//                     const docRef = await addDoc(collection(db, "info"), {
//                         timestamp: serverTimestamp(),

//                         imageurl: downloadURL
//                     });
//                     console.log("Document written with ID: ", docRef.id);
//                     // setUrl(downloadURL)
//                     console.log('File available at', downloadURL);
//                 });


//             }
//         )
//         console.log('hello')

//     }
    // console.log(file);
    // const uploadDocument = async () => {
    //     const docRef = await addDoc(collection(db, "teamInfo"), {
    //         name: "Tokyo",
    //         sport: "Cricket",
    //         imageUrl:"qwerer",
    //         contact:"262265444"
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    // }
    // uploadDocument();
//     const handleChange = (e)=>{

//     }

//     return (
//         <>
      
// <Button>Submit</Button>
//         </>
//     )
// }

// export default Form 