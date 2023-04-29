import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import I1 from '../img/i1.png'
import { heroData } from '../utils/data'




const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home' >
            <div className='py-2 flex-1 flex flex-col items-start justify-center md:items-start gap-6 ' >
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full' >
                    <p className='text-base text-orange-500 font-semibold ' >Bike delivery</p>
                    <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl ' >
                        <img src={Delivery} alt="" className='w-full h-full object-contain' />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor md:w-[80%]' >The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]' >Your City</span></p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%] ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae laborum officiis magni natus? Iste optio cupiditate incidunt officia, ut eius doloremque odit praesentium labore libero animi sint est quis rerum.</p>

                <button type='button' className=' md:w-auto bg-gradient-to-br from-orange-400 to-orange-300 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100  ' >Order Now</button>

            </div>
            <div className='py-2 flex-1 items-center relative ' >
                <img src={HeroBg} alt="" className='lg:h-650 h-420 w-full lg:w-auto ml-auto ' />
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap' >
                    {heroData && heroData.map(n => (
                        <div key={n.id} className='  lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl items-center justify-center flex flex-col drop-shadow-lg ' >
                            <img src={n.imageSrc} alt="I1" className='w-20 lg:w-40 -mt-10 lg:-mt-20 ' />
                            <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4 ' > {n.name}  </p>
                            <p className=' text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3  '>{n.decp} </p>
                            <p className='text-sm font-semibold text-headingColor  ' >
                                <span className='text-xs text-red-600  ' >$</span> {n.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeContainer
