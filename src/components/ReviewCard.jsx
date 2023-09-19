import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 info-text text-center max-w-sm">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="font-monsterrat text-slate-gray text-xl">({rating})</p>
      </div>
      <h3 className="text-center font-palanquin font-bold text-3xl dark:text-white">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
