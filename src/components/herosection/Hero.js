
import { motion } from 'framer-motion'
import { staggerContainer, staggerTextContainer, fadeInUp, zoomOut } from '../../animation/MotionVariants'
import { HeroContent } from './HeroContent'
export default function Hero() {
  return (
    <motion.section className="text-white flex lg:flex-row flex-col lg:items-center lg:px-[80px] 
    px-[30px]"
      variants={staggerContainer}
      initial={"initial"}
      animate={"animate"}
    >
      <motion.div className="lg:w-1/2 lg:mt-[20px]"
        variants={staggerTextContainer}
        initial={"initial"}
        animate={"animate"}
      >
        <motion.p className="
            text-white
            bg-opacity-10
            bg-white
            lg:max-w-[400px]
            max-w-[350px]
            flex
            items-center
            p-[8px]
            rounded-[32px]
            lg:text-[14px]
            text-[12px]
          "
          variants={fadeInUp}

        >
          <span 
          className="
          lg:text-[16px]
          text-[12px]
          text-base
          text-[#0D0D2B]
          bg-white
          py-[4px]
          px-[8px]
          rounded-[32px]
          mr-[16px]
          "
          >
            {HeroContent.text.discountTag.span}
          </span>
          {HeroContent.text.discountTag.p}
        </motion.p>
        <motion.h1 className="xl:text-[56px] lg:text-[45px] md:text-[40px] text-[30px] font-semibold my-[24px]" 
          variants={fadeInUp}
        >
          {HeroContent.text.h1}
        </motion.h1>
        <motion.p className="lg:w-3/5 md:text-[16px] text-[14px]"
          variants={fadeInUp}
        >
          {HeroContent.text.p}
        </motion.p>
        <motion.button className='flex items-center bg-[#3671E9]  p-[16px] rounded-[32px] mt-[32px]'
          variants={fadeInUp}
          whileHover={{scale:1.1}}
        >
          {HeroContent.button.tag}
          <span className='flex items-center justify-center rounded-[50%] h-[25px] w-[25px] bg-white ml-[10px]'>
            <img src={HeroContent.button.icon} alt="arrow" />
          </span>
        </motion.button>
      </motion.div>
      <div className='lg:w-1/2 lg:min-w-[500px] lg:min-h-[600px]'>
        <motion.img className='w-full' src={HeroContent.illustration} alt="heroimage" 
          variants={zoomOut}
        />
      </div>
    </motion.section>
  )
}