import perfil from '../assets/perfil.png'
export default function AboutSection() {
    return (
        <section id="about" className="h-screen bg-black/90">
            <div className="lg:max-w-6xl space-y-3 mx-auto h-full flex flex-col items-center justify-center">
                

                 <div className="flex items-center justify-center gap-9 w-full">
                    <div className="flex-1">
                        <img src={perfil} alt="" className='h-100 w-full object-fit rounded-lg' />
                    </div>


                    <div className=" flex-1 space-y-3">
                        <span className="text-sm text-slate-400">Who am I</span>
                        <h2 className="text-2xl font-bold text-red-600">About Me</h2>
                        <h3 className="text-slate-200 text-3xl font-bold">Paulo Calueto Francisco</h3>

                        <p className="text-lg text-slate-300 text-justify">
                            I'm passionate creative developer full-stack with 
                            over 4 year of experiences building digital products that users love.
                             I believe in the power of good design and clean code to solve real problems.
                        </p>

                        <p className="text-lg text-slate-300 text-justify">
                            When I'm not coding, you'll find me exploring 
                            new desing trends, contribuing to open-source projects,
                             or sharing my knoledge through pages and developers community.
                        </p>

                        <p className="text-lg text-slate-300 text-justify">
                            I'm always excited to work on projects that 
                            challenge me to grow and learn something new.
                        </p>

                        <button className="hover:scale-105 transition-all deay-150 duration transform cursor-pointer">
                            <a className="px-6 py-3 rounded-full bg-red-600/90 text-lg text-slate-300 shadow-md shadow-red-600/90"
                             href="#">Download Cv</a>
                        </button>
                    </div>
                 </div>
            </div>
        </section>
    )
}