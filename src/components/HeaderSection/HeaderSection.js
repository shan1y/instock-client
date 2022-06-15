import "./HeaderSection.scss";
import InStockLogo from "../../assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";


function HeaderSection () {
    return(
        <header>
            <nav className="nav">
            <div className="nav__logo-div">
                <img className="nav__logo" src={InStockLogo} alt="InStock Logo"></img>
            </div>
            <div className="nav__directory">
                <Link to="" className="nav__links nav__links--active">Warehouses</Link>
                <Link to=""className="nav__links nav__links--tablet">Inventory</Link>
            </div>
            </nav>
        </header>
    )
};

export default HeaderSection;