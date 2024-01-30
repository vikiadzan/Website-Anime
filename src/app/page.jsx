import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import HeaderManga from "@/components/MangaList/Header"
import { getAnimeResponse, getMangaResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs"
import MangaList from "@/components/MangaList"

const Page = async ({api}) => {
  
  const topAnime = await getAnimeResponse("top/anime" ,"limit=12&page=1")
  const topManga = await getMangaResponse("top/manga",`limit=6&page=1`)
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime" ,"entry")
  recommendedAnime = reproduce(recommendedAnime,6)

  return (
    <>
      {/* <LandingPage api={landingAnime}/> */}
      {/* Anime Populer */}
      <div className="container mx-auto my-10 flex justify-center items-center">
        <section>
          <Header title="Anime Popular" linkTitle="View More >>" linkHref="/populer"/>
          <AnimeList api={topAnime} />
        </section>
      </div>

      <div className="container mx-auto my-10 flex justify-center items-center">
        <section>
          
          <HeaderManga title="Anime Popular" linkTitle="View More >>" linkHref="/populer"/>
          <MangaList api={topManga} />
       
        </section>
      </div>

      <div className="container mx-auto my-10 flex justify-center items-center">
        <section>
          
          <HeaderManga title="Recomendation"/>
          <MangaList api={recommendedAnime} />
       
        </section>
      </div>

      {/* Anime Terbaru */}   
    </>
  )
} 

export default Page