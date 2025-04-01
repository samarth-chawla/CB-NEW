import { Link } from "react-router-dom"

export const Card = ({ title, link, bg }) => {

    return (
        <div className="sm:w-[45%] w-full h-56 z-10 outline outline-red-500 flex items-center justify-center rounded-xl relative group">
            <div className="w-full h-full absolute opacity-0 group-hover:opacity-100 transition-all duration-1000 rounded-xl"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    // objectFit: "contain",
                    
                }}>
            </div>
            <Link to={link}><h1 className="text-3xl relative hover:text-4xl transition-all duration-500 text-center cursor-pointer hover:underline underline-offset-4 z-10">{title}</h1></Link>
        </div>
    )
}