import React from 'react'
import "./sidebox.scss"
import { Link } from 'react-router-dom'

const SideBox = (props) => {
    return (
        <div className='sideboxcontainer'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <Link className="link" to={props.to}>
                {props.tolabel}
            </Link>
        </div>
    )
}

export default SideBox