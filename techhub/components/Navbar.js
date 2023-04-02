import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useMediaQuery } from '@mui/material'
import { motion, AnimatePresence } from "framer-motion";
import { MenuRounded } from "@mui/icons-material";
import { CloseRounded } from "@mui/icons-material";


const Navbar = () => {
  const router = useRouter()

  const variants = {
    visible: { x: "0%" },
    hidden: { x: "-100%" },
    exit: { x: "-100%" },
    exitActive: { x: 0 },
  };

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1034px)");

  return (
    
    <nav className='fixed top-0 w-screen bg-neoyellow z-[45] ' style={{paddingTop: "20px", paddingBottom: "20px", placeItems: "center", zIndex: "45"}} >
      {isDesktop ?       <ul className='flex justify-center px-10 text-lg font-Oswald font-bold text-white ' style={{gap:"100px"}}>
        
        <li className='flex justify-center items-center bg-neoblue px-4 py-2 rounded-full border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black hover:scale-105 transition duration-300'>
          <Link href="/#stockmarketprices">
       
              Stock Market Prices
         
          </Link>
        </li>
        <Image
                  src="/images/landinglogo.png"
                  alt=""
                  width={100}
                  height={100}
                />
        <li  className='flex justify-center items-center bg-neoblue px-4 py-2 rounded-full border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black hover:scale-105 transition duration-300'>
          <Link href="/#stockmarketnews">
            
              Stock Market News
            
          </Link>
        </li>
      </ul> :
      
      (
        <button
          className="rounded-full  mt-2"
          style={{marginLeft: "10px"}}
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          {" "}
          <MenuRounded />{" "}
        </button>
      )}
      <AnimatePresence>
        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 0.2 }}
            exit="exit"
            className="fixed left-0 top-0 bg-neoyellow p-2 w-[300px] transition-300 shadow-md"
            style={{ height: "100vh" }}
          >
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <CloseRounded />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div
              className="flex flex-col gap-10 ml-5 text-2xl justify-center items-center  font-Bebas text-primary font-semibold  "
              onClick={() => setIsMenuToggled(false)}
            >
              <Image
                  src="/images/landinglogo.png"
                  alt=""
                  width={100}
                  height={100}
                  className='mb-10'
                />
                  <li className='flex flex-col mb-10 justify-center items-center bg-neoblue px-4 py-2 rounded-full border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black hover:scale-105 transition duration-300'>
          <Link href="/#stockmarketprices">
       
              Stock Market Prices
         
          </Link>
        </li>
        
        <li  className='flex justify-center items-center bg-neoblue px-4 py-2 rounded-full border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black hover:scale-105 transition duration-300'>
          <Link href="/#stockmarketnews">
            
              Stock Market News
            
          </Link>
        </li>
            </div>
          </motion.div>
        )}
      </AnimatePresence> 

    </nav>
  )
}



export default Navbar