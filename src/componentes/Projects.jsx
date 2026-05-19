

import { useState } from 'react'
import skyna from '../assets/portfolio/skyna.png'
import syntax from '../assets/portfolio/syntax.png'
import grecom from '../assets/portfolio/grecom.png'


const projects = [
    {
        name: 'Skyna Hotel',
        description: 'Hotel Skyna é o refúgio perfeito para quem busca conforto, estilo e experiências inesquecíves, localizado em luanda.',
        image: skyna,
        href: '#'
    },
    {
        name: 'Grecom',
        description: 'Grecom é uma empresa 100% Angolana, especializada na prestação de serviços de empregadas domésticas e cuidadoras.',
        image: grecom,
        href: 'https://mygrecom.com/'
    },
    {
        name: 'SyntaxCore',
        description: 'SyntaxCore é uma empresa de engenharia informática focada em criar estrutura necessária para que seu negócio cresça.',
        image: syntax,
        href: 'https://syntax-core.vercel.app/'
    }
]
import { motion } from 'framer-motion'

export default function Projects(){
    const [mouse, setMouse] = useState(false)
    return(
        <section id='projects' className="bg-black/85 md:h-screen">
            <div className="md:max-w-6xl md:space-y-6 space-y-3 py-12 md:py-0 p-4 md:p-0 mx-auto h-full flex flex-col items-center justify-center">
                <motion.div
                    initial={{opacity:0, y:-70}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.9}}
                    className="text-center space-y-2">
                    <span className="text-sm text-slate-400">My Portfolio</span>
                    <h2 className="text-red-600 text-2xl font-bold">Check My Wonderful Work</h2>
                    <p className='text-slate-200 md:text-lg'>A collection of projects I've worked on, ranging from web applications 
                        <br /> to websites and everything in between.</p>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.9}}
                    className='grid lg:grid-cols-3 md:gap-3 gap-6 w-full'>
                    {
                        projects?.map(project => (
                            <div className='bg-zinc-950 hover:shadow-md shadow-zinc-950 hover:scale-y-105 delay-150 duration-300
                             relative md:h-82 w-full rounded-xl p-2 cursor-pointer'>
                                <img 
                                    src={project?.image}
                                    className='w-full h-34 rounded-t-xl object-top object-cover'
                                     alt="" />
                                <div className='p-2 space-y-2'>
                                    <h3 className='text-white font-medium md:text-xl text-lg'>{project.name}</h3>
                                    <p className='text-slate-300 '>{project.description}</p>
                                </div>
                                <div className='p-2'>
                                    <button className='delay-150 duration transition hover:scale-x-105 '>
                                        <a href={project.href} className='md:px-6 px-4 md:py-3 py-2 bg-red-700 rounded-full text-slate-200'>View</a>
                                    </button>
                                </div>
                               
                            </div>
                        ))
                    }
                </motion.div>

                <div className='bg-zinc-950 md:w-1/2 w-full flex items-center justify-between px-3 py-3 rounded-full'>
                    <h4 className='text-slate-200 '>Hire me for your Project</h4>
                    <button className='delay-150 transition duration-300 hover:scale-105'>
                        <a className='bg-white rounded-full p-2 md:px-4'  href="#">Hire Me</a>
                    </button>
                </div>
            </div>
        </section>
    )
}