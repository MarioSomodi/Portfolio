import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logoPrimary, menu, close } from '../assets';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const mobileMenuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.7,
        duration: 0.7,
        ease: [0.22, 1, 0.39, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-4'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoPrimary}
            alt='logo'
            className='w-18 h-16 object-contain'
          />
          <p className='text-white flex text-[22px] font-bold cursor-pointer gap-2'>
            Mario<span className='sm:block hidden'>Šomođi</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? 'text-black bg-white rounded-md'
                  : 'text-white'
              } hover:text-black hover:bg-white hover:rounded-md text-[18px] font-bold cursor-pointer p-2 uppercase`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(true)}
          />
        </div>
        <AnimatePresence>
          {toggle && (
            <motion.div
              variants={mobileMenuVars}
              initial='initial'
              animate='animate'
              exit='exit'
              className={`${toggle ? 'fixed' : 'hidden'} 
            left-0 top-0 w-full py-5 px-6 h-screen black-gradient origin-top`}
            >
              <div className='flex h-full flex-col'>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-4 items-center'>
                    <img
                      src={logoPrimary}
                      alt='logo'
                      className='w-18 h-16 object-contain'
                    />
                    <p className='text-white flex text-[22px] font-bold cursor-pointer'>
                      Mario
                    </p>
                  </div>
                  <img
                    src={close}
                    alt='close'
                    className='w-[28px] h-[28px] object-contain cursor-pointer'
                    onClick={() => setToggle(false)}
                  />
                </div>
                <motion.div
                  variants={containerVars}
                  initial='initial'
                  animate='open'
                  exit='initial'
                  className='flex flex-col h-full justify-center items-center gap-4'
                >
                  {navLinks.map((link) => {
                    return (
                      <div key={link.id} className='overflow-hidden'>
                        <motion.div
                          variants={mobileLinkVars}
                          className='text-5xl uppercase'
                        >
                          <div
                            className={`${
                              active === link.title
                                ? 'text-black bg-white rounded-md'
                                : 'text-white'
                            } hover:text-black hover:bg-white hover:rounded-md font-bold cursor-pointer p-2`}
                            onClick={() => {
                              setToggle(false);
                              setActive(link.title);
                            }}
                          >
                            <a href={`#${link.id}`}>{link.title}</a>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
export default Navbar;
