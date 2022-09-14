import { FooterContent } from "./FooterContent"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#0D0D2B] lg:px-[80px] px-[30px] py-[80px] text-white md:text-left text-center">
      <div className="flex flex-row flex-wrap items-start">
        <div className="lg:w-[25%] md:w-[50%] w-[100%]">
          <div className='flex items-center '>
            <img className='h-[50px] w-[50px]' src={FooterContent.logo.icon} alt="" />
            <h1 className='font-inter font-semibold text-xl'>{FooterContent.logo.label}</h1>
          </div>
        </div>
        <div className="lg:w-[25%] md:w-[50%] w-[100%] mt-[40px] md:mt-0">
          <h5 className="pb-[30px] font-medium text-[20px]">{FooterContent.QuickLink.header}</h5>
          <div className="flex flex-col gap-[10px]">
            {FooterContent.QuickLink.link.map((link, index) => (
              <li key={index} className="list-none">
                <a className='hover:border-b hover:border-blue-500' href="#">{link}</a>
              </li>
            ))}
          </div>
        </div>
        <div className="lg:w-[25%] md:w-[50%] w-[100%] mt-[40px] md:mt-0">
          <h5 className="pb-[30px] font-medium text-[20px]">{FooterContent.Resources.header}</h5>
            <div className="flex flex-col gap-[10px]">
              {FooterContent.Resources.link.map((link, index) => (
                <li key={index} className="list-none">
                  <a className='hover:border-b hover:border-blue-500' href="#">{link}</a>
                </li>
              ))}
            </div>
        </div>
        <div className="lg:w-[25%] md:w-[50%] w-[100%] mt-[40px] lg:mt-0">
        <h5 className="pb-[30px] font-medium text-[32px]">{FooterContent.Payments.header}</h5>
          <div className="flex flex-row gap-[10px] justify-center">
            {FooterContent.Payments.method.map((link, index) => (
              <motion.div key={index}
              whileHover={{scale:1.1}}
              >
                <img src={link} alt="card" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-[120px]">
        <div>
          <p>{FooterContent.Copyright}</p>
        </div>
        <div className="flex flex-row gap-[10px] md:mb-0 mb-[20px] justify-center">
          {FooterContent.Social.map((link, index) => (
            <motion.div key={index}
            whileHover={{scale:1.1}}
            >
              <img src={link} alt="card" />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  )
}