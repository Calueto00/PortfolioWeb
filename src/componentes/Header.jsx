import { useEffect, useState } from "react"

export default function Header() {
    const [size, setSize] = useState(window.innerWidth)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(()=> {
        function updateSize(){
            setSize(window.innerWidth)
        }

        window.addEventListener('resize',() =>{
            updateSize();
        })
    })

    const links = [
        {label: 'Home', href:'#hero'},
        {label: 'About', href:'#about'},
        {label: 'Services', href:'#services'},
        {label: 'Projects', href:'#projects'},
        {label: 'Contact', href:'#contact'}
    ]
    
    return (
        <header className=" bg-black/90 text-white p-2">
           

            {/* mobile version */}
            {size < 767 && 
            <nav className="fixed w-full z-20 top-0 left-0 right-0 p-4 border-b border-white/20 bg-zinc-900/90 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-lg text-red-600">Paulo Calueto</h1>
                    <button 
                        onClick={()=> setMenuOpen(v => !v)} 
                        aria-label="Toggle menu"
                        className="border border-white shadow p-2 rounded-full cursor-pointer text-red-600 transition-ease-in-out duration-300 delay-150 hover:scale-105">
                        {
                            menuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            )
                        }
                    </button>
                </div>

                {
                    menuOpen && <ul className="flex flex-col p-2 items-center space-y-2 w-full">
                    { links?.map(link => (
                        <li 
                        className="cursor-pointer font-medium hover:bg-red-900 delay-150 rounded-lg duration-300 transition-ease-in-out transform w-full text-center p-2"
                        key={link.label}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
                }
            </nav>}

            {/*laptop version */}
            {
                size > 767 && <nav className="max-w-6xl m-auto py-2 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-red-600">Paulo Calueto</h1>
                    <ul className="flex space-x-4 text-xl font-medium">
                        {links?.map(link => (
                            <li key={link.label}>
                                <a 
                                    className="hover:text-red-600 hover:scale-105 transition-all ease-in-out delay-150 duration-300"
                                    href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            }

            
        </header>

    )
}