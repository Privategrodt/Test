import React from 'react';
import { Menu, Search, Bell, User, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface CasinoHeaderProps {
  onMenuClick: () => void;
  activeSection: 'casino' | 'sports';
}

export function CasinoHeader({ onMenuClick, activeSection }: CasinoHeaderProps) {
  return (
    <header className="bg-card border-b border-border p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[var(--candy-pink)] to-[var(--candy-blue)] rounded-2xl flex items-center justify-center shadow-lg shadow-[var(--candy-pink)]/25">
              <span className="text-white font-bold text-lg">🍭</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--candy-pink)] to-[var(--candy-blue)] bg-clip-text text-transparent">
                CANDY CASINO
              </h1>
            </div>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search for a game..."
              className="pl-12 bg-input border-border text-foreground placeholder-muted-foreground focus:border-[var(--candy-pink)] rounded-2xl h-12 focus:shadow-lg focus:shadow-[var(--candy-pink)]/10 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Balance */}
          <div className="hidden md:flex items-center gap-3 bg-secondary px-4 py-2 rounded-2xl border border-border">
            <span className="text-sm text-muted-foreground">€</span>
            <span className="text-foreground font-bold">0.00</span>
            <Button size="sm" className="bg-gradient-to-r from-[var(--candy-green)] to-[var(--candy-blue)] hover:shadow-lg hover:shadow-[var(--candy-green)]/25 text-white rounded-xl h-8 px-3 transition-all duration-300">
              +
            </Button>
          </div>

          {/* Icons */}
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-xl w-10 h-10">
            <Globe className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-xl w-10 h-10">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-xl w-10 h-10">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}