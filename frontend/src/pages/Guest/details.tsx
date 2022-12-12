import React, { useEffect, useState } from 'react';
import {BiCameraMovie, BiStar,BiMoviePlay} from "react-icons/bi";
import {GiBookPile,GiOpenBook} from "react-icons/gi"
import { useParams  } from 'react-router-dom';
import SiteLayout from '~/layouts/site';
import API from "~/services/api";

import {
  ContainerDetails,
  DetailCharacter,
  Title,
  DetailBoxOne,
  DetailBoxTwo,
  Description,
  Pharagraphp,
  Related,
  RelatedOne,
  RelatedFooter
} from "~/styles/detail"

const Details = () => {
  let { character_id } = useParams();
  const [character, setCharacter] = useState<any|null>(null);

  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async () => {
    const {
      data: { data: {results} },
    }: any = await API.get(`marvel/${character_id}`);
    if (results.length > 0 ) {
      console.info(results[0]);
      setCharacter(results[0]);
    } else {
      setCharacter(null);
    }
    
  };
  

  return (
    <SiteLayout>
     
      {character !== null ? (
        <ContainerDetails>
          <DetailCharacter>
            <DetailBoxOne>
              <img
                src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
              />
            </DetailBoxOne>
            <DetailBoxTwo>
              <Title>
                <h2>{character.name}</h2>
              </Title>
              {character.description.length > 0 && (
                <>
                <Title>
                  <Description>{character.description}</Description>
                </Title>
                 <Title>
                    <Pharagraphp> <GiBookPile id="IconCharacter" /> {character.comics.available}{" "} HQ's</Pharagraphp>
                    <Pharagraphp><BiMoviePlay id="IconCharacter" /> {character.series.available}{" "}
                      series</Pharagraphp>
                    <Pharagraphp><GiOpenBook id="IconCharacter" /> {character.stories.available}{" "}
                      Historias</Pharagraphp>
                      <Pharagraphp><BiStar id="IconCharacter" /> {character.events.available}{" "}
                      Eventos</Pharagraphp>
               </Title>
               </>
                
              )}
            </DetailBoxTwo>
          </DetailCharacter>

           {/* Related */}
          <Related>
          <RelatedOne>
            <h3>Últimos HQs</h3>
            {character.comics.items.map((item: any) => {
              return (
                <div key={`${character.id}-comic-${item.name}`}>{item.name}</div>
              );
            })}
          </RelatedOne>

          <RelatedOne>
            <h3>Últimas Séries</h3>
            {character.series.items.map((item: any) => {
              return <span key={`${character.id}-series-${item.name}`}>{item.name}</span>;
            })}
          </RelatedOne>

          <RelatedOne>
            <h3>Últimas Histórias</h3>
            {character.stories.items.map((item: any) => {
              return (
                <span key={`${character.id}-stories-${item.name}`}>{item.name}</span>
              );
            })}
          </RelatedOne>

          <RelatedFooter>
            <h3>Saiba mais</h3>
            {character.urls.map((item: any) => {
              return (
                <span key={`${character.id}-url-${item.type}`}>
                  <a href={item.url} target="_blank">{item.type}</a>
                </span>
              );
            })}
          </RelatedFooter>
          </Related>
        </ContainerDetails>
      ) : (
        
        <h3>Personagem loading...</h3>
      )}
    </SiteLayout>
  );
}

export default Details;
