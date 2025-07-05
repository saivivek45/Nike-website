import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="modern-card group cursor-pointer overflow-hidden p-0 max-w-sm mx-auto">
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-4 right-4 w-16 h-16 bg-coral-red opacity-10 rounded-full blur-xl"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 bg-blue-400 opacity-10 rounded-full blur-lg"></div>
        </div>

        {/* Product Image */}
        <img
          src={imgURL}
          alt={name}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-110"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Floating action button */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <svg className="w-5 h-5 text-coral-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>

        {/* Quick view button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="bg-coral-red text-white px-6 py-2 rounded-full font-montserrat font-medium hover:bg-red-600 transition-colors duration-300 shadow-lg">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <img 
                key={i}
                src={star} 
                alt="star" 
                width={16} 
                height={16}
                className={`transition-all duration-300 ${i < 4 ? 'opacity-100' : 'opacity-30'}`}
              />
            ))}
          </div>
          <p className="font-montserrat text-sm text-slate-gray font-medium">(4.5)</p>
          <span className="text-xs text-slate-400 ml-auto">127 reviews</span>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-semibold font-palanquin text-slate-800 mb-2 group-hover:text-coral-red transition-colors duration-300 line-clamp-2">
          {name}
        </h3>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold font-palanquin text-coral-red">
              {price}
            </span>
            <span className="text-sm text-slate-400 line-through font-montserrat">
              ${(parseInt(price.replace('$', '')) + 30).toFixed(2)}
            </span>
          </div>
          
          <button className="bg-gradient-to-r from-coral-red to-red-600 text-white px-4 py-2 rounded-full font-montserrat font-medium hover:shadow-lg hover:shadow-coral-red/25 transform hover:-translate-y-0.5 transition-all duration-300">
            Add to Cart
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">Free Shipping</span>
          <span className="text-xs bg-coral-red bg-opacity-10 text-coral-red px-2 py-1 rounded-full font-medium">Best Seller</span>
        </div>
      </div>
    </div>
  )
}

export default PopularProductCard
