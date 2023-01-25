import React, { useState } from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { db, storage } from "./fireBaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


function Form() {
    const [inputValues, setInputValues] = useState();
    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        const value = event.target.value
        if (name == 'IdCard') {
            console.log(event.target?.files[0])
            setInputValues({
                ...inputValues, [name]: event.target.files[0]
            })
        } else {
            setInputValues({
                ...inputValues, [name]: value
            })
        }
    }
    console.log(inputValues)
    const handleUpload = async (event) => {
        event.preventDefault();

        console.log(Object.keys(inputValues))
        const image = inputValues.IdCard
        console.log(image?.name)
        console.log("imageUploading")
        if (!image) {
            console.log("image not found");
            return
        }
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
                    const docRef = await addDoc(collection(db, "teamInfo"), {
                        timestamp: serverTimestamp(),
                        name: inputValues.CaptainName,
                        email: inputValues.email,
                        imageurl: downloadURL
                    });
                    console.log("Document written with ID: ", docRef.id);
                    // setUrl(downloadURL)
                    console.log('File available at', downloadURL);
                });


            }
        )






        // if(!inputValues) return
        // console.log("uploading to databse")
        //         const docRef = await addDoc(collection(db, "teamInfo"), {
        //             name: inputValues.CaptainName,
        //             email: inputValues.email,
        //         });
        //         console.log("Document written with ID: ", docRef.id);
    }
    return (
        <div className='registration-form '>
            <form className='form'>
                <InputBase required name="CaptainName" type="text" placeholder="Captain's Name..???" onChange={handleChange} />
                <InputBase name="email" type="email" placeholder="example@college.com ..???" onChange={handleChange} />
                <InputBase name="IdCard" type="file" onChange={handleChange} />
                

                <Button type="button" onClick={handleUpload}>Submit</Button>
            </form>
        </div>
    )
}

export default Form