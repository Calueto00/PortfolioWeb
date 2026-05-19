import { motion } from "framer-motion"
export default function Contact(){
    return(
        <footer id="contact" className="md:h-screen bg-zinc-950">
            <div className="h-full space-y-6 md:max-w-6xl mx-auto py-12 md:py-0 md:p-0 p-4 flex flex-col items-center justify-center">
                <motion.div 
                    initial={{opacity:0, y:-100}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:1}}
                    className="text-center space-y-3">
                    <span className="text-sm text-slate-400">Contact</span>
                    <h3 className="text-2xl font-bold text-red-600">Get in Touch With me</h3>
                    <p className="text-slate-300 md:text-lg">I'm always open to discussing new opportunities, creative projects, or partnerships. <br />
                        Whether you have a specific project in mind or just want to explore possibilities. I'd love to connect.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:1}}
                    className=" space-y-3 border-zinc-900 border w-full p-6 rounded-lg bg-zinc-800 shadow shadow-zinc-950">
                    <h3 className="text-lg text-slate-200 font-medium">Say Something</h3>
                    <div className="flex md:flex-row flex-col  justify-between gap-8">
                        <form action="https://formsubmit.co/paulo.calueto.francisco@gmail.com" className="flex-1 rounded-lg space-y-3">
                            <div className="space-y-3">
                                <input type="text" 
                                        placeholder="Name..."
                                        name="name"
                                        className="w-full text-white shadow-inner shadow-black/90 border border-black/90 rounded-lg p-2 outline-none" />
                                <input type="email" 
                                        placeholder="Email..."
                                        name="email"
                                        className="w-full shadow-inner text-white shadow-black/90 border border-black/90 rounded-lg p-2 outline-none" />
                                <textarea 
                                    name="message" 
                                    id="" 
                                    className="p-2 shadow-inner h-25 text-white outline-none shadow-black/90 border border-black/90 rounded-lg w-full"
                                    placeholder="Message">

                                </textarea>
                                
                            </div>
                            <div>
                                <button type="submit" 
                                className="bg-zinc-700 cursor-pointer hover:scale-105 delay-150 duration-300 transition-all hover:bg-zinc-950 text-slate-200 rounded-full p-2">Send Message</button>
                            </div>
                        </form>
                        <div className="rounded-lg flex-1">
                            <div className=" w-full p-2 border-b-1 space-y-1 border-gray-600">
                                <h4 className="text-slate-100">Location</h4>
                                <p className="text-slate-300">Camama, Luanda, Angola</p>
                            </div>
                            <div className="p-2 w-full border-b-1 space-y-1 border-gray-600">
                                <h4 className="text-slate-100">Phone Number</h4>
                                <p className="text-slate-300">+244 937163467</p>
                            </div>
                            <div className="p-2 w-full space-y-1 border-gray-600">
                                <h4 className="text-slate-100">Email Address</h4>
                                <p className="text-slate-300">paulo.calueto.francisco@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}