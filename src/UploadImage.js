import React, { useState } from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { db, storage } from "./fireBaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function UploadImage() {
    const [image, setImage] = useState();
    const handleChange = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0]);
            setImage(e.target.files[0])
        }
    }
    const uploadImage = () => {

        console.log("imageUploading")
        if (!image) {
            console.log("image not found");
            return
        }
        console.log('Uploadign the image')
        const storageRef = ref(storage, `images/${image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, image)
        console.log(image)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
                // setProgress(prog)
            },
            (err) => {
                console.log(err)
                alert(err)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    const docRef = await addDoc(collection(db, "info"), {
                        timestamp: serverTimestamp(),

                        imageurl: downloadURL
                    });
                    console.log("Document written with ID: ", docRef.id);
                    // setUrl(downloadURL)
                    console.log('File available at', downloadURL);
                });
            }

        )
    }

    return (
        <div>
            <Input type="file" onChange={handleChange} />
            <Button type="button" onClick={uploadImage}>Submit</Button>

        </div>
    )
}

export default UploadImage