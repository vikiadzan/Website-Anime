
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"

const Page = async ({params}) => {
  const {keyword} = params
  const decodeKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime",`q=${decodeKeyword}`)

  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header title={`Pencarian Untuk ${decodeKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
} 

export default Page