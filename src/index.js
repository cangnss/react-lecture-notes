import React from 'react'
import ReactDOM from 'react-dom'
import Card from './componets/Card'
import Collapse from './componets/Collapse';

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card-group w-100">
                        {/* 'cardTitle' yeni özellikler burada belirtilir props için. */}
                        <Collapse href="collapseExample1">
                            <Card 
                                 
                                cardText="Lorem Ipsum Text 1" 
                                updatedTime="Last Updated 1 min ago"
                                cardImg="https://picsum.photos/id/1/200/300"
                            /> 
                        </Collapse> 
                    </div>
                </div>
                <div className="col">
                    <div className="card-group">
                        {/* 'cardTitle' yeni özellikler burada belirtilir props için. */}
                        <Collapse href="collapseExample2">
                            <Card 
                                cardTitle="Card Title 2" 
                                cardText="Lorem Ipsum Text 2" 
                                updatedTime="Last Updated 2 min ago"
                                cardImg="https://picsum.photos/id/1/200/300"
                            /> 
                        </Collapse> 
                    </div>
                </div>
                <div className="col">
                    <div className="card-group">
                        {/* 'cardTitle' yeni özellikler burada belirtilir props için. */}
                        <Collapse href="collapseExample3">
                            <Card 
                                cardTitle="Card Title 3" 
                                cardText="Lorem Ipsum Text 3" 
                                updatedTime="Last Updated 3 min ago"
                                cardImg="https://picsum.photos/id/1/200/300"
                            /> 
                        </Collapse> 
                    </div>
                </div>
            </div>
        </div>
    )
}

// const App = () =>{ Componenti bu şekilde de kullanabiliriz.
    // return ( 
    //     <div>
    //     </div>
    // );
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);