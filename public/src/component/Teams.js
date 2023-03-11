import React from 'react'
import "./Teams.css"
function Teams({ data }) {
    console.log(data)
    return (
        <div className='admin_dashboard'>
                <table>
                            <thead>
                                <tr>

                                    <th>College Name</th>
                                    <th>Sport</th>
                                    <th>Captains name</th>
                                    <th>Captains number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((team, index) => {
                                    return (<tr key={index}>
                                        
                                        <td>{team.college_name}</td>
                                        <td>{team.sport}</td>
                                        <td>{team.captains_name}</td>
                                        <td>{team.captains_Phone_no}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
            {data?.map(team => {
                return (
                    <>
                    
                        {/* <div className="team_data" key={team.id}>
                            <p>{team.college_name}</p>
                            <p>{team.college_location}</p>
                            <p>{team.captains_name}</p>
                            <p>{team.captains_Phone_no}</p>

                            <img src={team.id_card} alt="idCard" />
                            <img src={team.payment_screenshot} alt="Paymentproof" />
                        </div> */}
                    </>
                )
            })}</div>
    )
}

export default Teams