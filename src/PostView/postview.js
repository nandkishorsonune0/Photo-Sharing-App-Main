import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Header() {
    let navigate = useNavigate();
    return (
        <>
            <div className="head">
                <img width={200} src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png" alt="" />
                <div className='camera'>
                    <i className="bi bi-camera" onClick={() => navigate("../post", { replace: true })} ></i>
                    <h6>
                    <button className="bi bi-camera" onClick={() => navigate("../post", { replace: true })}>Post</button></h6>
                </div>
            </div>
        </>
    )
}
export function Postview(props) {
    return (
        <>
            <div className="card">
                <div className="header"><div><h5>{props.name}</h5>
                    <p>{props.location}</p></div>
                    <i className="bi bi-three-dots"></i></div>
                <div className="image">
                    <img width={450} height={250} src={props.image} alt="" />
                </div>
                <div className="lsd">
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-send"></i>
                    <p>{props.date}</p>
                </div>
                <p className='likes'>{props.likes} likes</p>
                <div className="description">
                    <h5>{props.description}</h5>
                </div>
            </div>

        </>
    )
}
