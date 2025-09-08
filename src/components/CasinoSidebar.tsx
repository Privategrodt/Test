import React from 'react';
import { X, Home, Trophy, Gamepad2, Heart, Star, Gift, Crown, Zap, Users } from 'lucide-react';
import { Button } from './ui/button';

interface CasinoSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: 'casino' | 'sports';
  onSectionChange: (section: 'casino' | 'sports') => void;
}

export function CasinoSidebar({ isOpen, onClose, activeSection, onSectionChange }: CasinoSidebarProps) {
  const menuItems = [
    { icon: Home, label: 'All Games', id: 'all' },
    { icon: Crown, label: 'Slots', id: 'slots' },
    { icon: Trophy, label: 'Live Casino', id: 'live' },
    { icon: Gamepad2, label: 'Game Shows', id: 'shows' },
    { icon: Heart, label: 'Blackjack', id: 'blackjack' },
    { icon: Star, label: 'Popular', id: 'popular' },
    { icon: Zap, label: 'New', id: 'new' },
    { icon: Gift, label: 'Roulette', id: 'roulette' },
    { icon: Users, label: 'Baccarat', id: 'baccarat' },
    { icon: Crown, label: 'Bonuses', id: 'bonuses' },
    { icon: Star, label: 'Favourites', id: 'favourites' },
    { icon: Crown, label: 'VIP Club', id: 'vip' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-50 transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0`}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-[var(--candy-pink)] to-[var(--candy-blue)] bg-clip-text text-transparent text-center w-full">Sweet Menu</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Casino/Sports Toggle */}
        <div className="mt-4 bg-secondary rounded-xl p-1 flex">
          <button
            onClick={() => onSectionChange('casino')}
            className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 font-medium text-center ${
              activeSection === 'casino'
                ? 'bg-gradient-to-r from-[var(--candy-pink)] to-[var(--candy-blue)] text-white shadow-lg shadow-[var(--candy-pink)]/25'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Casino
          </button>
          <button
            onClick={() => onSectionChange('sports')}
            className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 font-medium text-center ${
              activeSection === 'sports'
                ? 'bg-gradient-to-r from-[var(--candy-pink)] to-[var(--candy-blue)] text-white shadow-lg shadow-[var(--candy-pink)]/25'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Sports
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-1 overflow-y-auto h-full pb-20">
        {menuItems.map((item, index) => {
          const colors = [
            'from-[var(--candy-pink)] to-[var(--candy-purple)]',
            'from-[var(--candy-blue)] to-[var(--candy-green)]',
            'from-[var(--candy-purple)] to-[var(--candy-pink)]',
            'from-[var(--candy-green)] to-[var(--candy-blue)]',
            'from-[var(--candy-yellow)] to-[var(--candy-orange)]'
          ];
          const color = colors[index % colors.length];
          
          return (
            <button
              key={item.id}
              className="w-full flex items-center gap-3 px-4 py-3 text-left text-sidebar-foreground hover:bg-sidebar-accent rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
        
        {/* Promotion Section */}
        <div className="mt-6 bg-gradient-to-r from-[var(--candy-pink)] via-[var(--candy-purple)] to-[var(--candy-blue)] rounded-2xl p-4 text-white shadow-xl shadow-[var(--candy-pink)]/20">
          <div className="font-bold text-lg">🎁 Promotion</div>
          <div className="text-sm mt-1 opacity-90">Claim your bonus!</div>
          <div className="mt-3">
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}