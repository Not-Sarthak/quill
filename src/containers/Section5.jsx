import { motion } from 'framer-motion';
import { TypingText } from '../components/Text/TypingText';
import { fadeIn, staggerContainer } from '../utils/motion.js';
import "../App.css";

const styles = {
  innerWidth: '2xl:max-w-[1280px] w-full',
  interWidth: 'lg:w-[80%] w-[100%]',

  paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  yPaddings: 'sm:py-16 xs:py-8 py-12',
  xPaddings: 'sm:px-16 px-6',
  topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[98px]',

  
  // hero section
  heroHeading:
      'font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white',
  heroDText:
      'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
}

const Section5 = () => (
  <div className = "section5">
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText className="linear-wipe" title="Quill" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Quill </span> 
        Welcome to our revolutionary blogging platform, where creativity and empowerment collide in a seamless digital universe. We are proud to present a 100% on-chain and completely decentralized web3 experience, built on the powerful Flow blockchain. With walletless onboarding, you can effortlessly dive into a world of boundless possibilities, leaving behind the complexities of traditional setups. Our platform introduces the concept of NFT memberships, unlocking exclusive perks and connections within our vibrant community. And with our stunningly beautiful UI/UX, navigating through captivating content becomes a visual delight. Join us today and witness the future of blogging, where every word is a masterpiece and every creator reigns supreme. Furthermore, our innovative platform allows you to not only write captivating blog posts but also create and mint your own NFTs. Seamlessly merge your artistic expressions with the blockchain, turning your words into unique digital assets. Be part of a thriving ecosystem where creativity is not only appreciated but also rewarded.{' '}
        <span className="font-extrabold text-white">
          It also allows the bloggers to convert their written art to writing nfts with
          only a single click.
        </span>{' '}
        {' '}
        <span className="font-extrabold text-white">It is the future of blogging.</span>
        <span className="font-extrabold text-white"></span>
      </motion.p>
      <div className="Arrow">
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="src/assets/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
      </div>
    </motion.div>
  </section>
  </div>
);

export default Section5;
