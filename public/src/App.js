import React, { useState } from 'react'
import sportData from "./Sports"
import './App.css';
import { type } from '@testing-library/user-event/dist/type';

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
    console.log("submited")
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
      <p>College Name:</p>
      <input type="text" name='college_name' onChange={handleInput} />
      <p>College Address:</p>
      <input type="text" name='college_location' onChange={handleInput} />
      <p> Captains Phone number</p>
      <input type="number" name=' captains_Phone_no' onChange={handleInput} />

      <p>Captains College Id card:</p>
      <input type="file" name='id_card' onChange={(e) => { conversion(e.target) }} />
      <p>Payment Screenshot:</p>
      <input type="file" name='payment_screenshot' onChange={(e) => { conversion(e.target) }} />
    </div>
  );
}

export default App;
