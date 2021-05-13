import React from 'react'

function Collapse(props) {

    return (
        <div>
            <a className="btn btn-primary" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a>
            <div className="collapse" id={props.href}>
                {props.children}
            </div>
        </div>
    )
}
export default Collapse;
