import React, { useState, useEffect } from 'react'
import sportData from "./Sports"
import axios from "axios"
import { Select, Textarea, Input, Option } from '@mui/joy';
import Teams from './component/Teams';
// import { Input as FileInput } from '@mui/material';
import './App.css';


const URL = "http://localhost:7000"
function App() {
  const [input, setInput] = useState({});
  const [fee, setFee] = useState(0)
  const [data, setData] = useState()


  useEffect(() => {
    const getData = async () => {
      const responce = await axios.get(URL)
      setData(responce.data)
    }
    getData()
  }, []);


  console.log(input, fee)

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${URL}/form`, input)
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
    <>
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
                  <option value={sport.Name} key={sport.key}> {sport.Name}...  ₹{sport.Value}  </option>
                )
              })}
            </select>
          </label>
          <br />
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
            {/* <h4></h4> */}
          </div>

          < button className="submit" type='submit' onClick={handleSubmit}>submit</ button>
        </form>
      </div>
      <Teams data={data} />
    </>
  );
}

export default App;
