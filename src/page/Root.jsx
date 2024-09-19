import "../App.css";
import { Outlet} from "react-router-dom";




const Root = () => {

    return (
        <>
            <Outlet />
        </>
    )
};

export default Root;