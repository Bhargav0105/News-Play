// import React, { Component } from 'react'

// export class newsItem extends Component {
//   render() {
//     let {title, description, imageUrl} = this.props;
//     return (
//         <div className="card" style={{width: "18rem"}}>
//             <img src={imageUrl} className="card-img-top" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title">{title}</h5>
//                 <p className="card-text">{description}</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     )
//   }
// }

import React from 'react';

function newsItem(props) {
  return (
    <div>
      <div className="card" style={{width: "90%", height:"50%", margin: "auto", backgroundColor: "#FFF8F3"}}>
            <img src={props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: "1", left: "90%"}}>
              {props.source.name}
            </span>
                <h6 className="card-title">{props.title.slice(0,75)}</h6>
                <p className="card-text" style={{fontSize: "0.85rem"}}>{props.description.slice(0, 110)}...</p>
                <p className="card-text" style={{fontSize: "0.85rem"}}><small className='text-muted'>By {props.author} on {new Date(props.date).toGMTString()}</small></p>
                <a href={props.detail} style={{backgroundColor: "#4C4C6D", color:"#fff"}} className="btn btn-info">More Details</a>
            </div>
        </div>
    </div>
  )
}


export default newsItem;
