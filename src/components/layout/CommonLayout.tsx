
import {ReactNode} from 'react';
import Navbar from './Navbar'
import Footer from '../shared/Footer';

const CommonLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default CommonLayout