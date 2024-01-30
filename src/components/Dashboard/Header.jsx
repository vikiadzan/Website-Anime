"use client"
import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {

    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }
    return(
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-color-primary text-2xl  font-bold">{title}</h3> 
            <button 
                className="text-color-primary hover:text-color-accent transition ease-in-out hover:scale-110  duration-300 " 
             onClick={handleBack}><ArrowSquareLeft size={32} /></button>
        </div>
    )
}

export default Header