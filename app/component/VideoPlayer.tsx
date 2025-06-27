'use client';

import { useState, useRef, useEffect } from 'react';

interface Video {
  id: number;
  title: string;
  titleLao: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: string;
  description: string;
  videoUrl: string;
}

// Sample video data
const videoLibrary: Video[] = [
  {
    id: 1,
    title: "Luang Prabang Ancient City Tour",
    titleLao: "ທ່ອງທ່ຽວເມືອງຫຼວງພະບາງ",
    thumbnail: "🏛️",
    duration: "8:32",
    views: "25.4K",
    category: "Historical",
    description: "Explore the UNESCO World Heritage city of Luang Prabang",
    videoUrl: "https://www.youtube.com/watch?v=PSMPEX8WXdg"
  },
  {
    id: 2,
    title: "Kuang Si Waterfalls Adventure",
    titleLao: "ຜະຈົນໄພນ້ຳຕົກກວາງສີ",
    thumbnail: "💧",
    duration: "12:15",
    views: "18.2K",
    category: "Nature",
    description: "Discover the stunning turquoise waterfalls of Kuang Si",
    videoUrl: "https://www.youtube.com/watch?v=PSMPEX8WXdg"
  },
  {
    id: 3,
    title: "Vang Vieng Balloon Ride",
    titleLao: "ກິດຕະບິນຫວ່າງຫລ້ອງວັງວຽງ",
    thumbnail: "🎈",
    duration: "6:45",
    views: "32.1K",
    category: "Adventure",
    description: "Amazing hot air balloon experience over limestone mountains",
    videoUrl: "https://www.youtube.com/watch?v=PSMPEX8WXdg"
  },
  {
    id: 4,
    title: "Lao Traditional Culture",
    titleLao: "ວັດທະນະທຳປະເພນີລາວ",
    thumbnail: "🎭",
    duration: "15:20",
    views: "14.7K",
    category: "Culture",
    description: "Learn about traditional Lao customs and festivals",
    videoUrl: "https://www.youtube.com/watch?v=PSMPEX8WXdg"
  },
  {
    id: 5,
    title: "Mekong River Sunset Cruise",
    titleLao: "ລ່ອງໂຂງຊົມຕາແລງ",
    thumbnail: "🌅",
    duration: "10:08",
    views: "28.9K",
    category: "Nature",
    description: "Peaceful sunset cruise along the mighty Mekong River",
    videoUrl: "https://www.youtube.com/watch?v=PSMPEX8WXdg"
  }
];

const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState<Video>(videoLibrary[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const playerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Historical', 'Nature', 'Adventure', 'Culture'];

  // Simulate video time update
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          if (newTime >= 300) { // 5 minutes mock duration
            setIsPlaying(false);
            return 0;
          }
          return newTime;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Set mock duration
  useEffect(() => {
    setDuration(300); // 5 minutes
    setCurrentTime(0);
  }, [currentVideo]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const filteredVideos = selectedCategory === 'All' 
    ? videoLibrary 
    : videoLibrary.filter(video => video.category === selectedCategory);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              ວິດິໂອທ່ອງທ່ຽວ
            </h2>
            <p className="text-slate-600">Tourism Videos</p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 p-6">
        {/* Main Video Player */}
        <div className="lg:col-span-2">
          <div 
            ref={playerRef}
            className="relative bg-black rounded-xl overflow-hidden group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* Video Display Area */}
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              {/* Video Placeholder */}
              <div className="text-center text-white">
                <div className="text-8xl mb-4">{currentVideo.thumbnail}</div>
                <h3 className="text-xl font-bold mb-2">{currentVideo.titleLao}</h3>
                <p className="text-gray-300">{currentVideo.title}</p>
              </div>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                  onClick={togglePlay}
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                    <div className="text-black text-2xl ml-1">▶️</div>
                  </div>
                </div>
              )}

              {/* Loading Indicator */}
              {isPlaying && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>
              )}
            </div>

            {/* Video Controls */}
            {showControls && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                {/* Progress Bar */}
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-white text-xs mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={togglePlay}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isPlaying ? '⏸️' : '▶️'}
                    </button>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm">🔊</span>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="text-white hover:text-gray-300 transition-colors">
                      ⚙️
                    </button>
                    <button 
                      onClick={toggleFullscreen}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isFullscreen ? '⤵️' : '⤴️'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="mt-4">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {currentVideo.titleLao}
            </h3>
            <p className="text-slate-600 mb-2">{currentVideo.title}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
              <span>👁️ {currentVideo.views} views</span>
              <span>⏱️ {currentVideo.duration}</span>
              <span className="bg-slate-100 px-2 py-1 rounded-full">{currentVideo.category}</span>
            </div>
            <p className="text-slate-700">{currentVideo.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors">
              👍 Like
            </button>
            <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors">
              📤 Share
            </button>
            <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors">
              ⬇️ Download
            </button>
          </div>
        </div>

        {/* Video Playlist */}
        <div className="lg:col-span-1">
          <h4 className="text-lg font-bold text-slate-800 mb-4">
            ວິດິໂອອື່ນໆ
          </h4>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setCurrentVideo(video)}
                className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  currentVideo.id === video.id 
                  ? 'bg-slate-100 border border-slate-300' 
                  : 'hover:bg-gray-50'
                }`}
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-20 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{video.thumbnail}</span>
                </div>

                {/* Video Info */}
                <div className="flex-1 min-w-0">
                  <h5 className="font-medium text-slate-800 text-sm line-clamp-2 mb-1">
                    {video.titleLao}
                  </h5>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{video.views} views</span>
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gray-50 p-4 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-slate-800">{filteredVideos.length}</div>
            <div className="text-xs text-slate-600">ວິດິໂອ</div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800">125K</div>
            <div className="text-xs text-slate-600">ຍອດເບິ່ງ</div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800">4.8⭐</div>
            <div className="text-xs text-slate-600">ຄະແນນ</div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800">HD</div>
            <div className="text-xs text-slate-600">ຄຸນນະພາບ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;