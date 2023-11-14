import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { tittle, description, imageurl, newsurl, date } = this.props
        return (
            <div className='container my-3'>
                <div className="card my-5 mx-2" style={{ height: "26rem", boxShadow: "7px 3px 50px 3px  darkgrey", borderRadius: "20px" }}>
                    <img src={!imageurl ? "https://images.hindustantimes.com/tech/img/2022/09/26/1600x900/FILES-US-SPACE-NASA-DART-1_1663920771107_1663920771107_1664170884298_1664170884298.jpg" : imageurl} className="card-img-top" style={{ height: "10rem" }} alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{tittle}...</h6>
                        <p className="card-text">{description}...</p>
                        <p className="card-text">Published on {new Date(date).toGMTString()}</p>
                        <div className="container" >
                            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm my-3 " style={{ background: "black", color: "white", borderRadius: "20px" }}>Read More</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem