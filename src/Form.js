import React, { useState } from 'react'
// import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { db, storage } from "./fireBaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";


function Form() {
    const [inputValues, setInputValues] = useState({});
    const [imageInputValues, setImageInputValues] = useState({
        IdCard:"" ,payment:""
    });
    const [imageUrl, setImageUrl] = useState({});

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        const value = event.target.value
        if (name === 'IdCard' || name === 'payment') {
            // console.log(event.target?.files[0])
            setImageInputValues({
                ...imageInputValues, [name]: event.target.files[0]
            })
        } else {
            setInputValues({
                ...inputValues, [name]: value
            })
        }
    }

    // console.log(inputValues, imageInputValues)
    const imageUploading = (imageName, image) => {

        if (!image) {
            console.log("image not found");
            return
        }
        const storageRef = ref(storage, `images/${image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, image)
        // console.log(image)
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
                    // const docRef = await addDoc(collection(db, "teamInfo"), {
                    //     timestamp: serverTimestamp(),
                    //     name: inputValues.CaptainName,
                    //     email: inputValues.email,
                    //     [imageName]: downloadURL
                    // });
                    // console.log("Document written with ID: ", docRef.id);
                    setImageUrl((prevState) => ({
                        ...prevState,
                        [imageName]: downloadURL,
                      }));

                    // setImageUrl(
                    //     (
                    //         {[imageName]: downloadURL})
                    //     )
                    // console.log('File available at', downloadURL);
                });


            }
        )

    }

    console.log(imageUrl)
    const handleUpload = (event) => {
        event.preventDefault();

        // console.log(Object.keys(inputValues))
        const image = inputValues.IdCard
        console.log("imageUploading")
        imageUploading("IdCard", imageInputValues.IdCard)
        imageUploading("payment", imageInputValues.payment)


        // imageUploading("payment", imageInputValues.payment)


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
                <InputBase name="payment" type="file" onChange={handleChange} />



                <Button type="submit " onClick={handleUpload}>Submit</Button>
            </form>
        </div>
    )
}

export default Form