const Button = ({
  label,
  iconUrl,
  textColor,
  borderColor,
  backgroundColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border leading-none font-montserrat ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } rounded-full ${borderColor ? borderColor : "border-coral-red"} ${
        textColor ? textColor : "text-white"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow icon"
          className="ml-2 rounded-full h-5 w-5"
        />
      )}
    </button>
  );
};

export default Button;
