import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

function Feed() {
    return (
        <div>
            <div>
                <h1>Home</h1>
                <RefreshIcon className='h-8 w-8
                text-twitter mr-5 mt-5 cursor-pointer transition-all 
                duration-500 ease-out hover:rotate-180 active:scale-125'
                />
            </div>
        </div>
    )
}

export default Feed