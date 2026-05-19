import { motion } from "framer-motion"

const services = [
    {
        title: 'Responsive Frontend',
        description: 'Building modern, responsive interfaces with React, Tailwind, HTML, and CSS so your brand looks great on every device.',
    },
    {
        title: 'Backend & API Development',
        description: 'Creating scalable backend systems and REST APIs with Laravel, Node.js, Express, and database integrations.',
    },
    {
        title: 'Full-stack Web Apps',
        description: 'Delivering complete full-stack solutions including dashboards, CMS, e-commerce, and custom business applications.',
    },
]

export default function Services() {
    return (
        <section id="services" className="md:h-screen bg-zinc-950">
            <div className="lg:max-w-6xl mx-auto h-full flex flex-col justify-center py-12 md:py-0 p-4 md:px-4">
                <motion.div 
                    initial={{opacity:0, y:-100}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:1}}
                    className="text-center space-y-2">
                    <span className="text-sm text-slate-400">What I do</span>
                    <h2 className="text-2xl font-bold text-red-600">My Services</h2>
                    <p className="text-slate-300 max-w-3xl mx-auto md:text-lg">
                        I deliver full-stack web solutions using Laravel, React, Next.js and modern tooling. From clean UI/UX interfaces to secure backend APIs, I help businesses launch reliable, high-performance digital products.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:1}}
                    className="grid md:gap-6 gap-4 md:grid-cols-3 md:mt-12 mt-8">
                    {services.map(service => (
                        <div
                            key={service.title}
                            className="border border-zinc-800 bg-zinc-800 md:p-6 p-4 rounded-3xl shadow-md shadow-black/30 hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white text-xl font-bold">
                                {service.title.charAt(0)}
                            </div>
                            <h3 className="md:text-xl text-lg font-semibold text-slate-100 mb-3">{service.title}</h3>
                            <p className="text-slate-300 leading-7">{service.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}