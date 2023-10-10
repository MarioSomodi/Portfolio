import { motion } from 'framer-motion';
import { styles } from '../styles';
import { CoffeeBreakCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] h-fit max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5 2xl:ml-0 ml-16 '>
          <div className='w-5 h-5 rounded-full bg-secondary' />
          <div className='w-1 h-60 red-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m{' '}
            <span className='text-secondary bg-white bg-opacity-50 rounded-2xl p-2'>
              Mario
            </span>
          </h1>
          <p className={`${styles.heroText} mt-4 text-white-100`}>
            Specializing in building clean, scalable, and{' '}
            <br className='sm:block hidden' />
            resilient solutions, with a flair for UI design
          </p>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I turn coffee into code {':)'}
          </p>
        </div>
      </div>
      <CoffeeBreakCanvas />
    </section>
  );
};

export default Hero;
