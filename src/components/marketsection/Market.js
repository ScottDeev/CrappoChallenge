import { useState } from "react"
import { MarketContent } from "./MarketContent"
import { motion } from 'framer-motion'
import { zoomOut } from '../../animation/MotionVariants'

export default function Market() {
  const [cardB, setCardB] = useState('BTC')

  return (
    <motion.section className="lg:pt-[20%] sm:pt-[270px] pt-[300px] bg-white lg:px-[80px] px-[30px] pb-[50px] overflow-hidden"
    >
      <motion.h2 
      variants={zoomOut}
      initial={"initial"}
      viewport={{once:true, amount:0.9}}
      whileInView={"animate"}
        className="text-center md:text-[40px] text-[25px] font-semibold pb-[60px]">{MarketContent.header}</motion.h2>
      <motion.div className="flex w-[80%] mx-auto lg:w-full lg:flex-row flex-col justify-between gap-[45px]"
        initial={"initial"}
        whileInView={"animate"}
      >
        {MarketContent.cards.map((card) => (
          <motion.div 
          variants={card.variant}
            className={
              `${cardB == card.tag ? 'bg-[#2B076E]': 'bg-[#FFFFFF]'}
              ${cardB == card.tag ? 'text-[#FFFFFF]': 'text-[#0D0D2B'}
               flex flex-col shadow-md items-center text-center py-[48px] px-[24px]  rounded-2xl cursor-pointer`} 
            key={card.tag} 
            onClick={() => setCardB(card.tag)}>
            <img className="h-[50px] w-[50px] mb-[48px]" src={card.icon} alt="icon"/>
            <div className=" flex gap-[10px] mb-[16px]">
              <h3 className="md:text-[28px] text-[20px] font-semibold">{card.label} </h3>
              <span className="opacity-70 md:text-[16px] text-[14px]">{card.tag}</span>
            </div>
            <p className="mb-[25px] md:text-[16px] text-[14px]">{card.description}</p>
            {!(cardB == card.tag) && 
            <motion.button className="flex justify-center items-center h-[64px] w-[64px] border rounded-[50%]"
            whileHover={{scale:1.1}}
            >
              <img className="h-[15px] w-[10px]" src={MarketContent.cardBtn.icon} alt="arrow"/>
            </motion.button>
            }
            {cardB == card.tag && 
            <motion.button className="flex items-center bg-[#3671E9] text-white  p-[16px] rounded-[32px] "
            whileHover={{scale:1.1}}
            >
              {MarketContent.cardBtn.label}
              <span className="flex items-center justify-center rounded-[50%] h-[25px] w-[25px] bg-white ml-[10px] md:text-[16px] text-[14px]">
                <img src={MarketContent.cardBtn.icon} alt="arrow"/>
              </span>
            </motion.button>}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}