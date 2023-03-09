import React, { useState } from 'react';



var amt=0;
function Register2(data) {
   const [isChecked, setIsChecked] = useState(false);

   function handleCheckboxChange(event) {

    setIsChecked(event.target.checked);
    if(isChecked==false)
    {
      amt=amt+data.value;
      console.log(amt);
    }
    if(isChecked==true)
    {
      amt=amt-data.value;
      console.log(amt);
    }
   }

  return (

      <>
      <label for={data.id}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          id={data.id}
        />
        {data.name}
      </label>
      <label>

        <input
          type="text"
          disabled={!isChecked}
          placeholder="Captain's Name"
        />
      </label>
      <label>
        <input
          type="text"
          disabled={!isChecked}
          placeholder="Captain's Mobile No."
        />
      </label>

        <br />
      </>
  );
}

export default Register2;
export {amt};
