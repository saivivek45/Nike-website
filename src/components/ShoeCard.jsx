const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const isSelected = bigShoeImg === imgURL.bigShoe;

  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage?.(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`modern-card cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
        isSelected
          ? 'ring-4 ring-coral-red ring-opacity-50 shadow-2xl shadow-coral-red/20 scale-105'
          : 'hover:scale-105 hover:shadow-xl'
      }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Select ${imgURL.thumbnail} shoe design`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-3 right-3 w-3 h-3 bg-coral-red rounded-full animate-pulse z-10">
          <div className="absolute inset-0 bg-coral-red rounded-full animate-ping"></div>
        </div>
      )}

      {/* Card background with gradient */}
      <div className={`
        relative bg-card bg-cover bg-center p-6 transition-all duration-500
        ${isSelected 
          ? 'bg-gradient-to-br from-coral-red/10 to-coral-red/5' 
          : 'bg-gradient-to-br from-gray-50 to-white hover:from-coral-red/5 hover:to-coral-red/2'
        }
      `}>
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-20 h-20 bg-coral-red rounded-full blur-2xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-400 rounded-full blur-xl opacity-20"></div>
        </div>

        {/* Shoe image */}
        <div className="relative z-10 flex justify-center items-center min-h-[100px]">
          <img
            src={imgURL.thumbnail}
            alt="Shoe design option"
            width={127}
            height={103}
            className={`
              object-contain transition-all duration-500 ease-out
              ${isSelected 
                ? 'scale-110 drop-shadow-lg' 
                : 'scale-100 hover:scale-110 group-hover:drop-shadow-md'
              }
            `}
          />
        </div>

        {/* Hover overlay */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-coral-red/10 to-transparent 
          opacity-0 transition-opacity duration-300
          ${!isSelected ? 'group-hover:opacity-100' : ''}
        `}></div>
      </div>

      {/* Bottom accent line */}
      <div className={`
        h-1 bg-gradient-to-r from-coral-red to-red-500 transition-all duration-500 ease-out
        ${isSelected ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'}
      `}></div>
    </div>
  );
};

export default ShoeCard;
