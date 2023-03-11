import React, { useState } from 'react'
import sportData from "./Sports"
import axios from "axios"
import { Select, Textarea, Input, Option } from '@mui/joy';

// import { Input as FileInput } from '@mui/material';
import './App.css';


const postURL = "http://localhost:7000"
function App() {
  const [input, setInput] = useState({});
  const [fee, setFee] = useState(0)

  console.log(input, fee)

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${postURL}/form`, input)
      .then(res => { console.log("posted successfully", res) })
      .catch(err => { console.log("error", err.message) })
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
    <div className='form'>
      <form>
        <label>College Name:
          <Input className="input" type="text" name='college_name' onChange={handleInput} />
        </label>
        <label>College Address:
          <Textarea className="input" minRows={3} placeholder="location..." size="sm" name='college_location' onChange={handleInput} />
        </label>
        <label>
          Sport:
          <select className='input' name="sport" onChange={handleInput} >
            {sportData?.map(sport => {
              return (
                <option onClick={(e) =>  setFee(sport.Value) } value={sport.Name} key={sport.key}>{sport.Name} </option>
              )
            })}
          </select>
        </label>
        <br/>
        <label> Captains Phone number
          <Input className="input" type="text" name='captains_Phone_no' onChange={handleInput} />
        </label>
        <label>Captains College Id card:
          <input className="input" type="file" name='id_card' onChange={(e) => { conversion(e.target) }} />
        </label>
        <label>Payment Screenshot:
          <input className="input" type="file" name='payment_screenshot' onChange={(e) => { conversion(e.target) }} />
        </label>
        <div className='fees'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg" />
          <h4>₹{fee}</h4>
        </div>

        < button className="submit" type='submit' onClick={handleSubmit}>submit</ button>
      </form>

    </div>
  );
}

export default App;
