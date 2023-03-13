import React from 'react'
import { useParams } from 'react-router-dom';
import "./Images.css"

function Images({data}) {
    let { teamId } = useParams();
    if(!data)return "wait"
    const images = data[teamId]
    // console.log(images.payment_screenshot)
  return (
    <div className='admin_dashboard_images'>
        <h4>Id Card :</h4>
        <img className="image" src={images.id_card} alt="id_card"/>
        <h4>Payment Receipt</h4>
        <img  className = "image"src={images.payment_screenshot} alt="payment receipt"/>

    </div>
  )
}

export default Images