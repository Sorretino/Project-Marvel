import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #000000;
 
`;
export const Title = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-decoration: none;

  h2 {
    font-family: "Helvetica";
    font-size: 2em;
    text-decoration: none;
    color: #e1e1e6;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    #Movi {
      padding-right: 10px;
    }
  }
`;
//cards
export const ContainerCharacters = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 360px) {
  }
`;

export const SectorCard = styled.div`

  grid-template-columns: repeat(5, 1fr);
  display: grid;

  grid-gap: 20px;
  @media (max-width: 1100px) {
    padding: 10px;
    justify-content: space-around;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 900px) {
    padding: 10px;
    justify-content: space-around;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 700px) {
    padding: 10px;
    justify-content: space-around;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 360px) {
    padding: 10px;
    justify-content: space-around;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardCharacter = styled.div`
  height: auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #121214;
  overflow: hidden;
  margin: 0 0 30px 0 !important;

  @media (max-width: 980px) {
    max-width: 350px;
    margin: 0;
    margin-bottom: 20px;
  }
  @media (max-width: 900px) {
    max-width: 350px;
    margin-bottom: 20px;
  }
`;

export const CardImages = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 200px;
  max-height: 200px;
 

  img {
    width: 100%;
    max-width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
  }
`;
export const TitleCard = styled.div`
  height: auto;
  min-height: 60px;
  width: 100%;
  max-width: 300px;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  text-decoration: none;
  flex-direction: column;
  padding-bottom: 20px;


  h3 {
    font-family: "Helvetica";
    font-size: 1.1em;
    text-decoration: none;
    color: #e1e1e6;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 40px;
    padding-left: 8px;
   
  }
  span {
    font-family: "Helvetica";
    font-size: 0.8em;
    text-decoration: none;
    color: #e1e1e6;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
    padding-left: 5px;
    padding-right: 5px;
    #IconCharacter {
      padding-right: 10px;
      color: #e0234e;
      font-size: 1.2em;
    }
  }
`;

export const CardNavegate = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 0rem 0rem;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 0;
  a {
    width: 100%;
    max-width: 300px;
  }
  #Iconbtn {
    transition: all 0.6s ease-out;
  }

  :hover #Iconbtn {
    margin-left: 70px;
    
  }
`;

export const CardButtons = styled.button`
  width: 100%;
  max-width: 300px;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 3px;
  color: var(--colorDanger);
  padding: 0.7rem 0rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  bottom: 0;
  font-family: Helvetica;
  padding-left: 10px;
  transition: all 0.6s ease-out;
  :hover {
    color: var(--colorDanger);
    background: transparent;
    border: 2px solid #e0234e;
  }
`;

export const BlockIconBtn = styled.div`
  width: 100%;
  max-width: 40%;
  min-height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  background-color: transparent;
  

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const ImgArrow = styled.img`
  position: relative;
  width: 100%;
  max-width: 30px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    width: 100%;
  }
`;
