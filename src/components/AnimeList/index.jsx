import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className=" grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 px-4 " >
    {api.data?.map((anime) => {
      return (
        <Link
        key={anime.mal_id}
        href={`/anime/${anime.mal_id}`}
        className="cursor-pointer grid rounded-lg  text-color-primary hover:text-color-accent transition-all relative"
        >
          <div className=" relative max-h-fit">
            <Image
              src={anime.images.webp.image_url}
              alt="....."
              width={200}
              height={350}
              
              className=" max-h-64  object-cover  rounded-lg  "
              />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-color-primary " >
            <h3 className="font-bold m md:text-xl text-md  " >{anime.title}</h3>
          </div>
        </Link>
      )
    })}
  </div>
  
  )
}


export default AnimeList;