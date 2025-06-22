
import { Sword, Heart, Zap, Ghost, Crown, Gamepad2, Laugh } from "lucide-react";

const genres = [
  { name: "Adventure", icon: Sword, color: "from-red-500 to-orange-500", count: 1250 },
  { name: "Romance", icon: Heart, color: "from-pink-500 to-rose-500", count: 890 },
  { name: "Supernatural", icon: Zap, color: "from-cyan-500 to-blue-500", count: 760 },
  { name: "Horror", icon: Ghost, color: "from-gray-700 to-gray-900", count: 420 },
  { name: "Fantasy", icon: Crown, color: "from-emerald-500 to-teal-500", count: 680 },
  { name: "Comedy", icon: Laugh, color: "from-blue-500 to-cyan-500", count: 340 }
];

export const GenreSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
          Explore by Genre
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre) => {
            const IconComponent = genre.icon;
            return (
              <div 
                key={genre.name}
                className="group relative bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${genre.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                  {genre.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {genre.count} titles
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
