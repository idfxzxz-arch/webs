import React, { useState } from 'react';
import { GraduationCap, Building2, BookOpen, ArrowRight, Menu, X, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function UniversityWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (!section) return;

  const navbarHeight = 70;
  const targetY = section.offsetTop - navbarHeight;
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const duration = 500; // 🔥 Semakin besar → semakin lambat (700–1200 pas)
  let startTime = null;

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const animation = (time) => {
    if (!startTime) startTime = time;
    const timeElapsed = time - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const eased = easeOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
  setMenuOpen(false);
};





  const newsItems = [
    {
      category: "AUG | TODAY",
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis mod.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop"
    },
    {
      category: "AUG | TODAY",
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
    },
    {
      category: "AUG | TODAY",
      title: "Shownu's So Hot What Do We Do For This?",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop"
    }
  ];

  return (
     <div className="text-white min-h-screen" style={{backgroundColor: '#020221ff'}}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">

              <div className="text-xs">
                <div className="font-bold">Muhammadiyah University of Karanganyar</div>
                <div className="text-gray-400">Computer Engineering</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
  <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition">Home</button>
  <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">About Us</button>
  <button onClick={() => scrollToSection('news')} className="hover:text-blue-400 transition">News</button>
</div>


           

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

 {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden bg-transparent ">
    <div className="px-4 py-4 space-y-3">
      <button onClick={() => scrollToSection('home')} className="block hover:text-blue-400">Home</button>
      <button onClick={() => scrollToSection('about')} className="block hover:text-blue-400">About Us</button>
      <button onClick={() => scrollToSection('news')} className="block hover:text-blue-400">News</button>
    </div>
  </div>
)}

      </nav>

      {/* Hero Section */}
      <div id="home" className="relative h-[700px] scroll-smooth">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/resources/gedung_umuka.webp')",
            filter: "brightness(0.5)"
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto flex items-center justify-center mb-4">
               <img 
                  src="/resources/bgremov.webp"
                  alt="Logo"
                  className="w-100 h-100 object-contain" // Logo juga dibuat lebih kecil
                />
            </div>
            <div className="text-sm tracking-widest mb-2">isi sendiri</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Computer Engineering</h1>
          <p className="text-lg text-gray-300 tracking-wider">The Character of Success</p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition cursor-pointer">
            <GraduationCap className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2 flex items-center">
              SCHOLARSHIP <span className="ml-2 text-xs">●</span>
            </h3>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna aliquam.</p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition cursor-pointer">
            <Building2 className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2 flex items-center">
              OUR CAMPUS <span className="ml-2 text-xs">●</span>
            </h3>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna aliquam.</p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition cursor-pointer">
            <BookOpen className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2 flex items-center">
              PROGRAM <span className="ml-2 text-xs">●</span>
            </h3>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna aliquam.</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="max-w-7xl mx-auto px-4 py-20 scroll-smooth">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-sm mb-4">Muhammadiyah University of Karanganyar</p>
            <h2 className="text-4xl font-bold mb-6">TEKKOM</h2>
            <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img 
              src="https://cdn.the-scientist.com/assets/image/48049/graduate-student-1800x720-x.webp"
              alt="Graduate"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* News Section */}
      <div id="news" className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2 flex items-center">
              <span className="text-blue-400 mr-3">●</span> News.
            </h2>
            <p className="text-xl text-gray-400">Communication Center | For Two Page</p>
            <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-3">{item.category}</p>
                  <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                  <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-sm flex items-center transition">
                    READ MORE <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-xs">
                  <div className="font-bold">Duke University</div>
                  <div className="text-gray-400">The Character</div>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <Youtube className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <Linkedin className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Location</li>
               
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">About You</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Introduction</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Join Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>program.edu</li>
                <li>License</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            © TEKKOM 2025-2026 | idkxz
          </div>
        </div>
      </footer>
    </div>
  );
}