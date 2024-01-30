import Image from "next/image";
import Link from "next/link";

const MangaList = ({ api }) => {
  return (
    <div className=" grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 px-4 " >
    {api.data?.map((manga) => {
      return (
        <Link
        key={manga.mal_id}
        href={`/manga/${manga.mal_id}`}
        className="cursor-pointer grid rounded-lg  text-color-primary hover:text-color-accent transition-all relative"
        >
          <div className="p-2 relative max-h-fit">
            <Image
              src={manga.images.webp.image_url}
              alt="....."
              width={200}
              height={350}
              
              className=" max-h-64   object-cover  rounded-lg  "
              />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-color-primary " 
          >
            <h3 className="font-bold m md:text-xl text-md  " >{manga.title}</h3>
          </div>
        </Link>
      )
    })}
  </div>
  
  )
}


export default MangaList;