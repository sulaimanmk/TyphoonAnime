
import { Play, Plus, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Your Next
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Anime Adventure
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Explore thousands of anime series, movies, and OVAs. Find your next obsession with personalized recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Start Watching
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                Add to List
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 p-6 transform hover:scale-105 transition-all duration-300">
                <div className="h-full bg-slate-800/50 rounded-xl overflow-hidden">
                  <img 
                    src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg"
                    alt="Featured Anime"
                    className="w-full h-3/4 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-2">Attack on Titan</h3>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-medium">9.0</span>
                      <span className="text-gray-400">• 2013</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
