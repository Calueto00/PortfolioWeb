
export default function Skills(){
    return(
        <section className="h-screen bg-zinc-950">
            <div className="lg:max-w-6xl mx-auto h-full flex gap-15 items-center justify-between">
                <div className="flex-1 space-y-2">
                    <span className="text-sm text-gray-600">My Top</span>
                    <h3 className="text-2xl font-bold text-red-600">Skills Tech.</h3>

                    <div className="space-y-3">
                        <p className="text-lg text-slate-300 text-justify">I have experience in developing modern, responsive, and scalable web aplication
                            using technologies such as laravel, React, and Next.js. I work with REST API development, dynamic interfaces,
                            management systems, and real-time integrations, always focusing on performance, clean code organization, and user esperience
                            . 
                        </p>
                        <p className="text-lg text-slate-300 text-justify">
                            I also have knowledge of databases, version control with Git, and frontend and backend best practices.
                        </p>
                    </div>
                </div>
                <div className="flex-1 grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="border bg-zinc-900 p-3 rounded-lg space-y-3 hover:scale-105 delay-150 duration-300 transition-all ease-in-out transform-y ">
                        <h3 className="text-xl font-medium text-slate-200">Frontend</h3>

                        <ul className="space-y-2 space-x-2 text-slate-300">
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
                    <div className="border bg-zinc-900 p-3 rounded-lg space-y-3 hover:scale-105 delay-150 duration-300 transition-all ease-in-out transform-y">
                        <h3 className="text-xl font-medium text-slate-200">Backend</h3>

                        <ul className="space-y-2 space-x-2 text-slate-300">
                            <button className="border rounded-full border-red-600 px-3">Laravel</button>
                            <button className="border rounded-full border-red-600 px-2">Node.js</button>
                            <button className="border rounded-full border-red-600 px-2">Php</button>
                            <button className="border rounded-full border-red-600 px-2">SpringBoot</button>
                            <button className="border rounded-full border-red-600 px-2">Express.js</button>
                        </ul>
                    </div>
                    <div className="border bg-zinc-900 p-3 rounded-lg space-y-3 hover:scale-105 delay-150 duration-300 transition-all ease-in-out transform-y">
                        <h3 className="text-xl font-medium text-slate-200">Databases</h3>

                        <ul className="space-y-2 space-x-2 text-slate-300">
                            <button className="border rounded-full border-red-600 px-3">Mysql</button>
                            <button className="border rounded-full border-red-600 px-2">Sqlite</button>
                            <button className="border rounded-full border-red-600 px-2">MongDb</button>
                            <button className="border rounded-full border-red-600 px-2">Postgreed</button>
                        </ul>
                    </div>
                </div>
            </div>

            
        </section>
    )
}