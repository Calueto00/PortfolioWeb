import { motion } from "framer-motion"

export default function HeroSection() {

    return (
        <section className="md:h-147 h-screen bg-black/95">
            <div className="lg:max-w-5xl mx-auto h-full flex flex-col items-center md:p-0 p-4 justify-center space-y-6 md:space-y-6">
                <motion.span 
                initial={{opacity:0, y: -50}}
                animate={{opacity:1 ,y:0}}
                transition={{duration:1}}
                className="text-slate-300 bg-red-800 rounded-full p-1 px-3 md:text-md text-sm">Available for news projects</motion.span>
                <motion.h1 
                    initial={{opacity:0, x: -100}}
                    animate={{opacity:1 ,x:0}}
                    transition={{duration:2}}
                    className="text-white md:text-6xl text-3xl">Hey! , I am <span className="text-red-600 font-bold">Paulo</span></motion.h1>
                <h3 className="text-slate-300 md:text-3xl text-lg">Full-Stack-Developer</h3>
                <motion.p 
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1}}
                    className="md:text-xl text-center text-slate-200 md:max-w-2xl">
                    I craft beautiful, functional digital experiences that bring ideas to life.
                    Specializing in modern web development and user-centered design.
                </motion.p>
                <motion.div initial={{opacity:0, y:99}} animate={{opacity:1, y:0}} transition={{duration:1}}
                    className="text-lg space-x-7 mt-2">
                    <button className="cursor-pointer hover:scale-110 duration-200 delay-150 transition ease-in-out">
                        <a href="#projects" className=" px-4 py-2 bg-red-700 rounded-full text-slate-200">View my work</a>
                    </button>
                    <button className="cursor-pointer hover:scale-110 duration-200 delay-150 transition ease-in-out">
                        <a href="#" className=" px-4 py-2 border-2 border-red-600 rounded-full text-slate-200">Get in Touch</a>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}