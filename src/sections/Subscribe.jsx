import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex max-lg:flex-col justify-center items-center gap-10"
      id="contact-us"
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md dark:text-white">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input dark:bg-gray-900"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
