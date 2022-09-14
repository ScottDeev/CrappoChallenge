import { EarnContent } from "./EarnContent"
import { motion } from "framer-motion"
import { staggerContainer, fadeInUp, zoomOut } from '../../animation/MotionVariants'

export default function Earn() {
  return (
    <motion.section className="pt-[50px] md:pb-[220px] pb-[350px] relative lg:px-[80px] px-[30px]"
      variants={staggerContainer}
      initial={"initial"}
      viewport={{once:true, amount:0.7}}
      whileInView={"animate"}
    >
      <motion.div className="text-center text-white"
        variants={fadeInUp}
      >
        <h2 className="md:text-[36px] text-[28px] font-semibold">{EarnContent.h2}</h2>
        <p className="max-w-[500px] mx-[auto] text-[#E0E0E0] md:text-[16px] text-[14px]">{EarnContent.p}</p>
      </motion.div>
      <motion.div className=" w-[80%] bg-white shadow-xl  mx-auto rounded-2xl text-darkblue p-10 md:p-12 absolute left-[10%] bottom-[-50%]"
        variants={zoomOut}
      >
        <form className="flex flex-col md:flex-row md:justify-between md:items-center space-y-12 md:space-y-0 pb-[20px] md:gap-[30px]">
          <input className=" w-full md:max-w-[410px] border-b placeholder:text-[16px]" type="text" placeholder="Enter your hash rate"/>
          <select className="w-full md:max-w-[410px] border-b">
            {EarnContent.overlayCard.form.options.map((opt) => (
              <option key={opt.value} value="">{opt.value}</option>
            ))}
          </select>
          <motion.button className="flex items-center bg-[#3671E9] text-white p-[16px] rounded-[32px] mt-[32px] max-w-[110px]"
          whileHover={{scale:1.1}}
          >
            {EarnContent.overlayCard.form.buttion}
          </motion.button>
        </form>
        <div className="mt-10">
          <h4 className="text-[#3671E9] mb-4">{EarnContent.overlayCard.text.h4}</h4>
          <h5 className="md:text-[32px] text-[25px] font-bold mb-3">{EarnContent.overlayCard.text.h5} <span className="text-[#3671E9]">{EarnContent.overlayCard.text.span}</span>
          </h5>
          <p className="text-gray-500 md:text-[16px] text-[14px]">{EarnContent.overlayCard.text.p}</p>
        </div>
      </motion.div>
    </motion.section>
  )
}