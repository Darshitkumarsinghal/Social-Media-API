import React from 'react';

export default function Profile (){
    return(
        //for upper part of profile page
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}} />
                </div>
                <div>
                    <h4>rakesh</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 followings</h6>
                    </div>
                </div>
            </div>
            {/*for show post by user*/}
            <div className="gallery">

            </div>

        </div>

    )
}