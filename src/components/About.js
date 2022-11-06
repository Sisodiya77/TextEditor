import React from 'react'
import img from "./About.jpg"
import Linkdin from "./Linkdin.ico"


export default function About(props) {
  return (
    <>
      <div className={`container bg-${props.mode} text-${props.mode==='dark' ? 'white':'dark'} card w-75`}>
  <img src={`${img}`} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">About Us</h5>
    <p className="card-text">I'm Working individual who is website to get experiance in my work and get aknowledge by others. At TextEditor, I believe this website can help people in need.</p>
    <a href="https://linkedin.com/in/dhirendra-sisodiya-a3aa00226" className="">
        <img src={`${Linkdin}`} alt="" />
        
    </a>
  </div>
</div>

    </>
  )
}
