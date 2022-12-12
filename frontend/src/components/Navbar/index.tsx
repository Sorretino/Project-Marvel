import React from "react";
import { Link } from "react-router-dom";
import {BiCameraMovie} from "react-icons/bi";
import { NavContainer,SearchContainer,Title} from "./styles";

const Navbar = () => {
  

  return (
    <NavContainer>
      <>
      <SearchContainer>
        <Title>
           <Link to="/"><span> <BiCameraMovie id="Movi"/>Personagem Marvel</span></Link>
        </Title>
      </SearchContainer>
      </>
    </NavContainer>
    
  );
}

export default Navbar;