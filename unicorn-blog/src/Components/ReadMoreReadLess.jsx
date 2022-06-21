import React, { useState } from 'react'

const ReadMoreReadLess = ({ children }) => {

    const [isReadMoreShown, setReadMoreShown] = useState(false)
    return( 
        <div className='read-more-read-less'>
            ({ children })
            <button>
                Lire plus
            </button>
        </div>
    )
}

export default ReadMoreReadLess