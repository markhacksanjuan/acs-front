import React from 'react'

const Loading = ({ label }) => {
    return(
        <div>
            <p className='loading'>{label}<span>.</span><span>.</span><span>.</span></p>
        </div>
    )
}
export default Loading