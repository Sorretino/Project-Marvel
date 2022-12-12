import styled from "styled-components";

export const SectorGlobal = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const SectorSelected = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align:end ;
  flex-direction: column;
  position:relative ;
  margin-top:0px ;
  padding:1rem 1rem ;
  background-color:var( --colorBg) ;
  @media (max-width: 950px) {
    width: 100%;
  }
`;
export const SectoresSearche = styled.div`
  width: 100%;
  max-width: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  font-size:1rem ;
  color:var(--colorTitle);
  padding-right:10px ;
  font-weight:600 ;
  text-transform:uppercase ;

  #IconMove{
    margin-left:10px ;
  }
  :hover{
  color:var(--colorDanger) ;
}
cursor: pointer;
@media (max-width: 1300px) {
    padding: 10px 30px;
    justify-content: space-between;
  }
  @media (max-width: 950px) {
    max-width: 120px;
  }
`;
export const PaginationContainer = styled.div`
  width: 100%;
  max-width: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  padding: 20px 0 20px 0;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const PaginationButtons = styled.div`
  width: 100%;
  max-width: 55px;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 3px;
  color: #fff;
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  bottom: 0;
  font-family: Helvetica;
  margin: 10px;
  #IconNav {
   
    font-size: 15px;
    margin-left: 5px;
    margin-right: 5px;
  }
 
  :hover a {
    color: var(--colorDanger);
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 90px;
    font-weight: 700;
    padding: 5px;
    letter-spacing: 0.5px;
    @media (max-width: 950px) {
      width: 100%;
      max-width: 100%;
    }
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const PaginateNumbers = styled.span`
  color: #ccc;
  margin: 5px 5px;
  cursor: not-allowed! important;
  :hover {
    color: var(--colorDanger);
    cursor: not-allowed! important;
  }
`;
//drop

export const Drop3sdMaster = styled.form`
 
  z-index: 1;
  min-width: 120px;
  max-width: 320px;
  height: auto;
  top: 10px;
  background: var(--colorBg);
  border: 1px solid var(--colorDanger);
  border-radius: 3px;
  position: absolute;
  margin-right: 0%;
  right: 3% !important ;
  transition: 0.3s ease-out;
  :before {
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    top: -11px;
    left: 43%;
    right: auto;
    border-bottom: 0.9em solid;
    border-right: 0.9em solid transparent;
    border-left: 0.9em solid transparent;
    color: var(--colorDanger);
  }
  @media (max-width: 1050px) {
    width: 80%;
  }
`;

export const ContainerTitle = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  padding: 20px 0 5px 0;
  color: #e1e1e6;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 0;
  }
`;
export const ContainerList = styled.div`
  position: relative;

  width: 100%;
  max-width: 100%;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  padding: 0 0 5px 0;
  cursor: pointer;
  color: red;
  
  input {
    background: transparent;
    border: 0;
    border-bottom: 2px solid #414141;
    padding:10px;
    color: #fff;
    font-family: Source Sans Pro, Helvetica Neue, sans-serif;
    font-display: swap;
    font-size: 16px;
    outline: 0 !important;
    transition: all 90ms ease-in-out;
    width: 90%;

    :focus {
      outline: none;
      border-bottom: solid #e0234e;
      background-color: transparent;
      color: #fff;
    }
  }
  :hover {
    color: red !important;
    background-color: #000;
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 0;
  }
`;
export const ContainerSpan = styled.span`
  position: relative;
  font-size: 15px;
  color: #e1e1e6;

  @media (max-width: 950px) {
  }
`;
export const InputCheckCuston = styled.input`
  position: relative;
  width: 15px;
  max-width: 15px;
  height: 15px;
  outline: none;
  resize: none;
  cursor: pointer;
  transition: transform 0.5s;
  margin-right: 15px;
  :checked {
    transform: rotateY(360deg);
  }
  :before {
    transform: rotateY(360deg);
    content: "";
    display: block;
    position: absolute;
    width: 15px;
    max-width: 15px;
    height: 15px;
    top: -10;
    left: -10;
    background-color: #fff;
    border: solid 1px #ccc;
    border-radius: 2px;
  }
  :checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    top: -10;
    left: -10;
    background-color: var(--colorDanger);
    border: solid 1px var(--colorDanger);
  }
  :checked:after {
    content: "";
    display: block;
    width: 6px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 1px;
    left: 5px;
  }
`;
export const ContainerFilters = styled.form`
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 0.5px solid #ccc;
  

  @media (max-width: 950px) {
  }
`;

export const BtnSeacher = styled.button`
  position: relative;
  left: 0px;
  width: 100%;
  max-width: 100%;
  padding: 0.8rem 1rem;
  background: transparent;
  color: var(--colorTitle);
  border-style: none;
  display: flex;
  justify-content: flex-start;
  font-size: 1.1rem;
  align-items: center;
  cursor: pointer;
  :hover {
    color: var(--colorDanger);
  }
  @media (max-width: 950px) {
  }
`;
export const SectorBtnTable = styled.div`
  padding: 20px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  flex-wrap: wrap;
  

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
