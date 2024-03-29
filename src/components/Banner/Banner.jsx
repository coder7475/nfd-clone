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
    <section className="xl:flex justify-center w-[95%] mx-auto min-h-screen">
      <div className="bg-white rounded-[30px] xl:w-[50%] mt-3 py-5 flex justify-center items-center flex-col gap-6">
        <figure>
          <img src="/rabbit.svg" alt="nfd rabbit" />
        </figure>
        <BannerHeader></BannerHeader>
        <p className="text-center w-[568px] text-[20px] text-[#4F5662]">
          An Alpha community 2.0 with its own platform for participating,
          searching, and tracking any crypto related information.
        </p>
        <div>
          <OnlyPCVersion />
          <HowItWorks />
        </div>
      </div>
      <div className="bg-[#020203] rounded-[30px] xl:w-[50%] mt-3 py-5 flex justify-center items-center flex-col gap-6">
        <figure>
          <img src="/hello.svg" alt="nfd software" />
        </figure>
        <div className="syne text-center bg-gradient-to-t text-[36px] font-bold from-[#272750] to-gray-200 text-transparent bg-clip-text">
          <h1 className="">NFD software</h1>
          <h2 className="">“Combine”</h2>
        </div>
        <p className="text-center w-[568px] text-[20px] text-[#4F5662]">
        Handle your crypto-wallets, farm activities and retrodrops on a single app.
        </p>
        <div>
          <OnlyPCVersion />
          <HowItWorks />
        </div>
      </div>
    </section>
  );
};

export default Banner;
