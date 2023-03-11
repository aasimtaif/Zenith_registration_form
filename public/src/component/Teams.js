import React from 'react'

function Teams({ data }) {
    console.log(data)
    return (
        <div>{data?.map(team =>{
            return(
                <div key ={team.id}>
                <p>{team.college_name}</p>
                <img src={team.id_card}/>
                <img src={team.payment_screenshot}/>
                </div>
            )
        })}</div>
    )
}

export default Teams