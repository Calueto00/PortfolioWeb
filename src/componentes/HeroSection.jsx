export default function HeroSection() {

    return (
        <section className="lg:h-147 bg-black/95">
            <div className="lg:max-w-5xl mx-auto h-full flex flex-col items-center justify-center space-y-6">
                <span className="text-slate-300 bg-red-800 rounded-full p-1 px-3">Available for news projects</span>
                <h1 className="text-white text-6xl">Hey! , I am <span className="text-red-600 font-bold">Paulo</span></h1>
                <h3 className="text-slate-300 text-3xl">Full-Stack-Developer</h3>
                <p className="text-xl text-slate-200">
                    I craft beautiful, functional digital experiences that bring ideas to life. <br />
                    Specializing in modern web development and user-centered design.
                </p>
                <div className="text-lg space-x-7">
                    <button className="cursor-pointer hover:scale-110 duration-200 delay-150 transition ease-in-out">
                        <a href="#projects" className=" px-4 py-2 bg-red-700 rounded-full text-slate-200">View my work</a>
                    </button>
                    <button className="cursor-pointer hover:scale-110 duration-200 delay-150 transition ease-in-out">
                        <a href="#" className=" px-4 py-2 border-2 border-red-600 rounded-full text-slate-200">Get in Touch</a>
                    </button>
                </div>
            </div>
        </section>
    )
}