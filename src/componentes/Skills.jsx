import { motion } from "framer-motion"
export default function Skills(){
    return(
        <section className="md:h-screen min-h-screen bg-zinc-950">
            <div className="lg:max-w-6xl mx-auto gap-3 py-12 md:py-0 p-4 md:p-0 h-full flex md:flex-row flex-col md:gap-15 items-center justify-between">
                <motion.div 
                    initial={{opacity:0, x: -50}} 
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.9}}
                    className="md:flex-1 space-y-2">
                    <span className="text-sm text-gray-600">My Top</span>
                    <h3 className="text-2xl font-bold text-red-600">Skills Tech.</h3>

                    <div className="space-y-3">
                        <p className="md:text-lg text-slate-300 ">I have experience in developing modern, responsive, and scalable web aplication
                            using technologies such as laravel, React, and Next.js. I work with REST API development, dynamic interfaces,
                            management systems, and real-time integrations, always focusing on performance, clean code organization, and user esperience
                            . 
                        </p>
                        <p className="md:text-lg text-slate-300 ">
                            I also have knowledge of databases, version control with Git, and frontend and backend best practices.
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{opacity:0, x: 50}} 
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.9}}
                    className="md:flex-1 grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="border bg-zinc-800 p-3 rounded-lg space-y-3 hover:scale-105 delay-150 duration-300 transition-all ease-in-out transform-y ">
                        <h3 className="md:text-xl text-lg font-medium text-slate-200">Frontend</h3>

                        <ul className="space-y-2 space-x-2 md:text-lg text-slate-300">
                            <button className="border rounded-full border-red-600 px-3">Html</button>
                            <button className="border rounded-full border-red-600 px-2">Css</button>
                            <button className="border rounded-full border-red-600 px-2">Tailwind</button>
                            <button className="border rounded-full border-red-600 px-2">React</button>
                            <button className="border rounded-full border-red-600 px-2">Vue</button>
                            <button className="border rounded-full border-red-600 px-2">Bootstrap</button>
                            <button className="border rounded-full border-red-600 px-2">JavaScript</button>
                            <button className="border rounded-full border-red-600 px-2">WordPress</button>
                        </ul>
                    </div>
                    <div className="border bg-zinc-800 p-3 rounded-lg space-y-3 hover:scale-105 delay-150 duration-300 transition-all ease-in-out transform-y">
                        <h3 className="md:text-xl text-lg font-medium text-slate-200">Backend</h3>

                        <ul className="space-y-2 space-x-2 text-slate-300">
                            <button className="border rounded-full border-red-600 px-3">Laravel</button>
                            <button className="border rounded-full border-red-600 px-2">Node.js</button>
                            <button className="border rounded-full border-red-600 px-2">Php</button>
                            <button className="border rounded-full border-red-600 px-2">SpringBoot</button>
                            <button className="border rounded-full border-red-600 px-2">Express.js</button>
                        </ul>
                    </div>
                    <div className="border bg-zinc-800 p-3 rounded-lg space-y-3 hover:scale-105 delay-150 duration-300 transition-all ease-in-out transform-y">
                        <h3 className="md:text-xl text-lg font-medium text-slate-200">Databases</h3>

                        <ul className="space-y-2 space-x-2 text-slate-300">
                            <button className="border rounded-full border-red-600 px-3">Mysql</button>
                            <button className="border rounded-full border-red-600 px-2">Sqlite</button>
                            <button className="border rounded-full border-red-600 px-2">MongDb</button>
                            <button className="border rounded-full border-red-600 px-2">Postgreed</button>
                        </ul>
                    </div>
                </motion.div>
            </div>

            
        </section>
    )
}