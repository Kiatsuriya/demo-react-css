import avatar from "../assets/icons/avatar.png"
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();
    const gotoDetail = () => {
        navigate("/details");
    };
    return(
        <div className="text-center font-mono">
        <p className="text-2xl font-bold uppercase">About Me</p>
        <div className="flex justify-center">
        <img src={avatar} alt="avatar"  width={170}/>
        </div>

        <p className="text-l mt-2 font-bold text-black mx-36">
        Portfolio is developing.
        </p>
        <button className="text-xl text-white underline"
        onClick={() => gotoDetail()}>Next</button>
    </div>
    );
}

export default LandingPage;