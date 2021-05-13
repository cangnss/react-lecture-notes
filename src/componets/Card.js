import React, { Component } from 'react'


const Card = (props) =>{ //propslar componentler arası veri aktarımını sağlar. özellikleri parentte belirleriz.Tek yönlü çalışır. Parent'dan child'a dogru ilerler. Bir value yazdırmak için onların key'inden faydalanırız.
    return(
        <div className="card">
            <img src={props.cardImg} className="img-fluid card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardText}</p>
            <p className="card-text"><small className="text-muted">{props.updatedTime}</small></p>
            </div>
        </div>
    );
}

export default Card;


// class Card extends Component {  
//     render() {
//         return (
//             <div className="card">
//                 <img src="..." className="card-img-top" alt="..."/>
//                 <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//             </div>
//         )
//     }
// }


/*
First Class Function

const Test = function(){

    console.log("test firs class")
}

Test()

*/