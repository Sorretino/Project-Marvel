import styled from "styled-components";

export const ContainerDetails = styled.div`
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
  margin-top: 40px;
`;

export const DetailCharacter = styled.div`
  width: 100%;
  max-width: 1500px;
  height: auto;
  min-height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  margin-top: 40px;
  @media (max-width: 980px) {
    max-width: 100%;
    padding: 0;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    padding: 0;
  }
`;
export const DetailBoxOne = styled.div`
  width: 100%;
  max-width: 35%;
  height: auto;
  min-height: 500px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  img {
    width: 100%;
    max-width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 90px;
    @media (max-width: 980px) {
    max-width: 300px;
    border-radius:10px ;
    
  }
  }
  @media (max-width: 980px) {
    max-width: 400px;
    justify-content: center;
  }
  @media (max-width: 900px) {
    max-width: 400px;
    justify-content: center;
  }
`;
export const DetailBoxTwo = styled.div`
  width: 100%;
  max-width: 60%;
  height: auto;
  min-height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  
  padding-left: 10px;
  @media (max-width: 980px) {
    max-width: 400px;
  }
  @media (max-width: 900px) {
    max-width: 400px;
    padding-left: 0;
  }
`;
// title Characters

export const Title = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  text-decoration: none;
  flex-wrap: wrap;

  margin: 0;

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

export const Description = styled.span`
  font-family: "Helvetica";
  font-size: 1em;
  max-width: 80%;
  text-decoration: none;
  color: #e1e1e6;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  #IconCharacter {
    padding-right: 10px;
    color: #e0234e;
    font-size: 1.2em;
  }
`;
export const Pharagraphp = styled.span`
  font-family: "Helvetica";
  font-size: 1em;

  text-decoration: none;
  color: #e1e1e6;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  #IconCharacter {
    padding-right: 10px;
    color: #e0234e;
    font-size: 1.2em;
  }
  @media (max-width: 980px) {
    width: 100%;
    max-width: 40%;
    justify-content: flex-start;
  }
`;

//detalhes

export const Related = styled.div`
  width: 100%;
  max-width: 1500px;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  text-decoration: none;
  flex-wrap: wrap;
  color: #fff;
  margin: 0;
  padding: 50px 0 40px 0;
`;

export const RelatedOne = styled.div`
  width: 100%;
  max-width: 46%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  text-decoration: none;
  flex-wrap: wrap;
  color: #fff;
  margin: 0;
  flex-direction: column;
  padding: 20px;
  h3 {
    font-family: "Helvetica";
    font-size: 1.3em;
    text-decoration: none;
    color: #e0234e;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: start;
    padding-bottom: 10px;
  }
  span {
    font-family: "Helvetica";
    font-size: 16px;
    text-decoration: none;
    color: #e1e1e6;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: start;
    flex-direction: column;
  }
`;

export const RelatedFooter = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  text-decoration: none;
  flex-wrap: wrap;
  color: #fff;
  margin: 0;
  padding: 20px;
  h3 {
    padding: 10px 0 10px 5px;
    width: 100%;
    max-width: 100%;
    color: #e0234e;
  }
  a {
    color: #ffffff;
    margin-top: 50px;
    width: 100%;
    margin-right: 60px;
    padding: 10px 0 10px 5px;
    :hover {
      color: #e0234e;
    }
  }
`;
