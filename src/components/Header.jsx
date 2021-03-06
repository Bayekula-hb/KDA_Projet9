import React from "react";
import { Link } from "react-router-dom";
import Ul, { Li } from "./Ul";

const Header = ()=>{
    return(
        <>
            <nav className="Header">
                <h1><Link className="link link--h1" to="/"> H-Cine </Link></h1>
                <Ul className="list list-menu"
                    contentUl1={<Li className="Li Li-home" contentLi={<Link className="link link--home" to="/"> Home </Link>}/>}
                    contentUl2={<Li className="Li Li-home" contentLi={<Link className="link link--movies" to="/movies"> Movies </Link>}/>}
                />
                <div className="div--search">
                    <form className="form">
                        <input type="search" placeholder="film" className="form--input" aria-label="Search"/>
                        <button type="submit" className="form--btn"><i class="fab fa-searchengin"></i></button>
                    </form>
                        {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#E7442B" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                        <input className="input--search" type="search"/> */}
                    {/* <div className="div--search-div">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#E7442B" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                        <input className="input--search" type="search"/>
                    </div> */}
                </div>
            </nav>
        </>
    );
}
export default Header;