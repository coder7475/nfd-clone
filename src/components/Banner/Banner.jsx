import HowItWorks from "../Buttons/HowItWorks";
import OnlyPCVersion from "../Buttons/OnlyPCVersion";

function BannerHeader() {
  return (
    <div className="syne text-center text-[36px] font-bold">
      <h1 className="">NFD platform</h1>
      <h2 className="text-[#848AFF]">“NFD.gg”</h2>
    </div>
  );
}

const Banner = () => {
  return (
    <section>
      <div className="bg-white max-w-[616px] mx-auto rounded-[30px] mt-3 py-5 flex justify-center items-center flex-col gap-6">
        <figure>
          <img src="/rabbit.svg" alt="nfd rabbit" />
        </figure>
        <BannerHeader></BannerHeader>
        <p className="text-center w-[568px] text-md text-[#4F5662]">
          An Alpha community 2.0 with its own platform for participating,
          searching, and tracking any crypto related information.
        </p>
        <div>
          <OnlyPCVersion/>
          <HowItWorks />
        </div>
      </div>
    </section>
  );
};

export default Banner;
