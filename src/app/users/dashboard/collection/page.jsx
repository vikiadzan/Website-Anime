import Header from "@/components/Dashboard/Header"
import { getAnimeResponse } from "@/libs/api-libs"
import { authUserSession } from "@/libs/auth.libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    // const anime = await getAnimeResponse(`/anime/${id}`, "");
    const user = await authUserSession()
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email }
    })

    // console.log({ collection })
    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My Collection"} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                {collection.map((collect, index) => (
                    <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative ">
                        <Image src={collect?.anime_image} alt={collect?.anime_image} width={350} height={350} className="w-full" />
                        <div className="absolute flex items-center rounded justify-center bottom-0 w-full" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)' }}>
                            <h3 className="text-xl text-center text-color-primary">{collect?.anime_title}</h3>
                        </div>

                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Page