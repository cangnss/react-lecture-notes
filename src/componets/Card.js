import React, { Component } from 'react'
import PropTypes from 'prop-types';

// const Card = (props) =>{ //propslar componentler arası veri aktarımını sağlar. özellikleri parentte belirleriz.Tek yönlü çalışır. Parent'dan child'a dogru ilerler. Bir value yazdırmak için onların key'inden faydalanırız.
//     return(
//         <div className="card w-100">
//             <img src={props.cardImg} className="img-fluid card-img-top" alt="..."/>
//             <div className="card-body">
//             <h5 className="card-title">{props.cardTitle}</h5>
//             <p className="card-text">{props.cardText}</p>
//             <p className="card-text"><small className="text-muted">{props.updatedTime}</small></p>
//             </div>
//         </div>
//     );
// }

class Card extends React.Component{

    // static defaultProps = { bu şekilde de default proptypes kullanabiliriz.
    //     cardTitle:"Default card title"
    // }


    render(){
        return(
            <div className="card w-100">
                <img src={this.props.cardImg} className="img-fluid card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{this.props.cardTitle}</h5>
                <p className="card-text">{this.props.cardText}</p>
                <p className="card-text"><small className="text-muted">{this.props.updatedTime}</small></p>
                </div>
            </div>
        );
    }
}

Card.defaultProps = {
    cardTitle:"Default Card Title"
}

Card.propTypes = {
    cardText: PropTypes.string.isRequired //string tipinde bir veri gelmesi gerektiğini söyledik. isRequired ile gerekli bir alan olduğunu belirttik. PropTypes sayesinde verilerimizi sınırlandırabildik.
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