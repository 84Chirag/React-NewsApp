import React from 'react';
import '../App.css'


export default function Container(props) {  
    return (
        <>
            <div className="container box">
                <div className={`card1 ${props.mode}`} style={{border:props.mode==='dark'?'1px solid red':'1px solid rgba(0,0,0,.125)'}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Contact Form</h5>
                        <p className="card-text">Created A Classic Contact Form With Only HTML & CSS With A beautiful Background image of nature.(Early Learner.) </p>
                        <a href="/" className="btn btn-primary">Source Code</a>
                    </div>
                </div>
                <div className={`card1 ${props.mode}`} style={{border:props.mode==='dark'?'1px solid red':'1px solid rgba(0,0,0,.125)'}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Form With PHP</h5>
                        <p className="card-text">I have Connected A Contact Form to MYSQL Database Using PHP.(Sorry design is not good as I was focused more on Connectivity.)</p>
                        <a href="/" className="btn btn-primary">Source Code</a>
                    </div>
                </div>
                <div className={`card1 ${props.mode}`} style={{border:props.mode==='dark'?'1px solid red':'1px solid rgba(0,0,0,.125)'}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Todo List </h5>
                        <p className="card-text">Created a Todo List while I was Learning Javascript's localstorage as I have connected Todo list with localstorage.</p>
                        <a href="/" className="btn btn-primary">Source Code</a>
                    </div>
                </div>
            </div>
            {/* <button type='button' className='btn btn-primary my-5 mx-5' onClick={toggle}>Dark Mode</button> */}
        </>
    )
}

