import amazon from '../../assets/TrustedIcons/amazon.png';
import google from '../../assets/TrustedIcons/goolge1.png';
import facebook from '../../assets/TrustedIcons/facebook.png';
import netfilx from '../../assets/TrustedIcons/netfilx.png';
const TrustedCompany = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto max-w-7xl p-4 md:p-6 lg:p-10 my-8 md:my-24'>
        <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-[#002F76] md:mb-[5px] lg:mb-[-10px]'>Trusted by</h1>
        <div className='mb-[-10px] md:mb-[-25px] grid grid-cols-4 justify-items-center w-full gap-4'>
            <div><img className='w-16 md:w-24 lg:w-40' src={`${google}`} /></div>
            <div><img className='w-16 md:w-24 lg:w-40' src={`${facebook}`} /></div>
            <div><img className='w-16 md:w-24 lg:w-40' src={`${amazon}`} /></div>
            <div><img className='w-16 md:w-24 lg:w-40' src={`${netfilx}`} /></div>
        </div>
    </div>
  )
}

export default TrustedCompany