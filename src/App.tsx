import React, { useState } from 'react';
import { CasinoSidebar } from './components/CasinoSidebar';
import { CasinoHeader } from './components/CasinoHeader';
import { CasinoHero } from './components/CasinoHero';
import { GameCategories } from './components/GameCategories';
import { TopGames } from './components/TopGames';
import { SlotsSection } from './components/SlotsSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<'casino' | 'sports'>('casino');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <CasinoSidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header - NOT blurred */}
        <CasinoHeader 
          onMenuClick={() => setSidebarOpen(true)}
          activeSection={activeSection}
        />
        
        {/* Content area with blur and overlay */}
        <div className="relative">
          {/* Blurred Content */}
          <div className="filter pointer-events-none" style={{ filter: 'blur(3.6px)' }}>
            {/* Hero Section */}
            <CasinoHero />
            
            {/* Game Categories */}
            <GameCategories />
            
            {/* Top Games */}
            <TopGames />
            
            {/* Slots Section */}
            <SlotsSection />
          </div>
          
        {/* Technical Work Message Overlay - fixed position, stays in center */}
        <div className="fixed inset-0 flex items-center justify-center z-50 lg:ml-64 pointer-events-none">
          <div className="bg-gradient-to-r from-[var(--candy-pink)]/95 via-[var(--candy-purple)]/95 to-[var(--candy-blue)]/95 backdrop-blur-lg rounded-3xl p-8 max-w-lg mx-4 text-center shadow-2xl shadow-[var(--candy-pink)]/20 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-[var(--candy-yellow)] to-[var(--candy-orange)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--candy-yellow)]/25 animate-pulse">
              <span className="text-3xl">🔧</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Technical Work in Progress
            </h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              We're adding some extra sweetness to our candy casino! 🍭✨ 
              <br />
              Our games will be back shortly.
              <br />
              <span className="text-sm text-white/80">Contact: helpcandycasino@proton.me</span>
            </p>
            <div className="flex justify-center gap-3">
              <div className="w-3 h-3 bg-[var(--candy-pink)] rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-[var(--candy-blue)] rounded-full animate-bounce delay-150"></div>
              <div className="w-3 h-3 bg-[var(--candy-purple)] rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}