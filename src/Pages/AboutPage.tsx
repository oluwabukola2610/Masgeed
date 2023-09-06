import Subtract from "../assets/Subtract.png";
import Subtract2 from "../assets/Subtract 02.png";
import { data, members } from "../utils/data/data";
import Transitions from "../utils/Transitions/Transitions";

const AboutUsPage = () => {
  return (
    <Transitions>
      <div className="head ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 ">
          <div className="">
            <h1 className="text-lg md:text-[2.8rem] leading-[3.4375rem] font-semibold pb-4 text-textBlack">
               About Ibni Masjid Lillah</h1>
            <p className="leading-[2.25rem] text-[#001712] font-medium">
              Ibni Masjid Lillah is a non-profit Islamic organization dedicated
              to restoring and renovating mosques in Nigeria. Through
              transparent initiatives and dedicated efforts, we aim to connect
              donors with mosque restoration projects, creating a positive
              impact on worshipers and communities, ensuring mosques remain
              centers of faith, unity, education, and development.
            </p>
          </div>

          <img src={Subtract} className="" alt="Subtract2" />

          {/* our mission and vision */}
          <div className="">
            <h1 className="text-2xl md:text-[2.8rem] leading-[3.4375rem] font-medium pb-2 text-textBlack">
              Our Mission</h1>
            <p className="">
              At Ibni Masjid Lillah, our mission is to empower Islamic
              communities across Nigeria by restoring and revitalizing mosques
              in need. We are dedicated to preserving our cherished heritage and
              fostering a sense of unity and spiritual enlightenment within our
              communities. Through our platform, we strive to connect generous
              donors with mosque restoration projects, creating a positive and
              lasting impact on the lives of worshipers and the broader society.
            </p>
          </div>

          <div className="">
          <h1 className="text-2xl md:text-[2.8rem] leading-[3.4375rem] font-medium pb-2 text-textBlack">
              Our Vision</h1>
            <p className="">
              At Ibni Masjid Lillah, we are committed to making a difference.
              Our primary goals include Masajid (Mosques Restoration) as we aim
              to restore dilapidated and uncompleted mosques across Nigeria,
              making them serve the purpose they are meant to serve which is the
              worship of Allah. We also take pride in our commitment to
              transparency and accountability. Every donation is used
              meticulously for the intended restoration projects, and donors
              receive regular updates on progress. We seek to foster
              collaborations with local organizations, scholars, and community
              leaders to ensure that our efforts align with the unique needs of
              each masjid.
            </p>
          </div>

          {/* why we started */}
          <div className=" ">
          <h1 className="text-2xl md:text-[2.8rem] leading-[3.4375rem] font-medium pb-2 text-textBlack">
              Why We Started</h1>
            <p className="leading-[2.25rem] text-[1rem] text-[#001712] font-medium">
              Ibni Masjid Lillah is a non-profit Islamic organization dedicated
              to restoring and renovating mosques in Nigeria. Through
              transparent initiatives and dedicated efforts, we aim to connect
              donors with mosque restoration projects, creating a positive
              impact on worshipers and communities, ensuring mosques remain
              centers of faith, unity, education, and development.
            </p>
          </div>

          <img src={Subtract2} className="" alt="Subtract2" />
          {/* end of why we started */}
        </div>
        <div className=" mt-10 ">
        <h1 className="text-lg md:text-[2.8rem] leading-[3.4375rem] font-semibold pb-4 text-textBlack">
            Our Values
          </h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 my-4 md:gap-9 mx-[2rem] md:mx-[4rem] lg:mx-[6.5rem]">
            {data.map((item, index) => (
              <div
                key={index}
                className=" text-textBlack flex flex-col items-center space-y-4 "
              >
                <h1 className="font-semibold text-md">{item.title}</h1>
                <img src={item.img} alt={item.alt} />
                <p>{item.des}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-10 ">
        <h1 className="text-lg md:text-[2.8rem] leading-[3.4375rem] font-semibold pb-4 text-textBlack">
            Meet Our Members
          </h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 my-4 md:gap-9 mx-[1rem] md:mx-[4rem] lg:mx-[6.5rem]">
            {members.map((item, index) => (
              <div
                key={index}
                className=" text-textBlack flex flex-col items-center "
              >
                <img src={item.img} alt={item.alt} />
                <h1 className="font-semibold text-lg">{item.fullname}</h1>
                <p className="text-center text-[#9DA39F]">{item.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Transitions>
  );
};

export default AboutUsPage;
