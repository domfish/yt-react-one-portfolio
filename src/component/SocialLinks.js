
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {AiFillMail} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs'


const SocialLinks = ()=>{
    const links =[
        {
            id:1,
            child :(
                <>LinkedIn <FaLinkedin size={35}/></>
            ),
            href :'https://www.linkedin.com/in/chiheb-mejri-273b64217/',
            style :'rounded-tr-md'
        },
        {
            id:2,
            child :(
                <>Github <FaGithub size={35}/></>
            ),
            href :'https://github.com/domfish',
            style :'rounded-tr-md'
        },
        {
            id:3,
            child :(
                <>Mail <AiFillMail size={35}/></>
            ),
            href :'mailto:chihebmjrr@gmail.com',
        },
        {
            id:4,
            child :(
                <>Resume <BsFillPersonFill size={35}/></>
            ),
            href :'resume.pdf',
            style :'rounded-br-md',
            download :true,
        },
    ]
    return(
        <div className='hidden 2xl:flex felx-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id ,href , download , style, child})=>(

                <li key={id} className={`flex justify-between items-center w-30 h-14 px-4 bg-gray-800 ml:-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'
                +" " +${style}`}>
                    <a 
                    href={href} 
                    className='flex justify-between items-center w-full text-white' 
                    download={download}
                    target='_blank'
                    rel ="noreferrer"
                    >
                            <>{child} </> </a>
                </li>
                ))}
            </ul>

        </div>
    )



}


export default SocialLinks;