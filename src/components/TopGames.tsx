import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TopGames() {
  const topGames = [
    {
      id: 1,
      title: "SWEET BONANZA 1000",
      provider: "PRAGMATIC PLAY",
      image: "https://images.unsplash.com/photo-1706129867447-b4f156c46641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGNhc2lubyUyMGdhbWV8ZW58MXx8fHwxNzU2NjUxOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      number: 1,
      color: "from-[var(--candy-pink)] to-[var(--candy-purple)]",
      emoji: "🍭"
    },
    {
      id: 2,
      title: "CANDY RUSH",
      provider: "SWEET GAMES",
      image: "https://images.unsplash.com/photo-1633629544357-14223c9837d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNhcmRzJTIwY2FzaW5vfGVufDF8fHx8MTc1NjU0MTQyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      number: 2,
      color: "from-[var(--candy-blue)] to-[var(--candy-green)]",
      emoji: "🍬"
    },
    {
      id: 3,
      title: "GUMMY BEAR GOLD",
      provider: "SUGAR SLOTS",
      image: "https://images.unsplash.com/photo-1592602944193-0848995f4b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMGNhc2lubyUyMHdoZWVsfGVufDF8fHx8MTc1NjY1MTkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      number: 3,
      color: "from-[var(--candy-yellow)] to-[var(--candy-orange)]",
      emoji: "🐻"
    },
    {
      id: 4,
      title: "RAINBOW RICHES",
      provider: "COLORFUL GAMES",
      image: "https://images.unsplash.com/photo-1739133710741-1468de0acf26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBkaWNlJTIwZ2FtYmxpbmd8ZW58MXx8fHwxNzU2NjUxOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      number: 4,
      color: "from-[var(--candy-green)] to-[var(--candy-blue)]",
      emoji: "🌈"
    },
    {
      id: 5,
      title: "CHOCOLATE FACTORY",
      provider: "WONKA GAMES",
      image: "https://images.unsplash.com/photo-1599579887642-9821ebe3c79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBzbG90JTIwc3ltYm9sc3xlbnwxfHx8fDE3NTY2NTE5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      number: 5,
      color: "from-[var(--candy-purple)] to-[var(--candy-pink)]",
      emoji: "🍫"
    }
  ];

  return (
    <section className="bg-background px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[var(--candy-yellow)] to-[var(--candy-orange)] rounded-2xl flex items-center justify-center shadow-lg shadow-[var(--candy-yellow)]/25">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--candy-pink)] to-[var(--candy-blue)] bg-clip-text text-transparent">Top 10 Sweet Games</h2>
              <p className="text-muted-foreground">The most delicious games in our candy shop! 🍭</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="w-10 h-10 p-0 border-border hover:bg-accent rounded-xl hover:border-[var(--candy-pink)]/30 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-10 h-10 p-0 border-border hover:bg-accent rounded-xl hover:border-[var(--candy-pink)]/30 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topGames.map((game) => (
            <div
              key={game.id}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-[var(--candy-pink)]/10"
            >
              {/* Game Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${game.color} opacity-70`}></div>
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${game.color} flex items-center justify-center shadow-xl shadow-black/20 border-2 border-white/20`}>
                    <span className="text-white font-black text-xl">{game.number}</span>
                  </div>
                </div>
                
                {/* Emoji Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-xl">{game.emoji}</span>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${game.color} hover:scale-110 text-white font-bold px-8 py-3 rounded-2xl shadow-xl transition-all duration-300`}
                  >
                    Play Now
                  </Button>
                </div>
                
                {/* Game Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
                    {game.title}
                  </h3>
                  <p className="text-white/70 text-xs">
                    {game.provider}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}