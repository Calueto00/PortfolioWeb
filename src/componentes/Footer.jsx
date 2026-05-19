import { useState } from "react"

//import icons
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import linkedin from '../assets/icons/linkedin.svg'
import facebook from '../assets/icons/facebook.svg'

const icons = [
  {
    src: instagram,
    href: '#',
    style: 'w-5 h-5 hover:scale-105 delay-150 duration-300 transition-all ease-in-out transform'
  },
  {
    src: facebook,
    href: 'https://web.facebook.com/PauloCalueto',
    style: 'w-5 h-5 hover:scale-105 bg-white hover:shadow shadow-blue-600 rounded-full delay-150 duration-300 transition-all ease-in-out transform'
  },
  {
    src: linkedin,
    href: '#',
    style: 'w-5 h-5 hover:scale-105 rounded-full delay-150 duration-300 transition-all ease-in-out transform'
  },
  {
    src: whatsapp,
    href: '#',
    style: 'w-5 h-5 hover:scale-105 hover:shadow shadow-green-600 rounded-full delay-150 duration-300 transition-all ease-in-out transform'
  },
  {
    src: github,
    href: 'https://github.com/dashboard',
    style: 'w-5 h-5 hover:scale-105 bg-white hover:shadow-md shadow-pink-600 rounded-full delay-150 duration-300 transition-all ease-in-out transform'
  }
]

export default function Footer() {

  const [data, setData] = useState(new Date())
  return (
    <footer className="bg-zinc-800 py-4 p-4 md:p-6">
      <div className="md:max-w-6xl mx-auto flex md:flex-row flex-col space-y-4 md:space-y-0 items-center justify-between">
        
        <ul className='space-x-2 flex'>
          {
            icons?.map(icon => (
              <li key={icon}>
                <a href={icon.href}>
                  <img className={icon.style} src={icon.src} alt="" />
                </a>
              </li>
            ))
          }

        </ul>
        <h4 className="text-slate-400 text-sm">Copyright @All rights reserved {data.getFullYear()}</h4>
      </div>
    </footer>
  )
}