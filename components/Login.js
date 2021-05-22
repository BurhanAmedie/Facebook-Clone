import React from 'react'
import Image from "next/image"
import { signin } from "next-auth/client"

function Login() {
    return (
        <div className="grid place-items-center">
            <Image
             src="http://clipart-library.com/img/1789596.png"
             width={400}
             height={400}
             objectFit="contain"/>
            <h1 onClick={signin} className="mt-10 p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>
        </div>
    )
}

export default Login
