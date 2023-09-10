import profile from "../assets/icons/circle-user.png";
import facebook from "../assets/icons/facebook.png"
import instagram from "../assets/icons/instagram.png";
import gmail from "../assets/icons/gmail.png";

const Navbar = () => {
    return (
<div className="flex justify-between items-center">
        <img src={profile} alt="profile" width={55} className="cursor-pointer"/>
        <ul className="hidden md:flex">
            <li className="px-2">
                <a href="https://www.facebook.com/" target="blank">
                    <img src={facebook} alt="facebook" width={55} />
                </a>
            </li>
            <li className="px-2">
                <a href="https://www.instagram.com/" target="blank">
                    <img src={instagram} alt="instagram" width={55} />
                </a>
            </li>
            <li className="px-2">
                <a href="https://www.gmail.com/" target="blank">
                    <img src={gmail} alt="gmail" width={55} />
                </a>
            </li>
        </ul>
</div>
    );
}

export default Navbar;