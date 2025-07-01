import React, { useState } from 'react';

// Komponen untuk ikon hamburger dan close
const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


// Komponen Layout Utama
const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      {/* ===== HEADER / NAVBAR ===== */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo atau Nama Situs */}
            <div className="text-xl font-bold text-gray-800">
              <a href="/">Peta Ubinan</a>
            </div>

            {/* Tombol Menu Mobile */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
                {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-blue-500 transition duration-300">Beranda</a>
              <a href="/peta" className="text-gray-600 hover:text-blue-500 transition duration-300">Peta Interaktif</a>
              <a href="/tentang" className="text-gray-600 hover:text-blue-500 transition duration-300">Tentang</a>
              <a href="/kontak" className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Kontak</a>
            </div>
          </div>

          {/* Menu Mobile (Tampil/Sembunyi) */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <a href="/" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200 rounded">Beranda</a>
              <a href="/peta" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200 rounded">Peta Interaktif</a>
              <a href="/tentang" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200 rounded">Tentang</a>
              <a href="/kontak" className="block mt-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Kontak</a>
            </div>
          )}
        </nav>
      </header>

      {/* ===== KONTEN UTAMA ===== */}
      {/* flex-grow memastikan konten mengisi ruang yang tersedia, mendorong footer ke bawah */}
      <main className="flex-grow">
        {children}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} BPS Kabupaten Dompu. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100010762241662" className="text-gray-400 hover:text-white transition duration-300">Bukan Facebook</a>
              <a href="https://www.instagram.com/bps_dompu/" className="text-gray-400 hover:text-white transition duration-300">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
