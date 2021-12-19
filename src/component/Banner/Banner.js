import React from 'react'

export default function Banner(props) {
    return (
        <div className='container-fluid text-center my-4' style={{backgroundColor: "black", color: "white"}}>
            <h1 className='display-1'>
                {props.text}
            </h1>
        </div>
    )
}
