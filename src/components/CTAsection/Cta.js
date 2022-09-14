import { CtaContent } from "./CtaContent"
import { motion } from "framer-motion"
import { zoomOut } from "../../animation/MotionVariants"
export default function Cta() {
  return (
    <section className="from-[#2B076E] w-[100%] mx-auto text-white py-[80px] lg:px-[80px] px-[30px]">
      <motion.div className="flex flex-col lg:flex-row justify-between lg:items-center md:p-[48px] p-[28px] rounded-2xl bg-[#3671E9]"
        variants={zoomOut}
        initial= 'initial'
        viewport={{once:true, amount:0.7}}
        whileInView={'animate'}
      >
        <div className="">
          <h3 className="md:text-[32px] text-[25px] font-semibold">{CtaContent.header}</h3>
          <p className="max-w-[350px] opacity-80 md:text-[16px] text-[14px]">{CtaContent.content}</p>
        </div>
        <form className="lg:w-[60%] w-[100%]">
          <label>
            <input className="xl:w-[60%] lg:w-[50%] md:w-[70%] w-[100%] bg-transparent border-b pb-[7px] mr-[40px] lg:mb-0 mb-[40px] lg:mt-0 mt-[20px]" type="email" placeholder="Enter your Email" />
          </label>
          <motion.button className="py-[14px] px-[32px] bg-white text-black rounded-[32px]"
          whileHover={{scale:1.1}}
          >
            {CtaContent.button}
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}