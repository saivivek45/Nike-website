import { arrowRight } from '../assets/icons'
import Button from '../components/button'
import { shoes, statistics } from '../constants'
import ShoeCard from '../components/ShoeCard'
import { bigShoe1 } from '../assets/images'
import { bigShoe2 } from '../assets/images'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [animatedStats, setAnimatedStats] = useState([]);

  useEffect(() => {
    // Initialize animated statistics
    const timer = setTimeout(() => {
      setAnimatedStats(statistics.map((stat, index) => ({
        ...stat,
        animatedValue: 0,
        delay: index * 200
      })));
      
      // Animate counters
      statistics.forEach((stat, index) => {
        setTimeout(() => {
          const finalValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
          const increment = finalValue / 50;
          let current = 0;
          
          const counter = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
              current = finalValue;
              clearInterval(counter);
            }
            
            setAnimatedStats(prev => prev.map((item, i) => 
              i === index 
                ? { ...item, animatedValue: Math.floor(current) }
                : item
            ));
          }, 30);
        }, 1000 + index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatStatValue = (original, animated) => {
    if (original.includes('k')) return `${animated}k+`;
    if (original.includes('m')) return `${animated}m+`;
    return `${animated}+`;
  };

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container pt-20'
    >
      {/* Content Section */}
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 bg-coral-red bg-opacity-10 px-4 py-2 rounded-full mb-8 slide-right'>
          <div className='w-2 h-2 bg-coral-red rounded-full animate-pulse'></div>
          <p className='text-sm font-montserrat text-coral-red font-semibold tracking-wide uppercase'>
            Our Summer Collections
          </p>
        </div>

        {/* Main Heading */}
        <h1 className='mt-4 heading-primary fade-in'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 inline-block'>
            The New Arrival
            <div className='absolute -top-4 -right-4 w-20 h-20 bg-coral-red bg-opacity-10 rounded-full blur-2xl'></div>
          </span>
          <br />
          <span className='text-gradient inline-block mt-3 bounce-in'>Nike</span>
          <span className='ml-4'>Shoes</span>
        </h1>

        {/* Description */}
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm slide-up opacity-90'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life. Experience the perfect blend of style and performance.
        </p>

        {/* CTA Button */}
        <div className='slide-up'>
          <Button 
            label='Shop now' 
            iconURL={arrowRight} 
            variant='gradient'
            size='large'
            onClick={() => {
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>

        {/* Statistics */}
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {animatedStats.map((stat, index) => (
            <div 
              key={index} 
              className='slide-up scale-hover group'
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <p className='text-4xl font-palanquin font-bold text-gradient group-hover:scale-110 transition-transform duration-300'>
                {formatStatValue(stat.value, stat.animatedValue)}
              </p>
              <p className='leading-7 font-montserrat text-slate-gray group-hover:text-coral-red transition-colors duration-300'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40'>
        {/* Background with enhanced gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-primary via-pale-blue to-white rounded-3xl shadow-2xl'>
          <div className='absolute inset-0 bg-hero bg-cover bg-center opacity-60 rounded-3xl'></div>
          <div className='absolute top-10 right-10 w-32 h-32 bg-coral-red bg-opacity-20 rounded-full blur-3xl float'></div>
          <div className='absolute bottom-20 left-10 w-24 h-24 bg-blue-400 bg-opacity-20 rounded-full blur-2xl float' style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Main Shoe Image */}
        <img
          src={bigShoeImg}
          alt='Nike shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10 float scale-hover drop-shadow-2xl'
        />

        {/* Shoe Selection Cards */}
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 z-20'>
          {shoes.map((image, index) => (
            <div 
              key={index} 
              className='bounce-in'
              style={{ animationDelay: `${1000 + index * 200}ms` }}
            >
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className='absolute top-1/4 right-1/4 w-4 h-4 bg-coral-red rounded-full opacity-60 float'></div>
        <div className='absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full opacity-40 float' style={{ animationDelay: '2s' }}></div>
        <div className='absolute top-1/2 left-1/6 w-2 h-2 bg-yellow-400 rounded-full opacity-50 float' style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero
