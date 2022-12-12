import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #000000;
  z-index: 1;
  top: 0;
`;
export const SearchContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    padding: 10px 30px;
    justify-content: space-between;
  }
  @media (max-width: 900px) {
    padding: 10px 0;
    justify-content: center;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding-left: 16px;
  max-width: 300px;
  height: auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  text-decoration: none;


  span {
    font-family: "Helvetica";
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--colorDanger);
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight:600 ;
    #Movi {
      padding-right: 10px;
      color: var(--colorTitle);
    }
    
  }
  @media (min-width: 1280px) {
    padding-left: 0;
    justify-content: space-between;
  }
  @media (max-width: 900px) {
    padding: 10px 0 10px 0;
    
  }
`;

export const Search = styled.form`
  width: 100%;
  max-width: 400px;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  input {
    background: transparent;
    border: 0;
    border-bottom: 2px solid #414141;
    padding: 5px 20px 5px 28px;
    color: #fff;
    font-family: Source Sans Pro, Helvetica Neue, sans-serif;
    font-display: swap;
    font-size: 16px;
    outline: 0 !important;
    transition: all 90ms ease-in-out;
    width: 250px;

    :focus {
      outline: none;
      border-bottom: solid #e0234e;
      background-color: transparent;
      color: #fff;
    }
  }
  button {
  }
  @media (max-width: 900px) {
    padding: 10px 0 10px 0;

  }
`;
export const SearchBtn = styled.button`
  height: 40px;
  width: 60px;
  max-width: 60px;
  background: #e0234e;
  color: #000;
  border-style: none;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  transition: all 90ms ease-in-out;
  border: solid 2px #e0234e;
  :hover {
    background-color: transparent;
    border: solid 2px #e0234e;
    color: #fff;
  }
`;
