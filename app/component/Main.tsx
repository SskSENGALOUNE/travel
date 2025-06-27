import React from 'react'

function Main() {
  return (
    <div>
        <main className="relative min-h-screen bg-gradient-to-b from-slate-50 to-gray-100 flex flex-col items-center justify-center p-4 overflow-hidden">
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          {/* Simple geometric pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          
          {/* Minimal decorative circles */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-16 w-48 h-48 bg-gray-300/20 rounded-full blur-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          
          {/* Simple Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-2xl">🏛️</div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 leading-tight">
            ຍິນດີຕ້ອນຮັບສູ່ເວັບທ່ອງທ່ຽວປະເທດລາວ
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
            ສະຖານທີ່ທ່ອງທ່ຽວທີ່ສວຍງາມໃນປະເທດລາວ
            <br />
            <span className="text-lg text-slate-500">Discover the Beautiful Places of Laos</span>
          </p>

          {/* Simple Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              ສຳຫຼວດດຽວນີ້
            </button>
            
            <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50 font-medium py-3 px-8 rounded-lg transition-all duration-300">
              ດູສະຖານທີ່
            </button>
          </div>

          {/* Clean Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-slate-800 mb-2">50+</div>
              <div className="text-slate-600 text-sm">ສະຖານທີ່ທ່ອງທ່ຽວ</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-slate-800 mb-2">100+</div>
              <div className="text-slate-600 text-sm">ຮູບພາບງາມ</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-slate-800 mb-2">24/7</div>
              <div className="text-slate-600 text-sm">ບໍລິການ</div>
            </div>
          </div>
        </div>

        {/* Simple Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main