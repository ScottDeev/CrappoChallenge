
import { motion } from 'framer-motion'
import { staggerContainer, staggerTextContainer, fadeInUp, zoomOut } from '../../animation/MotionVariants'
import { WhyContent } from './WhyContent'

export default function Why() {
  return (
    <motion.section className='text-white py-[100px] my-[50px] lg:px-[80px] 
    px-[30px]'
      variants={staggerContainer}
      initial={"initial"}
      viewport={{once:true, amount:0.9}}
      whileInView={"animate"}
    >
      <motion.div className='flex flex-col lg:flex-row pb-[50px] gap-[20px] justify-between'
        variants={staggerTextContainer}
        initial={"initial"}
        viewport={{once:true, amount:0.9}}
        whileInView={"animate"}
        >
        {WhyContent.statistic.map((stat) => (
          <motion.div key={stat.number} className='flex flex-row items-center gap-[24px]'
            variants={fadeInUp}
          >
            <div className='bg-white bg-opacity-10 h-[80px] w-[80px] rounded-[50%] flex items-center justify-center'>
              <img src={stat.icon} alt="bar" />
            </div>
            <div className='flex flex-col gap-[6px]'>
              <h2 className='lg:text-[40px] text-[30px] font-semibold'>{stat.number}</h2>
              <p className='md:text-[16px] text-[14px]'>{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className='flex flex-col-reverse lg:flex-row justify-between text-white items-center lg:gap-[100px]'
        variants={staggerContainer}
        initial={"initial"}
        viewport={{once:true, amount:0.9}}
        whileInView={"animate"}
      >
        <div className='lg:w-[50%]'>
          <motion.img className='w-full' src={WhyContent.Illustration} alt="illustration" variants={zoomOut}/>
        </div>
        <motion.div className='lg:w-[50%]' variants={fadeInUp}>
          <h2 className='lg:text-[40px] text-[30px] font-semibold'>{WhyContent.text.h2}</h2>
          <p className='text-[#E0E0E0] max-w-[400px] md:text-[16px] text-[14px]'>{WhyContent.text.p}</p>
          <motion.button className='flex items-center bg-[#3671E9]  py-[16px] px-[24px] rounded-[32px] mt-[32px]'
          variants={fadeInUp}
          whileHover={{scale:1.1}}
          >
          {WhyContent.text.button}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}