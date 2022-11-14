import appWeather from '../assetes/app weather.jpg'
import booking from '../assetes/booking.jpg'

const Portfolio = ()=>{
    const work =[
        {
            id:1,
            src :
        },
        {
            id:2,
            src : appWeather
        },
        {
            id:3,
            src : booking
        },
       
    ]
    return(
        <div name ="Portfolio" className='w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full  '>
                <div className='pb-8'>
                    <p className='text-4xl border-gray-500 inline font-bold border-b-4'>Portfolio</p>
                    <p className='py-6'>Check Out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {work.map(({id,src})=>(

                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img  src={src}  alt="" className=' rounded-md duration-200 hover:scale-105 w-45 mx-auto'></img>
                        <div className='flex flex-row'>
                            <button className='basis-1/2 p-6 hover:scale-110'>Demo</button>
                            <button className='basis-1/2 p-6 hover:scale-110'>Code</button>
                        </div>
                    </div>
                    ))

                    }
                </div>
            </div>

        </div>
    )
}

export default Portfolio;