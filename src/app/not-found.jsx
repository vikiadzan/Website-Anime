"use client"
import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()
    return(
        <div className="min-h-screen max-w mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
                <FileSearch size={40} className="text-color-accent "/>
                <h3 className=" text-color-accent text-4xl font-bold">404 | NOT FOUND</h3>
                <button onClick={() => router.back()} className="text-color-primary hover:text-color-accent underline">Kembali</button>
            </div>
        </div>
    )
}

export default Page