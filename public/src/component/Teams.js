import React from 'react'
import { Link } from "react-router-dom";

import "./Teams.css"
function Teams({ data }) {
    console.log(data)
    return (
        <div className='admin_dashboard'>
            <table>
                <thead>
                    <tr>
                        <th>College Name</th>
                        <th>College Location</th>

                        <th>Sport</th>
                        <th>Captains name</th>
                        <th>Captains number</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((team, index) => {
                        return (<tr key={index}>

                            <td>{team.college_name}</td>
                            <td>{team.college_location}</td>

                            <td>{team.sport}</td>
                            <td>{team.captains_name}</td>
                            <td>{team.captains_Phone_no}</td>
                            <td><Link to={`/admin/images/${index}`} className='image'>view more...</Link></td>

                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Teams