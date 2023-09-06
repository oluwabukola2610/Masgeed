import Transitions from "../utils/Transitions/Transitions";
import masgeed1 from "../assets/masgeed1.png";
import frame1 from "../assets/Frame 5900.png";
import frame2 from "../assets/Frame 5901.png";
import frame3 from "../assets/Frame 5902.png";
import mosque from "../assets/mosque.png";
import frame4 from "../assets/masgeed.png";
import { mosques } from "../utils/data/data";
import MosqueBar from "./MosqueBar";
const MosqueDetails = () => {
  return (
    <Transitions>
      <div className="mx-auto max-w-[1640px]">
        <div className="flex flex-col  ">
          <article className="flex flex-col  justify-center mx-auto py-8 px-4">
            <h1 className="text-lg md:text-[2rem] leading-[3.4375rem] font-semibold  text-textBlack">
              Ar-Rasheed Mosque, Yaba, Lagos
            </h1>
            <p className=" max-w-6xl">
              Welcome to the serene sanctuary of Ar-Rasheed Mosque, nestled in
              the heart of Yaba, Lagos. With its awe-inspiring architecture and
              rich historical significance, this sacred space has been a pillar
              of spiritual enlightenment for the local Islamic community.
              Established in the early 20th century, Ar-Rasheed Mosque stands as
              a testament to the enduring legacy of faith and devotion in Lagos.
              Its stunning blend of traditional Islamic design and modern
              elements creates a harmonious ambiance, inviting worshippers to
              experience a profound connection with the Divine. Over the years,
              Ar-Rasheed Mosque has played a pivotal role in fostering unity,
              education, and charitable endeavors within the community. However,
              the passage of time has taken its toll on the mosque's structure,
              necessitating vital restoration efforts. Now, we embark on a
              transformative journey to breathe new life into Ar-Rasheed Mosque.
              Through your generous contributions, we seek to revive its
              splendor and preserve its historical significance for generations
              to come. The restoration project aims to address crucial repairs,
              upgrade facilities, and enhance the overall experience for
              worshippers. By supporting Ar-Rasheed Mosque's restoration, you
              contribute to the preservation of our cherished heritage and the
              continuity of a sacred space that has been a source of inspiration
              and spiritual nourishment for countless souls. Join us in this
              noble cause as we unite to rebuild Ar-Rasheed Mosque, renew its
              legacy, and create a brighter future for the Yaba community.
              Together, we can illuminate the path of faith, compassion, and
              unity, ensuring Ar-Rasheed Mosque remains a beacon of hope and
              enlightenment for all.
            </p>
          </article>
          <img src={masgeed1} alt="" />
        </div>
        <div className="flex flex-col px-4">
          <article className="flex flex-col  justify-center mx-auto py-8 ">
            <h1 className="text-lg md:text-[2rem] leading-[3.4375rem] font-semibold  text-textBlack">
              Current State of the Masjid{" "}
            </h1>
            <p className=" max-w-6xl">
              Currently, Ar-Rasheed Mosque in Yaba, Lagos, bears the marks of
              its long-standing service to the community. While it continues to
              stand as a symbol of faith and unity, the passage of time has
              taken its toll on the mosque's structure, leaving behind visible
              signs of wear and tear. The masjid's exterior facade showcases
              cracks and weathered areas, reflecting the need for urgent
              repairs. The roofing, once pristine, now exhibits signs of
              deterioration, with leaks becoming a common concern during rainy
              seasons. Inside, the flooring shows signs of wear from countless
              prayers, necessitating restoration to ensure a safe and
              comfortable space for worshippers. Additionally, some sections of
              the mosque remain incomplete, restricting its full potential as a
              spiritual and community center. The lack of proper finishing in
              certain areas has hampered the mosque's ability to offer the
              comprehensive services and facilities the community deserves. Our
              restoration plan addresses these pressing needs with a detailed
              approach.
            </p>
          </article>
          <div className="carousel carousel-end rounded-box">
            <div className="carousel-item h-[400px]">
              <img src={frame1} alt="Drink" />
            </div>
            <div className="carousel-item h-[400px]">
              <img src={frame2} alt="Drink" />
            </div>
            <div className="carousel-item h-[400px]">
              <img src={frame3} alt="Drink" />
            </div>
            <div className="carousel-item h-[400px]">
              <img src={mosque} alt="Drink" />
            </div>
            <div className="carousel-item h-[400px]">
              <img src={frame4} alt="Drink" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  justify-between  mx-auto py-8 px-4">
            <article>
              {" "}
              <h1 className="text-lg md:text-[2rem] leading-[3.4375rem] font-semibold  text-textBlack">
                Transparency and Trust{" "}
              </h1>
              <p className=" max-w-2xl">
                At Ibni Masjidan Lillah, we firmly believe that transparency is
                the cornerstone of building trust with our valued donors. We
                want to assure you that your contributions towards the
                restoration of Ar-Rasheed Mosque are handled with utmost care,
                accountability, and integrity.plan addresses these pressing
                needs with a detailed approach.
              </p>
            </article>
            <article>
              {" "}
              <h1 className="text-lg md:text-[2rem] leading-[3.4375rem] font-semibold  text-textBlack">
                Verification Process{" "}
              </h1>
              <p className=" max-w-2xl">
                Restoring a mosque is not just a responsibility; it's a sacred
                duty. Our team works tirelessly to ensure the legitimacy and
                authenticity of the restoration project. We collaborate closely
                with local authorities, esteemed scholars, and renowned experts
                in Islamic architecture to verify every aspect of the
                restoration plan.
              </p>
            </article>
          </div>
          <article className="flex flex-col  justify-center mx-auto py-8 ">
            <h2 className="text-lg md:text-[2rem] leading-[3.4375rem] font-semibold  text-textBlack">
            Similar Masajid            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-4">
              {mosques.map((data, index) => (
                <MosqueBar key={index} data={data} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </Transitions>
  );
};

export default MosqueDetails;
