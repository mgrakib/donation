import { Outlet } from "react-router-dom";
import NavBar from "../Components/Home/NavBar/NavBar";

const FixedRoot = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="w-full max-w-screen-xl mx-auto">
            <Outlet></Outlet>
            </div>
           
        </div>
    );
};

export default FixedRoot;