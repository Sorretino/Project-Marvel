import { Link } from "react-router-dom";
import {GiBookPile} from "react-icons/gi"
import { CardContainer,ContainerCharacters,Title,SectorCard,CardCharacter ,TitleCard,CardNavegate,CardButtons,BlockIconBtn,ImgArrow, CardImages} from "./styles";

type CardProps = {
  title: String;
  characters: Array<any> | null;
};

const Cards = ({ title, characters } : CardProps) => {
  return (
    <CardContainer id="#mult">
      <Title>
        <h2>{title}</h2>
      </Title>
      <ContainerCharacters><SectorCard>
        {characters?.map(item => {
          return (
           
            <CardCharacter key={item.id}>
              <CardImages>
                <img
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                />
               </CardImages>
                  <TitleCard>
                               <h3>{item.name}</h3>
                    <span>
                      <GiBookPile id="IconCharacter" /> {item.comics.available}{" "}
                      HQ's
                    </span>
                    
                  </TitleCard>
              <CardNavegate>
              <Link to={`/detalhes/${item.id}`} >
                <CardButtons>
                  Detalhes 
                  <BlockIconBtn>
                    <ImgArrow src="/ArrowWhite.svg" id="Iconbtn" />
                   
                  </BlockIconBtn>

                </CardButtons>
                </Link>
              </CardNavegate>
            </CardCharacter>
          
          );
        })}
      </SectorCard></ContainerCharacters>
      
    </CardContainer>
  );
};

export default Cards;