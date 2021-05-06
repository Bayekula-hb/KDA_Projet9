
import { Link } from "react-router-dom";
import Ul, { Li } from "./Ul";
import ImgSearch from "../Image/search-solid.svg";

const HeaderNew = ()=>{
    const clickSearch = ()=>{
        const navSite = document.querySelector("#nav--site");
        
        console.log("clik sur search ");
    }
    return(
        <nav id="nav--site" className="nav">
            <h1>H-cine</h1>
            <div className="nav--div">
                <div className="div--menu">
                    <Ul className="list menu-list"
                        contentUl1={<Li className="Li Li-home" contentLi={<Link className="link link--home" to="/"> Home </Link>}/>}
                        contentUl2={<Li className="Li Li-home" contentLi={<Link className="link link--movies" to="/movies"> Movies </Link>}/>}
                        contentUl3={<Li className="Li Li-home" contentLi={<Link className="link link--movies" to="/movies"> Séries </Link>}/>}
                    />
                </div>
            </div>
            <div className="nav--end">
                <form className="form--search" >
                    <img id="img--search" src={ImgSearch} alt="search" onClick={clickSearch}/>
                </form>
            </div>
        </nav>
    );
}
export default HeaderNew;