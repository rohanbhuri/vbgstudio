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
        heading: 'Games to Connect',
        subheading: 'Uniting gamers through immersive adventures. Join us for unforgettable experiences!',
        hiddenpara: 'Connecting people through gaming - we create immersive experiences that bring gamers together, fostering connections and shared adventures.',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Games to Engage',
        subheading: 'Crafting Captivating Experiences! Join us for thrilling adventures and endless fun.',
        hiddenpara: 'Crafting Engaging Experiences! Our passion is creating games that captivate and immerse players in thrilling adventures.',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Games to Succeed',
        subheading: 'Elevating gamers to triumph. Unleash your potential with our captivating games.',
        hiddenpara: ' Empowering gamers to succeed through captivating games. Join our gaming studio for an immersive experience like no other. ',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Welcome To VBG Game Studios</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Bringing People Together Through The Power Of Play <br />As Indian Game Studio, we continue to open doors to new worlds every day and we are working excitedly for creating new games and unique experiences!</p>
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
