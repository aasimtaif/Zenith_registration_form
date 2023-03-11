import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Routes , Route} from 'react-router-dom'
import './App.css';
import { Form,Teams } from './component';


const URL = "http://localhost:7000"
function App() {

  const [data, setData] = useState()


  useEffect(() => {
    const getData = async () => {
      const responce = await axios.get(URL)
      setData(responce.data)
    }
    getData()
  }, []);


console.log(data)
  return (
    <div>
<Routes>
  <Route path='/' element={<Form />}/>
  <Route path='/admin' element={<Teams data = {data}/>}/>

</Routes>

      
    </div>
  );
}

export default App;
