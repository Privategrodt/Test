import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, Trophy, Gamepad2, Heart, Star, Zap } from 'lucide-react';

export function GameCategories() {
  const [activeCategory, setActiveCategory] = useState('lobby');

  const categories = [
    { id: 'lobby', label: '🏠 Lobby', icon: null },
    { id: 'slots', label: '🎰 Slots', icon: null },
    { id: 'live', label: '🎲 Live Casino', icon: Trophy },
    { id: 'shows', label: '🎪 Game Shows', icon: Gamepad2 },
    { id: 'blackjack', label: '🃏 Blackjack', icon: Heart },
    { id: 'new', label: '✨ New', icon: Star },
  ];

  return (
    <div className="bg-background px-4 py-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8 max-w-lg">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for sweet games... 🍭"
              className="pl-12 bg-input border-border text-foreground placeholder-muted-foreground focus:border-[var(--candy-pink)] rounded-2xl h-14 text-lg focus:shadow-xl focus:shadow-[var(--candy-pink)]/10 transition-all duration-300"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => {
            const colors = [
              'from-[var(--candy-pink)] to-[var(--candy-purple)]',
              'from-[var(--candy-blue)] to-[var(--candy-green)]',
              'from-[var(--candy-purple)] to-[var(--candy-pink)]',
              'from-[var(--candy-green)] to-[var(--candy-blue)]',
              'from-[var(--candy-yellow)] to-[var(--candy-orange)]',
              'from-[var(--candy-orange)] to-[var(--candy-pink)]'
            ];
            const color = colors[index % colors.length];
            
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${color} text-white border-none shadow-lg hover:scale-105 hover:shadow-xl`
                    : 'bg-secondary hover:bg-accent text-foreground border-border hover:border-[var(--candy-pink)]/30'
                }`}
              >
                {category.icon && <category.icon className="w-4 h-4" />}
                <span>{category.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}