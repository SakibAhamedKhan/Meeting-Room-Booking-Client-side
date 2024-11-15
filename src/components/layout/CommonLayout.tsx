
import {ReactNode} from 'react';
import Navbar from './Navbar'

const CommonLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default CommonLayout