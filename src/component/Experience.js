import html from '../assetes/html.png'
import css from '../assetes/css.png'
import bootstrap from '../assetes/bootstrap.png'
import github from '../assetes/github.png'
import javascript from '../assetes/javascript.png'
import node from '../assetes/node.png'
import react from '../assetes/react.png'
import typeScript from '../assetes/typeScript.png'
import MongoDb from '../assetes/mongoDB.png'

const Experience = ()=>{
  const techno=[
    {
        id:1,
        title:'HTML',
        src:html,
        style:'shadow-orange-500'
    },
    {
        id:2,
        title:'CSS',
        src:css,
        style:'shadow-blue-500'
    },
    {
        id:3,
        title:'javaScript',
        src:javascript,
        style:'shadow-yellow-500'
    },
    {
        id:4,
        title:'github',
        src:github,
        style:'shadow-pink-500'
    },
    {
        id:5,
        title:'bootstrap',
        src:bootstrap,
        style:'shadow-purple-500'
    },
    {
        id:6,
        title:'node',
        src:node,
        style:'shadow-green-500'
    },
    {
        id:7,
        title:'react',
        src:react,
        style:'shadow-blue-500'
    },
    {
        id:7,
        title:'typeScript',
        src:typeScript,
        style:'shadow-blue-500'
    },
    {
        id:8,
        title:'MongoDb',
        src:MongoDb,
        style:'shadow-green-500'
    },
  ]
    return(
        <div name ="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-wite'>
                <div>
                    <h2 className='text-4xl font-bold border-b-4 border-gray-500 p-1 inline text-white'>
                        Experience 
                    </h2>
                    <p className='py-6 text-white text-2xl'>
                        These are the technologies i've worked with : 
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
{
    techno.map(({id,title,src,style}) =>(

        <div key={id} className={`shadow-md hover:scale-110 duration-500 py-5 rounded-lg ${style}`}>
                        <img className='w-20 mx-auto'  src={src} alt=""/>
                        <p className='text-white'>{title}</p>
                    </div>
    ))
}
    </div>

    

            </div>
        </div>
    )
}

export default Experience;