import MosqueBar from "../Components/MosqueBar";
import hero from "../assets/hero.png";
import mosque from "../assets/mosque.png";
import Transitions from "../utils/Transitions/Transitions";
import { mosques } from "../utils/data/data";

const HomePage = () => {
  return (
    <Transitions>
      <section
        className=" bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:items-end lg:justify-end lg:px-8">
          <div className="max-w-lg text-center space-y-2 px-4 py-6  insent-0  bg-white/50 rounded-xl backdrop-filter  backdrop-opacity-50">
            <h1 className="text-lg md:text-[2.3rem] leading-[3.4375rem] font-semibold pb-4 text-textBlack">
              Help Restore Dilapidated Mosques{" "}
            </h1>
            <p className="leading-[2.25rem] text-[#001712]  mt-4 max-w-lg">
              The Prophet (PBUH) said: “Whoever builds a masjid for the sake of
              Allah, Allah will build for him a house in Paradise.”
            </p>
            <button className="btn btn-sm bg-textGreen border-none text-white text-xs hover:bg-textGreen/80">
              Donate
            </button>{" "}
          </div>
        </div>
      </section>
      <div className="head">
        <div className="flex flex-col justify-between md:flex-row my-8">
          <article className="flex flex-col max-w-xl space-y-3">
            <h2 
            className="text-lg md:text-[2rem] leading-[3.4375rem] font-semibold  text-textBlack"
            >
              Restore Mosques, Restore Communities: Join the Movement
            </h2>
            <p>
              Quran - Surah At-Tawbah (9:18): <br /> "The mosques of Allah are
              only to be maintained by those who believe in Allah and the Last
              Day and establish prayer and give zakah and do not fear except
              Allah, for it is expected that those will be of the [rightly]
              guided."
            </p>
            <p>
              Quran - Surah Al-Baqarah (2:114): <br /> "Who is more unjust than
              one who prevents access to the places of worship of Allah, so that
              His name is not mentioned therein, and strives toward their
              destruction? It is not for them to enter them except in fear. For
              them in this world is disgrace, and they will have in the
              Hereafter a great punishment."
            </p>
            <p>
              These verses emphasize the importance of maintaining and
              preserving masajid (mosques) as places of worship and spiritual
              nourishment, with promises of great rewards for those who
              contribute to their construction or restoration. Our platform is
              dedicated to restoring mosques and revitalizing communities.
              Together, we can make a lasting impact, nurturing the spirit of
              Islamic communities. Masajid are not just buildings; they are the
              soul of our faith, providing enlightenment, education, and unity.
              Neglect and financial constraints hinder their ability to serve
              communities. Your contribution is a beacon of hope, preserving our
              heritage, reviving traditions, and empowering the faithful.
              Restored masajid become pillars of strength, inspiring
              worshippers, nurturing minds, and fostering unity. They breathe
              new life into communities, promoting social cohesion, and driving
              development through education and charity. Every contribution
              matters. Join our cause, rebuild lives, and restore masajid for a
              powerful legacy of faith, compassion, and unity.
            </p>
          </article>
          <img src={mosque} alt="" />
        </div>
        <div className="my-8">
          <h2 className="text-lg md:text-[2rem] leading-[3.4375rem] font-semibold  text-textBlack">
            Masajids (mosques) in need of donations{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-6">
            {mosques.map((data, index) => (
              <MosqueBar key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-lg md:text-[1.4rem] leading-[3.4375rem] font-semibold  text-textBlack">
            Nigerian Masajid need your help
          </h2>
          <div className="flex flex-col md:flex-row space-y-4 justify-center items-center space-x-8 mt-3">
            <div className="card w-80 bg-textGreen text-primary-content">
              <div className="card-body">
                <p className="text-white">
                  With a generous donation of just a 1000 Naira, you can create
                  a profound impact; complete unfinished masajid and breathe new
                  life into dilapidated mosques and restore them to their former
                  glory.
                </p>
              </div>
            </div>
            <div className="card w-80 bg-textGreen text-primary-content scale-[1.1]">
              <div className="card-body">
                <p className="text-white">
                  Based on our research, the current number of uncompleted and
                  dilapidated mosques in Nigeria exceeds 200,000, in contrast to
                  the over 800,000 mosques across the country. This makes the
                  donation important.
                </p>
              </div>
            </div>
            <div className="card w-80 bg-textGreen text-primary-content">
              <div className="card-body">
                <p className="text-white">
                  Muslims worldwide have the opportunity to contribute to this
                  noble cause. The donation is not limited to Nigerians alone;
                  it is open to every Muslim who desires to support the cause of
                  Allah and be rewarded.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12">
          <h1 className="stroke-text text-4xl font-bold md:text-7xl text-white text-center">
            Empower Islam, Donate for Masajid.
          </h1>
        </div>
      </div>
    </Transitions>
  );
};

export default HomePage;
