"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Create Account',
        subheading: ' The first step in owning crypto is to create an account with us/sign up using an email and password. Fill in your info / credentials.',
        hiddenpara: 'CryptoMac Forex trading',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Fund Your Account',
        subheading: 'Once you’ve signed up with a cryptomac, you’ll need to connect your bank account. We offer bank funding through debit cards and wire transfers.',
        hiddenpara: 'We also support bank deposit this is typically your cheapest option to fund your account, and it’s free on all our platforms. ',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Exchange & Start Trading',
        subheading: 'With your strategy set and account funded, you can start buying tokens. Search for the desired token on the site, click “Buy,” and enter the amount.',
        hiddenpara: 'Using our based chosen wallet is safer with Our guideline to better wallets offer control over your tradings, and provide provide enhanced security by storing private keys in a physical device.',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How it work</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Buying and selling cryptocurrencies via an CryptoMac forex exchange. <br />  There are several ways CryptoMac can make money for you.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
