import React from "react";
import {Drop3sdMaster,
 ContainerTitle,
SectorBtnTable,
  ContainerList,
  ContainerSpan,
  InputCheckCuston,
  ContainerFilters,
  BtnSeacher, } from "./styles";
export default function DropsMaster({ onClose = () => {} }) {
  return (
    <Drop3sdMaster  onMouseLeave={onClose}> 
      <ContainerTitle>Selecione uma opção</ContainerTitle>
  
          <SectorBtnTable>

         <ContainerList>
           <input type="text" placeholder="Pesquisa por Nome" id="name" />
          </ContainerList>
         
          <ContainerList id="1comics">
            <ContainerSpan >Comic</ContainerSpan>
          </ContainerList>
         
           <ContainerList id="series">
            <ContainerSpan >Seríes</ContainerSpan>
          </ContainerList>

           <ContainerList id="events">
            <ContainerSpan  >Eventos</ContainerSpan>
          </ContainerList>

          <ContainerList id="stories"> 
            <ContainerSpan >Storíes</ContainerSpan>
          </ContainerList>
         
          </SectorBtnTable>

          <ContainerFilters>
         <BtnSeacher type="submit">Pesquisar</BtnSeacher>
          </ContainerFilters>
    </Drop3sdMaster>
  );
}
