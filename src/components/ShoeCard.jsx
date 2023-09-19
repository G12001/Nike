const ShoeCard = ({ imgUrl, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImg(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparant"
      } cursor-pointer max-sm:flex-1 dark:bg-black`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 dark:bg-black">
        <img
          src={imgUrl.thumbnail}
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
