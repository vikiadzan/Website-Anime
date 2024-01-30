"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if ((event.key === "Enter" || event.type === "click") && searchRef.current.value.trim() !== ""){
            event.preventDefault();
            const keyword = searchRef.current.value;
            router.push(`/search/${keyword}`)
        }
    }

    return(
        <div className="relative">
            <input 
                placeholder="Cari Anime....."
                className=" w-full p-2 rounded-xl"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button className=" absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>

        </div>
    )
}

export default InputSearch;