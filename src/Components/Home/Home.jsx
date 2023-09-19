import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar/>

            <div className="m-10 text-center">

            <h2>This is home page</h2>
            <Outlet/>

            </div>
            
            
        </div>
    );
};

export default Home;