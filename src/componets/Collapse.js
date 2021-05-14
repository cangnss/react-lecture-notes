/*
ilk constructor  --> state'in ilk durumunu oluşturduk. (initialization)
render metodu ilk defa calisti
onClick eventi calisti showMore metodunu calistirdik yani.
setState ile state nesnesini güncelledi ve aynı zaman da render methodunu tekrar calistiriyor.
render methodu guncel JSX'i sayfada gösteriyor
*/
import React from 'react'

// function Collapse(props) {

//     return (
//         <div>
//             <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
//                 Link with href
//             </a>
//             <div className="collapse show" id={props.href}>
//                 {props.children}
//             </div>
//         </div>
//     )
// }

class Collapse extends React.Component{

    constructor(){
        super(); //react.component içinde olan constructor ın tüm özelliklerini almamızı sağlar.

        this.state = {
            showContent:false
        }

        // this.showMore = () => { Çözüm yollarından biri this için. Constructor içine yazma.
        //     this.setState({showContent:true})
        // }

        // this.showMore = this.showMore.bind(this)
    }

    // showMore(){
    //     this.setState({showContent:true})
    // }

    showMore = () => { //arrow function ile this kullandık.
        this.setState({showContent: !this.state.showContent}) //1. yöntem
        
        //sayfayı tekrar render etmesi gerektiğini setState ile biliyor. setState render methodunu calıstırmak ıcın bir triggered. Çalıştırıcı.
        /*this.state = {
            showContent:true
        }*/
    }

    render(){
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    Link with href
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {this.props.children}
                        </div>
                    ) : null
                }
            </div>
        )
    }
}

export default Collapse;
