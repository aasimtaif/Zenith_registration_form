import React, { useState } from 'react'
import sportData from "../SportData/Sports"
import axios from "axios"
import { Textarea, Input } from '@mui/joy';
import { Link } from "react-router-dom";

import '../App';


const URL = "http://localhost:7000"
function Form() {

    const [input, setInput] = useState();
    const [fee, setFee] = useState(0)
    const [messege, setMessege] = useState();
    console.log(input, fee)

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInput({ ...input, [name]: value })
    }

    const handleSubmit = (e) => {
        if (!input?.college_name || !input?.college_location || !input?.sport || !input?.captains_Phone_no || !input?.id_card || !input?.payment_screenshot) {
            setMessege("complete the form BITCH")
            return
        }
        axios.post(`${URL}/form`, input)
            .then(res => { console.log("posted successfully", res) })
            .catch(err => { console.log("error", err.message) })
        setMessege()

    }
    const conversion = (file) => {
        // setInput({...input ,[file.name]:file.files[0]})
        toBase64(file.files[0]).then(res => {
            setInput({ ...input, [file.name]: res })
        }).catch(err => {
            console.log(`error ${err.message}`)
        })
    }
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })

    return (
        <>
            {messege &&
                <h4 className='messege'>{messege}</h4>
            }
            <div className='form'>
                <form action='#'>
                    <label>College Name:
                        <Input required className="input" type="text" name='college_name' onChange={handleInput} />
                    </label>
                    <label>College Address:
                        <Textarea required className="input" minRows={3} placeholder="location..." size="sm" name='college_location' onChange={handleInput} />
                    </label>
                    <label>
                        Sport:
                        <select required className='input' name="sport" onChange={handleInput} >
                            <option > Select the sport </option>

                            {sportData?.map(sport => {
                                return (
                                    <option value={sport.Name} key={sport.key}> {sport.Name}...  ₹{sport.Value}  </option>
                                )
                            })}
                        </select>
                    </label>
                    <br />
                    <label>Captains Name:
                        <Input required className="input" type="text" name='captains_name' onChange={handleInput} />
                    </label>
                    <label> Captains Phone number
                        <Input required className="input" type="text" name='captains_Phone_no' onChange={handleInput} />
                    </label>
                    <label>Captains College Id card:
                        <input required className="input" type="file" name='id_card' onChange={(e) => { conversion(e.target) }} />
                    </label>
                    <label>Payment Screenshot:
                        <input required className="input" type="file" name='payment_screenshot' onChange={(e) => { conversion(e.target) }} />
                    </label>
                    <div className='fees'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg" alt="QR code" />
                        {/* <h4></h4> */}
                    </div>
                    <Link to="/">
                        < button className="submit" type='submit' onClick={handleSubmit}>submit</ button>
                    </Link>
                </form>
            </div>

        </>
    );
}

export default Form;
