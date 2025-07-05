import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass backdrop-blur-lg py-4' 
        : 'bg-transparent py-8'
    }`}>
      <nav className='flex justify-between items-center max-container px-8 sm:px-16'>
        <a 
          href='/' 
          className="transform transition-transform duration-300 hover:scale-110"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src={headerLogo}
            alt='Nike Logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px] drop-shadow-lg'
          />
        </a>

        {/* Desktop Navigation */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-all duration-300 relative group cursor-pointer'
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a 
            href='/signin' 
            className='text-slate-gray hover:text-coral-red transition-colors duration-300 px-4 py-2 rounded-full hover:bg-coral-red hover:bg-opacity-10'
          >
            Sign in
          </a>
          <span className="text-slate-gray">/</span>
          <a 
            href='/explore' 
            className='text-coral-red hover:text-white bg-coral-red bg-opacity-10 hover:bg-coral-red transition-all duration-300 px-4 py-2 rounded-full font-semibold'
          >
            Explore now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='hidden max-lg:block p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <img 
            src={hamburger} 
            alt='Menu' 
            width={25} 
            height={25}
            className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
          />
        </button>

        {/* Mobile Menu */}
        <div className={`fixed top-full left-0 right-0 glass backdrop-blur-lg border-t border-white/20 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="padding-x py-8">
            <ul className='flex flex-col gap-6 mb-6'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className='font-montserrat text-lg text-slate-gray hover:text-coral-red transition-colors duration-300 block py-2 cursor-pointer'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex flex-col gap-4'>
              <a 
                href='/signin' 
                className='text-slate-gray hover:text-coral-red transition-colors duration-300 py-2 font-medium'
              >
                Sign in
              </a>
              <a 
                href='/explore' 
                className='bg-coral-red text-white py-3 px-6 rounded-full text-center font-semibold hover:bg-opacity-90 transition-all duration-300'
              >
                Explore now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;