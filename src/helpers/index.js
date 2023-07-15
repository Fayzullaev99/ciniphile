import { FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'

export const navbarList = [
    {
        path:"/",
        name:"Главная"
    },
    {
        path:"/movies",
        name:"Фильмы"
    },
    {
        path:"/series",
        name:"Сериалы"
    },
    {
        path:"/search",
        name:<FiSearch />
    },
]
export const footerList = [
    {
        path:"#!",
        name:<FaTelegramPlane />
    },
    {
        path:"#!",
        name:<FaFacebook />
    },
    {
        path:"#!",
        name:<FaInstagram />
    },
    {
        path:"#!",
        name:<FaTiktok />
    },
    {
        path:"#!",
        name:<FaTwitter />
    },
    {
        path:"#!",
        name:<FaYoutube />
    },
    {
        path:"#!",
        name:<FaLinkedin />
    },
]