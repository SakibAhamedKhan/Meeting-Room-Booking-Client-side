
import { ReactNode } from 'react';
import Footer from '../shared/Footer';
import Navbar from './Navbar';

const CommonLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <div className='pb-[64px]'><Navbar/></div>
        {children}
        <Footer/>
    </div>
  )
}

export default CommonLayout