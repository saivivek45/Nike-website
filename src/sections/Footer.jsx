import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='max-container text-white relative'>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-coral-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className='relative z-10 flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        {/* Brand Section */}
        <div className='flex flex-col items-start max-w-md'>
          <a 
            href='/' 
            className="transform transition-transform duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src={footerLogo}
              alt='Nike Logo'
              width={150}
              height={46}
              className='m-0 drop-shadow-lg'
            />
          </a>
          
          <p className='mt-6 text-base leading-7 font-montserrat text-gray-300 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get rewards and experience premium quality.
          </p>

          {/* Newsletter Signup */}
          <div className="mt-8 w-full">
            <h5 className="text-white font-montserrat font-semibold mb-3">Stay Updated</h5>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-coral-red transition-colors duration-300"
              />
              <button className="bg-coral-red hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className='flex items-center gap-5 mt-8'>
            <span className="text-gray-300 font-montserrat font-medium mr-2">Follow us:</span>
            {socialMedia.map((icon) => (
              <a
                key={icon.alt}
                href="#"
                className='flex justify-center items-center w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full hover:bg-coral-red hover:scale-110 transition-all duration-300 group'
              >
                <img 
                  src={icon.src} 
                  alt={icon.alt} 
                  width={20} 
                  height={20}
                  className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap min-w-0'>
          {footerLinks.map((section) => (
            <div key={section.title} className="min-w-[150px]">
              <h4 className='font-montserrat text-xl leading-normal font-semibold mb-6 text-white relative'>
                {section.title}
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-coral-red"></div>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className='font-montserrat text-base leading-normal text-gray-300 hover:text-coral-red hover:translate-x-1 transition-all duration-300 block'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-20 mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Bottom Footer */}
      <div className='relative z-10 flex justify-between items-center text-gray-300 max-sm:flex-col max-sm:gap-4'>
        <div className='flex items-center gap-2 font-montserrat'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0 opacity-70'
          />
          <p>© {currentYear} Nike. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className='hover:text-coral-red transition-colors duration-300'>Privacy Policy</a>
          <span className="text-gray-500">•</span>
          <a href="#" className='hover:text-coral-red transition-colors duration-300'>Terms of Service</a>
          <span className="text-gray-500">•</span>
          <a href="#" className='hover:text-coral-red transition-colors duration-300'>Cookie Policy</a>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-coral-red hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-coral-red/25 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;