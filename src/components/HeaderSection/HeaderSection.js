import "./HeaderSection.scss";
import InStockLogo from "../../assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";


function HeaderSection () {
    return(
        <header>
            <nav className="nav">
            <div className="nav__logo-div">
                <img className="nav__logo" src={InStockLogo}></img>
            </div>
            <div className="nav__directory">
                <Link className="nav__links nav__links--active">Warehouses</Link>
                <Link className="nav__links">Inventory</Link>
            </div>
            </nav>
        </header>
    )
};

export default HeaderSection;