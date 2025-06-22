
import { Star, Play, Plus } from "lucide-react";

interface Anime {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  episodes: number;
  genre: string;
}

interface AnimeCardProps {
  anime: Anime;
}

export const AnimeCard = ({ anime }: AnimeCardProps) => {
  return (
    <div className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
      <div className="relative overflow-hidden">
        <img 
          src={anime.image} 
          alt={anime.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-yellow-400 text-sm font-medium">{anime.rating}</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full transition-colors duration-200">
              <Play className="w-5 h-5" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {anime.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{anime.year}</span>
          <span>{anime.episodes} eps</span>
        </div>
        <div className="mt-2">
          <span className="inline-block bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded-full text-xs font-medium">
            {anime.genre}
          </span>
        </div>
      </div>
    </div>
  );
};
