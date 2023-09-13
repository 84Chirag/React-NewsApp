import React, { Component } from 'react'

export class Newitems extends Component {
    render() {
        let { title, description, imgurl, newsdeatil } = this.props
        return (
            <div className="card1" style={{width: "18rem"}}>
                <img src={imgurl?imgurl:"https://images.moneycontrol.com/static-mcnews/2022/01/GDP_India_shutterstock_1368069491-770x433.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsdeatil} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

export default Newitems
