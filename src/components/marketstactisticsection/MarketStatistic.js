import { motion } from "framer-motion"
import { staggerContainer, fadeInUp, zoomOut } from '../../animation/MotionVariants'
import { MarketStatisticContent } from "./MarketStatisticContent"

export default function MarketStatistic() {
  return (
    <section className="text-white lg:px-[80px] px-[30px] pt-[100px]">
      <motion.h2 
      variants={zoomOut}
      initial={"initial"}
      viewport={{once:true, amount:0.9}}
      whileInView={"animate"}
        className="text-center md:text-[35px] text-[25px] font-semibold pb-[60px] max-w-[900px] mx-auto">{MarketStatisticContent.header}
      </motion.h2>
      <div className="flex flex-col gap-[120px] items-center">
        {MarketStatisticContent.section.map((section, index) => (
          <div className={`flex ${index == 1 ? 'lg:flex-row-reverse': 'lg:flex-row'} lg:gap-[100px] gap-[50px] flex-col justify-center items-center`} key={index}>
            <motion.div className="flex flex-col gap-[24px] lg:w-[50%]"
              variants={fadeInUp}
              initial={"initial"}
              viewport={{once:true, amount:0.9}}
              whileInView={"animate"}
            >
              <h3 className="md:text-[28px] text-[18px] font-semibold">{section.head}</h3>
              <p className="max-w-[400px] text-[#E0E0E0] md:text-[16px] text-[14px]">{section.description}</p>
              <motion.button className="flex items-center text-center bg-[#3671E9] text-white py-[16px] px-[24px] rounded-[32px] mt-[32px] max-w-[135px]"
              whileHover={{scale:1.1}}
              >
                {MarketStatisticContent.button}
              </motion.button>
              <button></button>
            </motion.div>
            <motion.div
              className="lg:w-[50%]"
              variants={zoomOut}
              initial={"initial"}
              viewport={{once:true, amount:0.9}}
              whileInView={"animate"}
            >
              <img className="lg:w-full" src={section.image} alt="illustration" />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}