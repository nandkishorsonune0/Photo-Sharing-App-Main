import React from 'react'
import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };

export default function Landing() {
    return (
        <>
            <div className="landing">
                <div className="landingimg">
                    <img width={400} src="https://images.unsplash.com/photo-1512429234305-12fe5b0b0f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
                </div>
                <div className="enter">
                    <img width={400} src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png" alt="" />
                    <button> <Link to="/main"  style={linkStyle} >Enter</Link>   </button>
                </div>
            </div>
        </>
    )
}
