import React from 'react';
import { ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SlotsSection() {
  const slotGames = [
    {
      id: 1,
      title: "CANDY CRUSH DELUXE",
      provider: "SWEET SLOTS",
      image: "https://images.unsplash.com/photo-1749527175486-d37418187116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMHJlZWxzfGVufDF8fHx8MTc1NjY1MTk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🍭"
    },
    {
      id: 2,
      title: "BUBBLEGUM BLAST",
      provider: "SUGAR GAMES",
      image: "https://images.unsplash.com/photo-1636312696740-cc6701d5727a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1ibGluZyUyMGNhc2lubyUyMGNvbG9yc3xlbnwxfHx8fDE3NTY2NTE5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🫧"
    },
    {
      id: 3,
      title: "JELLY JACKPOT",
      provider: "CANDY PLAY",
      image: "https://images.unsplash.com/photo-1653583485428-0442cace54f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBsaWdodHMlMjBuZW9ufGVufDF8fHx8MTc1NjY1MTk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🍯"
    },
    {
      id: 4,
      title: "LOLLIPOP LEGENDS",
      provider: "WONKA SLOTS",
      image: "https://images.unsplash.com/photo-1604028296525-8304e1a4969f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBnYW1lJTIwbWFjaGluZXxlbnwxfHx8fDE3NTY2NTE5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🍭"
    },
    {
      id: 5,
      title: "SUGAR RUSH ROYALE",
      provider: "SWEET PLAY",
      image: "https://images.unsplash.com/photo-1706129867447-b4f156c46641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGNhc2lubyUyMGdhbWV8ZW58MXx8fHwxNzU2NjUxOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "👑"
    },
    {
      id: 6,
      title: "GUMMY BEAR GOLD",
      provider: "COLORFUL GAMES",
      image: "https://images.unsplash.com/photo-1633629544357-14223c9837d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNhcmRzJTIwY2FzaW5vfGVufDF8fHx8MTc1NjU0MTQyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🐻"
    },
    {
      id: 7,
      title: "RAINBOW DROPS",
      provider: "SPECTRUM SLOTS",
      image: "https://images.unsplash.com/photo-1592602944193-0848995f4b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMGNhc2lubyUyMHdoZWVsfGVufDF8fHx8MTc1NjY1MTkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🌈"
    },
    {
      id: 8,
      title: "CHOCOLATE FACTORY",
      provider: "WONKA GAMES",
      image: "https://images.unsplash.com/photo-1739133710741-1468de0acf26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBkaWNlJTIwZ2FtYmxpbmd8ZW58MXx8fHwxNzU2NjUxOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🍫"
    }
  ];

  return (
    <section className="bg-background px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[var(--candy-purple)] to-[var(--candy-pink)] rounded-2xl flex items-center justify-center shadow-lg shadow-[var(--candy-purple)]/25">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--candy-purple)] to-[var(--candy-pink)] bg-clip-text text-transparent">Sweet Slots Collection</h2>
              <p className="text-muted-foreground">Spin the reels for a sugar rush! 🎰</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="w-10 h-10 p-0 border-border hover:bg-accent rounded-xl hover:border-[var(--candy-purple)]/30 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-10 h-10 p-0 border-border hover:bg-accent rounded-xl hover:border-[var(--candy-purple)]/30 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {slotGames.map((game, index) => {
            const colors = [
              'from-[var(--candy-pink)] to-[var(--candy-purple)]',
              'from-[var(--candy-blue)] to-[var(--candy-green)]',
              'from-[var(--candy-yellow)] to-[var(--candy-orange)]',
              'from-[var(--candy-green)] to-[var(--candy-blue)]',
              'from-[var(--candy-purple)] to-[var(--candy-pink)]'
            ];
            const color = colors[index % colors.length];
            
            return (
              <div
                key={game.id}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-[var(--candy-pink)]/10"
              >
                {/* Game Image */}
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  
                  {/* Emoji Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <span className="text-lg">{game.emoji}</span>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${color} hover:scale-110 text-white font-bold px-4 py-2 rounded-xl shadow-lg transition-all duration-300`}
                    >
                      🎰 Play
                    </Button>
                  </div>
                </div>
                
                {/* Game Info */}
                <div className="p-3 bg-card">
                  <h3 className="text-foreground text-xs font-bold mb-1 line-clamp-2 leading-tight">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {game.provider}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[var(--candy-pink)] via-[var(--candy-purple)] to-[var(--candy-blue)] hover:shadow-2xl hover:shadow-[var(--candy-pink)]/20 text-white font-bold px-12 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105"
          >
            🍭 Load More Sweet Games
          </Button>
        </div>
      </div>
    </section>
  );
}