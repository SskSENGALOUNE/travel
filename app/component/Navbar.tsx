'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🏛️</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-slate-800">ທ່ອງທ່ຽວລາວ</h1>
              <p className="text-xs text-slate-500">Laos Tourism</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-slate-100 relative group"
            >
              ໜ້າຫຼັກ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-700 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href= "/PlaceCard" 
              className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-slate-100 relative group"
            >
              ສະຖານທີ່
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-700 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#" 
              className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-slate-100 relative group"
            >
              ວັດທະນະທຳ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-700 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#" 
              className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-slate-100 relative group"
            >
              ຕິດຕໍ່
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-700 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA Button and Search */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Language Toggle */}
            <button className="px-3 py-1 text-sm border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 transition-all duration-300">
              EN
            </button>
            
            {/* CTA Button */}
            <button className="bg-slate-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 hover:shadow-md">
              ຈອງທົວ
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <a 
                href="#" 
                className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 px-4 py-3 rounded-lg font-medium transition-all duration-300"
              >
                ໜ້າຫຼັກ
              </a>
              <a 
                href="#" 
                className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 px-4 py-3 rounded-lg font-medium transition-all duration-300"
              >
                ສະຖານທີ່
              </a>
              <a 
                href="#" 
                className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 px-4 py-3 rounded-lg font-medium transition-all duration-300"
              >
                ວັດທະນະທຳ
              </a>
              <a 
                href="#" 
                className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 px-4 py-3 rounded-lg font-medium transition-all duration-300"
              >
                ຕິດຕໍ່
              </a>
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <button className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300">
                  ຈອງທົວ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}