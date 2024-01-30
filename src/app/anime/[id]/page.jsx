import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth.libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`, "");
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })
   
    return (
        <div className="container mx-auto my-10 flex justify-center items-center">
            <div className="max-w-5xl">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                        <img
                            src={anime.data.images.webp.image_url}
                            alt={anime.data.images.jpg.image_url}
                            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all"
                        />
                    </div>
                    <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0 px-4">
                        <h1 className="md:text-4xl text-3xl font-bold text-color-primary mb-2">
                            {anime.data.title} - {anime.data.year} ({anime.data.status})
                        </h1>
                        <div className="flex flex-wrap  mb-4 border bg-color-secondary">
                            <div className="w-1/2 md:w-1/4 flex flex-col justify-center items-center bg-gray-200 p-2 text-color-primary rounded-lg hover:bg-gray-300 transition-all">
                                <h3 className="text-lg font-semibold bg-color-danger px-1 rounded">SCORE</h3>
                                <p className="text-xl mt-1">{anime.data.score}</p>
                            </div>
                            <div className="w-1/2 md:w-1/4 flex flex-col items-center justify-center bg-gray-200 p-2 text-color-primary rounded-lg hover:bg-gray-300 transition-all">
                                <p className="text-lg font-sans ">Ranked <span className="font-bold">#{anime.data.rank}</span></p>
                                <p className="text-sm mt-2 ">Episode {anime.data.episodes}</p>
                            </div>

                            <div className="w-1/2 md:w-1/4 flex flex-col  items-center bg-gray-200 p-2 text-color-primary rounded-lg hover:bg-gray-300 transition-all">
                                <p className="text-lg font-sans ">Popularity <span className="font-bold">#{anime.data.popularity}</span></p>
                            </div>
                            <div className="w-1/2 md:w-1/4 flex flex-col  items-center bg-gray-200 p-2 text-color-primary rounded-lg hover:bg-gray-300 transition-all">
                                {/* <p className="text-xl font-sans"> Genres: {anime.data.genres.map(genre => genre.name).join(', ')}</p> */}
                                <p className="text-lg font-sans ">Favorite <span className="font-bold">#{anime.data.favorites}</span></p>
                            </div>
                        </div>


                        <h3 className="text-color-primary font-bold text-xl">Sinopsis</h3>
                        <p className="text-justify text-sm text-color-primary font-sans leading-relaxed mb-4">{anime.data.synopsis}</p>
                        <h3 className="text-color-primary font-bold text-xl">Background</h3>
                        <p className="text-justify text-sm text-color-primary font-sans leading-relaxed mb-4">{anime.data.background}</p>
                        {
                            !collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} 
                                                     anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />
                        }

                    </div>
                </div>
                <div className="mt-1">
                    <h2 className="text-2xl font-bold text-color-primary mb-4">Trailer</h2>
                    <div className="px-4 py-2">
                        <CommentInput  anime_mal_id={id} user_email={user?.email} username={user?.name}/>
                    </div>
                    <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
                </div>
            </div>
        </div>
    );
};


export default Page