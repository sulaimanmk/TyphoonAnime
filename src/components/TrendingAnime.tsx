
import { AnimeCard } from "./AnimeCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

const trendingAnimes = [
  {
    id: 1,
    title: "Demon Slayer",
    image: "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 8.7,
    year: 2019,
    episodes: 26,
    genre: "Action"
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/12/image_2024-12-07_195652938.png",
    rating: 8.9,
    year: 2020,
    episodes: 24,
    genre: "Supernatural"
  },
  {
    id: 3,
    title: "My Hero Academia",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/my-hero-academia-anime-poster-TLDR-vertical.jpg",
    rating: 8.5,
    year: 2016,
    episodes: 138,
    genre: "Superhero"
  },
  {
    id: 4,
    title: "One Piece",
    image: "https://i.pinimg.com/736x/04/65/2b/04652b44ea7c1275d1022d98d59ecc97.jpg",
    rating: 9.2,
    year: 1999,
    episodes: 1000,
    genre: "Adventure"
  },
  {
    id: 5,
    title: "Naruto",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687711937i/101159206.jpg",
    rating: 8.8,
    year: 2002,
    episodes: 720,
    genre: "Ninja"
  },
  {
    id: 6,
    title: "Hunter x Hunter",
    image: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_.jpg",
    rating: 9.0,
    year: 2006,
    episodes: 37,
    genre: "Thriller"
  }
];

// export const TrendingAnime = () => {
//   const intervalRef = useRef<NodeJS.Timeout | null>(null); //Add commentMore actions
//   const carouselApiRef = useRef<any>(null);

//   const startAutoScroll = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       if (carouselApiRef.current) {
//         carouselApiRef.current.scrollNext();
//       }
//     }, 3000);
//   };

//   const stopAutoScroll = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   useEffect(() => {
//     startAutoScroll();
//     return () => stopAutoScroll();
//   }, []);

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-3xl lg:text-4xl font-bold text-white">
//             Trending Now
//           </h2>
//           <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-semibold">
//             View All
//           </button>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
//           {trendingAnimes.map((anime) => (
//             <AnimeCard key={anime.id} anime={anime} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


export const TrendingAnime = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselApiRef = useRef<any>(null);

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Trending Now
          </h2>
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-semibold">
            View All
          </button>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <Carousel
            setApi={(api) => {
              carouselApiRef.current = api;
            }}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {trendingAnimes.map((anime) => (
                <CarouselItem key={anime.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <AnimeCard anime={anime} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};