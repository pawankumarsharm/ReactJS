import React from 'react'

const heading ={
    fontsize:'72px',
    color: 'blue'
}
function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline CSS</h1>
            <h1 className='error'>Error</h1>
        </div>
    )
}

export default Inline
