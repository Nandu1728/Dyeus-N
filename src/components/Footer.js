import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer pb-5'>

<div className='row ps-5 pe-5 pt-5 pb-3 '>
<div className='col-8 p-1'><h2>DYEUS</h2></div><div className='col-4'><FiFacebook />   <FiTwitter /></div>
<div className='col-12 p-1'>Our Products <IoIosArrowForward/></div>
<div className='col-12 p-1'>Our Science <IoIosArrowForward/></div>
<div className='col-12 p-1'>Vision & Mission <IoIosArrowForward/></div>
<div className='col-12 p-1'>About Us <IoIosArrowForward/></div>

</div><hr className='break' />
<br></br>
<p className='content text-center'>
    Designed by <AiFillHeart/><a href="https://instagram.com/nandini_6728?igshid=ymMyMTA2M2y=" className='set'>Gopasi_Nandini</a>
</p>

    </div>
  )
}

export default Footer