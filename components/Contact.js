import React from 'react'
import Image from "next/image"

function Contact({src, name}) {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-white cursor-ponter p-2 rounded-xl cursor-pointer border-l-2 border-gray-400">
            <Image
            className="rounded-full "
            src ={src} 
            width={50}
            height={50}
            objectFit="cover"
            layout="fixed"/>
            <p>{name}</p>
            <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded full animate-bounce" />
             
        </div>
    )
}

export default Contact
