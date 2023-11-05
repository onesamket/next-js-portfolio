import Image from "next/image"
import React from "react"

const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container p-4 text-center">
            {children}
        </div>
    )
}

export default Section