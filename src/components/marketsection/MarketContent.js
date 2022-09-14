import BTC from '../../assests/icons/BTC.png'
import ETH from '../../assests/icons/ETH.png'
import LTC from '../../assests/icons/LTC.png'
import arrow from '../../assests/icons/Vector.png'
import { fadeInRight, fadeInLeft, fadeInUp } from '../../animation/MotionVariants'

export const MarketContent = {
  header: 'Trade securely and market the high growth cryptocurrencies.',
  cards: [
    {
      icon: BTC,
      label: 'Bitcoin',
      tag: 'BTC',
      description: 'Digital currency in which a record of transactions is maintained.',
      variant: fadeInRight
    },
    {
      icon: ETH,
      label: 'Ethereum',
      tag: 'ETH',
      description: 'Blockchain technology to create and run decentralized digital applications.',
      variant: fadeInUp
    },
    {
      icon: LTC,
      label: 'Litecoin',
      tag: 'LTC',
      description: 'Cryptocurrency that enables instant payments to anyone in the world.',
      variant: fadeInLeft
    }
  ],
  cardBtn:{
    label: 'Start mining',
    icon: arrow 
  }
}