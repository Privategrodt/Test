import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CasinoHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-[var(--candy-purple)]/10 to-[var(--candy-pink)]/10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Background Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[var(--candy-pink)]/20 to-[var(--candy-purple)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[var(--candy-blue)]/20 to-[var(--candy-green)]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-40 w-48 h-48 bg-gradient-to-r from-[var(--candy-yellow)]/20 to-[var(--candy-orange)]/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--candy-pink)]/20 to-[var(--candy-blue)]/20 px-4 py-2 rounded-full border border-[var(--candy-pink)]/30">
                <span className="text-2xl">🍬</span>
                <span className="text-[var(--candy-pink)] text-sm font-bold tracking-wide uppercase">
                  Sweet Welcome Package
                </span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  300% UP TO
                </h1>
                <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-[var(--candy-pink)] via-[var(--candy-blue)] to-[var(--candy-purple)] bg-clip-text text-transparent leading-tight">
                  3,000€ + 300 FS
                </h2>
                <p className="text-muted-foreground text-lg max-w-md">
                  Dive into the sweetest casino experience with our candy-coated games! 🎰✨
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[var(--candy-pink)] to-[var(--candy-purple)] hover:shadow-2xl hover:shadow-[var(--candy-pink)]/30 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105"
                >
                  🍭 Claim Bonus
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-[var(--candy-blue)] text-[var(--candy-blue)] hover:bg-[var(--candy-blue)] hover:text-white px-8 py-4 rounded-2xl text-lg transition-all duration-300"
                >
                  🎮 Play Demo
                </Button>
              </div>
              
              {/* Promotion Dots */}
              <div className="flex gap-3 pt-4">
                <div className="w-12 h-2 bg-gradient-to-r from-[var(--candy-pink)] to-[var(--candy-purple)] rounded-full"></div>
                <div className="w-12 h-2 bg-muted rounded-full"></div>
                <div className="w-12 h-2 bg-muted rounded-full"></div>
              </div>
            </div>
            
            {/* Right Content - Candy Elements */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Candy Container */}
                <div className="w-96 h-96 mx-auto relative">
                  {/* Giant Lollipop */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-32 bg-gradient-to-r from-[var(--candy-pink)] to-[var(--candy-purple)] rounded-full shadow-2xl shadow-[var(--candy-pink)]/40 animate-spin-slow">
                      <div className="absolute inset-4 bg-gradient-to-r from-[var(--candy-blue)] to-[var(--candy-green)] rounded-full">
                        <div className="absolute inset-4 bg-gradient-to-r from-[var(--candy-yellow)] to-[var(--candy-orange)] rounded-full flex items-center justify-center">
                          <span className="text-4xl">🍭</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-2 h-24 bg-gradient-to-b from-[var(--candy-yellow)] to-[var(--candy-orange)] mx-auto rounded-full"></div>
                  </div>
                  
                  {/* Floating Candy */}
                  <div className="absolute top-20 right-8 w-16 h-16 bg-gradient-to-r from-[var(--candy-blue)] to-[var(--candy-green)] rounded-2xl rotate-45 shadow-lg shadow-[var(--candy-blue)]/30 animate-bounce flex items-center justify-center">
                    <span className="text-2xl -rotate-45">🍬</span>
                  </div>
                  
                  <div className="absolute bottom-32 left-8 w-12 h-12 bg-gradient-to-r from-[var(--candy-pink)] to-[var(--candy-purple)] rounded-full shadow-lg shadow-[var(--candy-pink)]/30 animate-pulse flex items-center justify-center">
                    <span className="text-xl">🧁</span>
                  </div>
                  
                  <div className="absolute bottom-16 right-16 w-20 h-20 bg-gradient-to-r from-[var(--candy-green)] to-[var(--candy-blue)] rounded-3xl rotate-12 shadow-lg shadow-[var(--candy-green)]/30 animate-pulse delay-500 flex items-center justify-center">
                    <span className="text-3xl -rotate-12">🎰</span>
                  </div>
                  
                  {/* Poker Chips with Candy Colors */}
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1561102385-a6419d8a91c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBwb2tlciUyMGNoaXBzJTIwZ29sZHxlbnwxfHx8fDE3NTY2NTE4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Casino Chips"
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-24 object-cover rounded-full shadow-xl opacity-90"
                  />
                </div>
                
                {/* Floating Sparkles */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-[var(--candy-yellow)] rounded-full animate-ping"></div>
                <div className="absolute top-16 left-4 w-2 h-2 bg-[var(--candy-pink)] rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-24 right-4 w-4 h-4 bg-[var(--candy-blue)] rounded-full animate-ping delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}