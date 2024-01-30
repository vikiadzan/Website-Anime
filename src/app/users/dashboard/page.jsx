import { authUserSession } from "@/libs/auth.libs"
import Image from "next/image";
import Link from "next/link";

const Page = async() => {
    const user = await authUserSession()
    // console.log(user)

    const imageStyle = {
        borderRadius: '50%', // Menjadikan gambar menjadi lingkaran
        width: '250px',
        height: '250px',
    };

    return (
        <div className="flex flex-col 7 items-center text-color-primary">
            <h1 className="mt-5 text-xl font-bold">Welvome,  {user.name}</h1>
            <Image src={user.image} alt="..." style={imageStyle} width={250} height={250} className="mt-5" />
            <div className="py-8 flex flex-wrap transition-all  gap-4 ">
                <Link href ="/users/dashboard/collection"
                    className="bg-color-accent transition ease-in-out hover:scale-110  duration-300  text-color-dark font-bold px-2 py-2 rounded text-xl"
                >My Collrction</Link>
                <Link href ="/users/dashboard/comment"
                    className="bg-color-accent transition ease-in-out hover:scale-110  duration-300  text-color-dark font-bold px-2 py-2 rounded text-xl"
                >My Comment</Link>
            </div>
        </div>
        
    );
    
}

export default Page