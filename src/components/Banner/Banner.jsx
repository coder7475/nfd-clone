
const Banner = () => {
  return (
    <section className="syne">
      <div className="bg-white max-w-[95%] mx-auto rounded-[30px] mt-3 py-5 flex justify-center items-center flex-col gap-2">
        <figure>
          <img src="/rabbit.svg" alt="nfd rabbit" />
        </figure>
        <div>
            <h1 className="text-[36px] font-medium">NFD platform</h1>
            <blockquote className="text-xl">“NFD.gg”</blockquote>
        </div>
      </div>
    </section>
  );
};

export default Banner;
