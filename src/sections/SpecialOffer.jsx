import { offer } from "../assets/images"
import Button from "../components/button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      {/* Image Section */}
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          alt="Special Nike Offer"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex-1 px-4 sm:px-0">
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold capitalize'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            We Provide
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Super quality</span> Shoes
        </h1>

        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Visit the nearest store or shop online now.
        </p>

        <div className="flex gap-5 flex-wrap">
          <Button label='View Details' iconURL={arrowRight} />
          <Button 
            label='Learn More'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
