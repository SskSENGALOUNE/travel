'use client';

import { useState, useEffect } from 'react';

interface MapLocation {
  id: number;
  name: string;
  nameLao: string;
  lat: number;
  lng: number;
  type: 'temple' | 'nature' | 'city' | 'waterfall' | 'historical';
  description: string;
  image: string;
  rating: number;
}

// Sample locations in Laos
const laosLocations: MapLocation[] = [
  {
    id: 1,
    name: "Luang Prabang",
    nameLao: "ຫຼວງພະບາງ",
    lat: 19.8845,
    lng: 102.1346,
    type: 'historical',
    description: "UNESCO World Heritage ancient city",
    image: "🏛️",
    rating: 4.8
  },
  {
    id: 2,
    name: "Vang Vieng",
    nameLao: "ວັງວຽງ",
    lat: 18.9244,
    lng: 102.4485,
    type: 'nature',
    description: "Beautiful limestone mountains and river",
    image: "🏔️",
    rating: 4.6
  },
  {
    id: 3,
    name: "That Luang",
    nameLao: "ພະທາດຫຼວງ",
    lat: 17.9756,
    lng: 102.6331,
    type: 'temple',
    description: "National symbol of Laos",
    image: "⛩️",
    rating: 4.7
  },
  {
    id: 4,
    name: "Kuang Si Falls",
    nameLao: "ນ້ຳຕົກກວາງສີ",
    lat: 19.7489,
    lng: 101.9917,
    type: 'waterfall',
    description: "Stunning turquoise waterfalls",
    image: "💧",
    rating: 4.9
  },
  {
    id: 5,
    name: "Plain of Jars",
    nameLao: "ທົ່ງໄຫຫິນ",
    lat: 19.4500,
    lng: 103.2000,
    type: 'historical',
    description: "Mysterious ancient stone jars",
    image: "🏺",
    rating: 4.5
  }
];

const MapIntegration = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [filteredLocations, setFilteredLocations] = useState<MapLocation[]>(laosLocations);

  // Filter locations based on type
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredLocations(laosLocations);
    } else {
      setFilteredLocations(laosLocations.filter(loc => loc.type === activeFilter));
    }
  }, [activeFilter]);

  const filterOptions = [
    { value: 'all', label: 'ທັງໝົດ', icon: '🌍' },
    { value: 'temple', label: 'ວັດວາອາຮາມ', icon: '⛩️' },
    { value: 'nature', label: 'ທຳມະຊາດ', icon: '🏔️' },
    { value: 'waterfall', label: 'ນ້ຳຕົກ', icon: '💧' },
    { value: 'historical', label: 'ປະຫວັດສາດ', icon: '🏛️' },
    { value: 'city', label: 'ເມືອງ', icon: '🏙️' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              ແຜນທີ່ສະຖານທີ່ທ່ອງທ່ຽວ
            </h2>
            <p className="text-slate-600">Tourist Attractions Map</p>
          </div>
          
          {/* View Toggle */}
          <div className="flex bg-white rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                viewMode === 'map' 
                ? 'bg-slate-800 text-white shadow-sm' 
                : 'text-slate-600 hover:bg-gray-50'
              }`}
            >
              🗺️ Map
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                viewMode === 'list' 
                ? 'bg-slate-800 text-white shadow-sm' 
                : 'text-slate-600 hover:bg-gray-50'
              }`}
            >
              📋 List
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                ? 'bg-slate-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.icon} {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {viewMode === 'map' ? (
          // Map View
          <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100">
            {/* Placeholder Map (In real implementation, use Google Maps or Leaflet) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-slate-600 mb-2">Interactive Map Placeholder</p>
                <p className="text-sm text-slate-500">
                  In production, integrate with Google Maps API or Leaflet
                </p>
              </div>
            </div>

            {/* Location Pins */}
            {filteredLocations.map((location) => (
              <div
                key={location.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                style={{
                  left: `${((location.lng - 100) / 6) * 100 + 20}%`,
                  top: `${((20 - location.lat) / 4) * 100 + 20}%`
                }}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="bg-white rounded-full p-2 shadow-lg border-2 border-slate-300 hover:border-slate-500">
                  <span className="text-xl">{location.image}</span>
                </div>
              </div>
            ))}

            {/* Location Info Popup */}
            {selectedLocation && (
              <div className="absolute top-4 left-4 right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-200 z-10">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {selectedLocation.nameLao}
                    </h3>
                    <p className="text-sm text-slate-600">{selectedLocation.name}</p>
                  </div>
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="text-slate-400 hover:text-slate-600 p-1"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm text-slate-600 mb-3">{selectedLocation.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-medium">{selectedLocation.rating}</span>
                  </div>
                  <button className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700 transition-colors">
                    ດູລາຍລະອຽດ
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // List View
          <div className="p-6">
            <div className="grid gap-4">
              {filteredLocations.map((location) => (
                <div
                  key={location.id}
                  className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedLocation(location)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{location.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800">{location.nameLao}</h3>
                      <p className="text-sm text-slate-600 mb-1">{location.name}</p>
                      <p className="text-sm text-slate-500">{location.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-2">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm font-medium">{location.rating}</span>
                      </div>
                      <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded-full">
                        {filterOptions.find(f => f.value === location.type)?.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="bg-gray-50 p-4 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-slate-800">{filteredLocations.length}</div>
            <div className="text-xs text-slate-600">ສະຖານທີ່</div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800">
              {(filteredLocations.reduce((sum, loc) => sum + loc.rating, 0) / filteredLocations.length).toFixed(1)}
            </div>
            <div className="text-xs text-slate-600">ຄະແນນສະເລ່ຍ</div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800">5</div>
            <div className="text-xs text-slate-600">ໝວດໝູ່</div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800">24/7</div>
            <div className="text-xs text-slate-600">ເປີດບໍລິການ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapIntegration;