import perfil from '../assets/perfil.png'
export default function AboutSection() {
    return (
        <section id="about" className="md:h-screen  bg-black/90">
            <div className="lg:max-w-6xl py-8 md:py-0 p-4 md:p-0 space-y-3 mx-auto h-full flex flex-col items-center justify-center">
                

                 <div className="flex items-center md:flex-row flex-col justify-center gap-3 md:gap-9 w-full">
                    <div className="md:flex-1 w-full ">
                        <img src={perfil} alt="" className='md:h-100 h-70 w-full object-fit rounded-lg' />
                    </div>


                    <div className=" flex-1 md:space-y-3 space-y-1">
                        <span className="text-sm text-slate-400">Who am I</span>
                        <h2 className="md:text-2xl text-lg font-bold text-red-600">About Me</h2>
                        <h3 className="text-slate-200 md:text-3xl text-xl font-bold">Paulo Calueto Francisco</h3>

                        <p className="md:text-lg text-slate-300 text-justify">
                            I'm passionate creative developer full-stack with 
                            over 4 year of experiences building digital products that users love.
                             I believe in the power of good design and clean code to solve real problems.
                        </p>

                        <p className="md:text-lg text-slate-300 text-justify hidden md:flex">
                            When I'm not coding, you'll find me exploring 
                            new desing trends, contribuing to open-source projects,
                             or sharing my knoledge through pages and developers community.
                        </p>

                        <p className="md:text-lg text-slate-300 text-justify">
                            I'm always excited to work on projects that 
                            challenge me to grow and learn something new.
                        </p>

                        <button className="hover:scale-105 mt-4 md:mt-2 transition-all deay-150 duration transform cursor-pointer">
                            <a className="md:px-6 md:py-3 px-4 py-1 rounded-full bg-red-600/90 text-lg text-slate-300 shadow-md shadow-red-600/90"
                             href="#">Download Cv</a>
                        </button>
                    </div>
                 </div>
            </div>
        </section>
    )
}