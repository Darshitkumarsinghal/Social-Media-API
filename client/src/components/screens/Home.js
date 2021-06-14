import React from 'react';

export default function  Home (){
    return(
        <div className="home">
            <div className="card home-card">
                <h5>ramesh</h5>
                <div className="card-image">
                    <img />

                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                      <h6>title</h6>
                    <p>this is post</p>
                    <input type="text" placeholder="add a "/>
                </div>
            </div>

        </div>
    )
}