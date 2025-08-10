import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const HistoricalTimeline = () => {
  const sliceText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="my-25">
      <h1 className="sm:text-5xl text-3xl font-bold text-center my-10">
        Historical Timeline
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:w-full w-11/12 mx-auto gap-5 items-center">
        {/* Mesopotamian Civilization */}
        <motion.div
          className="card bg-base-100 image-full w-full mx-auto shadow-sm"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          <figure className="h-70">
            <img
              className=" w-full"
              src="https://i.ibb.co/PZzN2ShT/Mesopotamian-Civilization.png"
              alt="Mesopotamian Civilization"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mesopotamian Civilization</h2>
            <p>
              {sliceText(
                "The Mesopotamian civilization is one of the oldest known civilizations in the world. It emerged around 3500 BCE in the region between the Tigris and Euphrates rivers, an area that is mostly present-day Iraq.",
                20
              )}
            </p>

            <div className="card-actions justify-end">
              <a
                className="btn btn-outline btn-success transition duration-700 hover:text-white"
                href="https://en.wikipedia.org/wiki/Mesopotamia"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>

        {/* Ancient Egyptian Civilization */}
        <motion.div
          className="card bg-base-100 image-full w-full shadow-sm"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          <figure className="h-70">
            <img
              className="w-full"
              src="https://i.ibb.co/tpgFppR4/freepik-upload-54010-1.png"
              alt="Ancient Egyptian Civilization"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ancient Egyptian Civilization</h2>
            <p>
              {sliceText(
                "The Ancient Egyptian civilization flourished along the Nile River in northeastern Africa for over 3,000 years, starting around 3100 BCE. It is known for its remarkable achievements in architecture, art, religion, and governance.",20
              )}
            </p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-outline btn-success transition duration-700 hover:text-white"
                href="https://en.wikipedia.org/wiki/Ancient_Egypt"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>

        {/* Indus Valley Civilization */}
        <motion.div
          className="card bg-base-100 image-full w-full shadow-sm"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          <figure className="h-70">
            <img
              className="w-full"
              src="https://i.ibb.co/hxtWr9c9/12856.jpg"
              alt="Ancient Egyptian Civilization"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Indus Valley Civilization</h2>
            <p>
              {sliceText(
                "The Indus Valley Civilization (IVC) was one of the world’s earliest urban civilizations, flourishing around 2500 BCE to 1900 BCE in the northwestern regions of South Asia — mainly present-day Pakistan and northwest India.",20
              )}
            </p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-outline btn-success transition duration-700 hover:text-white"
                href="https://en.wikipedia.org/wiki/Indus_Valley_Civilisation"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>

        {/* Ancient Chinese Civilization */}
        <motion.div
          className="card bg-base-100 image-full w-full shadow-sm"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          <figure className="h-70">
            <img
              className="w-full"
              src="https://i.ibb.co/fYHxG5b0/freepik-upload-8680-1.png"
              alt="Ancient Egyptian Civilization"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ancient Chinese Civilization</h2>
            <p>
              {sliceText(
                "The Ancient Chinese Civilization is one of the world’s oldest continuous civilizations, beginning along the Yellow River (Huang He) around 2100 BCE with the Xia Dynasty, followed by the Shang and Zhou dynasties.",20
              )}
            </p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-outline btn-success transition duration-700 hover:text-white"
                href="https://en.wikipedia.org/wiki/Indus_Valley_Civilisation"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>

        {/*  Babylonian Civilization */}
        <motion.div
          className="card bg-base-100 image-full w-full shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          <figure className="h-70">
            <img
              className="w-full"
              src="https://i.ibb.co/zVN9DzMw/11280-1.jpg"
              alt="Ancient Egyptian Civilization"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Babylonian Civilization</h2>
            <p>
              {sliceText(
                "The Babylonians inherited and expanded Mesopotamian culture. They are best known for the Code of Hammurabi, one of the earliest and most complete written legal codes, and the legendary Hanging Gardens of Babylon.",20
              )}
            </p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-outline btn-success transition duration-700 hover:text-white"
                href="https://en.wikipedia.org/wiki/Babylonia"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>

        {/* Maurya Empire */}
        <motion.div
          className="card bg-base-100 image-full w-full shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          <figure className="h-70">
            <img
              className="w-full"
              src="https://i.ibb.co/NgH647ZT/pexels-markus-winkler-1430818-12111355-1.jpg"
              alt="Ancient Egyptian Civilization"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Maurya Empire</h2>
            <p>
              {sliceText(
                "Founded by Chandragupta Maurya, this empire unified much of India for the first time. Under Ashoka the Great, it embraced Buddhism and promoted non-violence, education, and infrastructure across the region.",20
              )}
            </p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-outline btn-success transition duration-700 hover:text-white"
                href="https://en.wikipedia.org/wiki/Maurya_Empire"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>

        {/* Ancient Greek Civilization */}
        <motion.div
          className="card bg-base-100 image-full w-full shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          <figure className="h-70">
            <img
              className="w-full"
              src="https://i.ibb.co/qZvhCdH/pexels-spencer-4388164.jpg"
              alt="Ancient Egyptian Civilization"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ancient Greek Civilization</h2>
            <p>
              {sliceText(
                "Ancient Greece laid the foundations for democracy, philosophy, science, and art. Cities like Athens and Sparta shaped Western civilization through achievements in governance, architecture, and warfare.",20
              )}
            </p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-outline btn-success transition duration-700 hover:text-white"
                href="https://en.wikipedia.org/wiki/Ancient_Greece"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>

        {/* Ancient Japanese Civilization */}
        <motion.div
          className="card bg-[#00bf8308] image-full w-full "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          <figure className="h-70">
            <img
              className="w-full"
              src="https://i.ibb.co/8nvHjs30/120718-57-History-Japan-Japanese.png"
              alt="Ancient Egyptian Civilization"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ancient Japanese Civilization</h2>
            <p>
              {sliceText(
                "The Ancient Japanese civilization began with the Yayoi period, introducing rice farming, metal tools, and social stratification. It evolved into the Kofun period, marked by large burial mounds and the rise of powerful clans, laying the groundwork for Japan’s imperial lineage.",20
              )}
            </p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-outline btn-success transition duration-700 hover:text-white"
                href="https://en.wikipedia.org/wiki/History_of_Japan"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HistoricalTimeline;
