
const Banner = () => {
  return (
    <section className="syne">
      <div className="bg-white max-w-[95%] mx-auto rounded-[30px] mt-3 py-5 flex justify-center items-center flex-col gap-6">
        <figure>
          <img src="/rabbit.svg" alt="nfd rabbit" />
        </figure>
        <div className="text-center text-[36px] font-bold">
            <h1 className="">NFD platform</h1>
            <blockquote className="text-[#848AFF]">“NFD.gg”</blockquote>
        </div>
      </div>
    </section>
  );
};

export default Banner;
