import React, { useState } from 'react';
import Register2, {amt} from "./Register2";
import Sport_data from "./Register_data";

function Register() {
  const [amount, setamount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit');
    // Add your registration logic here
  }

function TotalPrice()
{
  setamount(amt);
}

  return (
    <form action="#">
    <label>
      College Name:
      <input
        type="text"
        placeholder="College Name"
      />
    </label>
    <br />
    <label>
      Sport Secretary Name:
      <input
        type="text"
        placeholder="SS Name"
      />
    </label>
    <br />
    <label>
      SS Mobile:
      <input
        type="text"
        placeholder="SS Mobile"
      />
    </label>
    <br />
    <label>
      SS Email:
      <input
        type="text"
        placeholder="SS Email"
      />
    </label>
    <br />
    <p> Sports </p>
    {Sport_data.map((data) => (
                  <Register2
                    key={data.key}
                    id={data.id}
                    value={data.Value}
                    name={data.Name}
                      />
                  ))}



      <button onClick={TotalPrice}>Total Amount</button>
      {amount}
      <br />
      <button type="submit" onClick={handleSubmit}>Register</button>
    </form>

  );
}

export default Register;
