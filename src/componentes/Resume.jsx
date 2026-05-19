
export default function Resume(){
    const experiences = [
        {
            title: 'Tech Lead Developer',
            company: 'SyntaxCore',
            date: '2026',
            details: 'Leading full-stack projects, mentoring teams, and delivering enterprise-level web applications.',
        },
        {
            title: 'Full-Stack Developer',
            company: 'Freelancer',
            date: '2023 - 2025',
            details: 'Built custom web solutions for clients using Laravel, React, and modern JavaScript ecosystems.',
        },
        {
            title: 'Frontend Developer',
            company: 'Qnb',
            date: '2022 - 2023',
            details: 'Created responsive frontend experiences and worked closely with designers to improve usability.',
        },
        {
            title: 'Frontend Developer',
            company: 'Elite Training',
            date: '2021 - 2022',
            details: 'Delivered polished UI components and support for training platform interfaces.',
        },
    ]

    const education = [
        {
            school: 'Instituto Superior Metropolitano de Angola',
            degree: 'Computer Science',
            date: '2020 - 2025',
        },
        {
            school: 'Udemy',
            degree: 'Laravel Advanced',
            date: '2023',
        },
        {
            school: 'FreeCodeCamp',
            degree: 'SQL Fundamentals',
            date: '2023',
        },
        {
            school: 'FreeCodeCamp',
            degree: 'Node.js, JavaScript, HTML, CSS',
            date: '2024',
        },
    ]

    return (
        <section id="resume" className="min-h-screen bg-black/90 py-12">
            <div className="lg:max-w-6xl mx-auto px-4">
                <div className="text-center mb-12 space-y-3">
                    <span className="text-sm text-slate-400  ">Experience & Education</span>
                    <h2 className="md:text-3xl text-2xl font-bold text-red-600">My Resume</h2>
                    <p className="max-w-2xl mx-auto text-slate-300 text-base md:text-lg">
                        I combine technical leadership with hands-on development experience. Below are the roles and studies that shaped my skills in building modern web products.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    <div className="space-y-3">
                        <div className="rounded-[32px] border border-zinc-800 bg-zinc-950 p-4 shadow-xl shadow-black/20">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">Professional Experience</h3>
                            <div className="space-y-3">
                                {experiences.map((item, index) => (
                                    <div key={index} className="relative pl-5">
                                        <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-red-600" />
                                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-3 hover:border-red-600 transition-all duration-300">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-slate-100">{item.title}</h4>
                                                    <p className="text-slate-400 text-sm">{item.company}</p>
                                                </div>
                                                <span className="text-sm text-gray-500">{item.date}</span>
                                            </div>
                                            <p className="mt-2 text-slate-300 leading-7">{item.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="rounded-[32px] border border-zinc-800 bg-zinc-950 p-5 shadow-xl shadow-black/20">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">Education & Certifications</h3>
                            <div className="space-y-5">
                                {education.map((item, index) => (
                                    <div key={index} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-3 hover:border-red-600 transition-all duration-300">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-lg font-medium text-slate-100">{item.school}</p>
                                                <p className="text-slate-400 text-sm">{item.degree}</p>
                                            </div>
                                            <span className="text-sm text-gray-500">{item.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-zinc-800 bg-zinc-950 p-6 shadow-xl shadow-black/20">
                            <h3 className="text-xl font-semibold text-slate-100 mb-4">Resume Highlights</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex gap-3 items-start">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-600" />
                                    <span>4+ years delivering responsive web applications and custom business systems.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-600" />
                                    <span>Strong experience with Laravel, React, Next.js, REST APIs, and database architecture.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-600" />
                                    <span>Proven track record building user-friendly dashboards and business platforms.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}