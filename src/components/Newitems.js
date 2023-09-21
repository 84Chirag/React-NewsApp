import React from 'react'


const Newitems = (props) => {
    let { title, description, imgurl, newsdeatil } = props
    return (
        <div className={`card1 ${props.mode}`} style={{ width: "18rem" }}>
            <img src={imgurl ? imgurl : "https://images.moneycontrol.com/static-mcnews/2022/01/GDP_India_shutterstock_1368069491-770x433.jpg"} className="card-img-top" alt="..." />
            <div className={`card-body ${props.mode}`}>
                <h5 className={`card-title ${props.mode}`}>{title}</h5>
                <p className={`card-text ${props.mode}`}>{description}</p>
                <a href={newsdeatil} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Newitems
