const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
  variant = 'primary',
  size = 'default',
  disabled = false,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return "bg-coral-red text-white border-coral-red hover:bg-red-600 hover:border-red-600 hover:shadow-2xl hover:shadow-coral-red/25";
      case 'secondary':
        return "bg-transparent text-coral-red border-coral-red hover:bg-coral-red hover:text-white hover:shadow-xl";
      case 'ghost':
        return "bg-transparent text-slate-gray border-transparent hover:bg-gray-100 hover:text-slate-800";
      case 'gradient':
        return "gradient-coral text-white border-transparent hover:shadow-2xl hover:shadow-coral-red/30 hover:scale-105";
      default:
        return "bg-coral-red text-white border-coral-red hover:bg-red-600 hover:border-red-600 hover:shadow-2xl hover:shadow-coral-red/25";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return "px-6 py-3 text-sm";
      case 'large':
        return "px-10 py-5 text-xl";
      default:
        return "px-7 py-4 text-lg";
    }
  };

  const baseClasses = "flex justify-center items-center gap-2 border font-montserrat leading-none rounded-full transition-all duration-300 ease-out transform relative overflow-hidden group";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  const hoverClasses = disabled ? "" : "hover:-translate-y-1 active:translate-y-0 active:scale-95";

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${getSizeClasses()}
        ${backgroundColor && textColor && borderColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : getVariantClasses()
        }
        ${fullWidth ? "w-full" : ""}
        ${hoverClasses}
        ${disabled ? disabledClasses : ""}
      `}
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt='icon'
            className={`ml-2 rounded-full bg-white transition-transform duration-300 group-hover:rotate-12 ${
              size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-6 h-6' : 'w-5 h-5'
            }`}
          />
        )}
      </span>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-20 bg-white transition-opacity duration-150"></div>
    </button>
  );
};

export default Button;