import React, { SyntheticEvent, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsChevronDown } from "react-icons/bs";
import { TiMediaPlay, TiMediaPlayReverse } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import Cards from '~/components/Cards';
import Loading from "~/components/Loading";
import SiteLayout from '~/layouts/site';
import API from '~/services/api';
import {
  BtnSeacher, ContainerFilters, ContainerList,
  ContainerSpan, ContainerTitle, Drop3sdMaster, PaginateNumbers, PaginationButtons,
  PaginationContainer, SectorBtnTable, SectoresSearche, SectorGlobal,
  SectorSelected,InputCheckCuston
} from '~/styles/home';

type overType =  number | null;
type filterData = {
  filter: string;
}

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const Guest= () => {
  let query = useQuery();
  const { register, handleSubmit } = useForm();
  const [ characters, setCharacters ] = useState<any>();
  const [ limit, setLimit ] = useState<number>(20);
  const [ pages, setPages ] = useState<number>(1);
  const [ actual, setActual] = useState<number>(1);
  const [ load, setLoad ] = useState<boolean>(false);
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [ filterName, setFilterName ] = useState<string>('da Personagem');
  const [ filterType, setFilterType ] = useState<string>('name');
  const [ filterValue, setFilterValue ] = useState<string>('name');
  const [ execFilter, setExecFilter ] = useState<boolean>(false);

  const MAX_LEFT = (9 - 1) / 2;
  const first = Math.max(actual - MAX_LEFT, 1);


  useEffect(() => {
   let qryPage = query.get("page");
   if (qryPage !== null) {
     if (qryPage.length > 0) {
       qryPage = qryPage.replace(/[a-z,A-Z]/g, "");
       if (qryPage !== "0") {
          getCharacters(parseInt(qryPage));
       }
     }
   } else {
    getCharacters();
   }
  }, []);



  const next = () => {
    getCharacters(actual + 1);
    setActual(actual + 1)
  }

  const previus = () => {
    getCharacters(actual - 1);
    setActual(actual - 1)
  }  

  const getCharacters = async ( overPage: overType = null ) => {
    setLoad(true);
    let vOffset;
    if (overPage !== null) {
      vOffset = overPage === 1 ? 0 : limit * overPage;
      setActual(overPage);
    } else {
      vOffset = actual === 1 ? 0 : limit * actual;
    }

    let URI:string = `marvel?offset=${vOffset}&limit=${limit}`;
    if (execFilter === true){
      URI += `&${filterType}=${filterValue}`;
    }

    const {
      data: { data },
    }: any = await API.get(URI);
    setCharacters(data.results);
    setPages(Math.ceil(data.total / limit));
    setLoad(false);
  };

  useEffect(() => {
    setLoad(true);
   
    setInterval(() => {
      setLoad(false);
    }, 3000);
  }, []);

  const changeFilter = (value: string) => {
    switch (value) {
      case 'name':
          setFilterName('do Personagem');
          setFilterType('name');
        break;
      case 'comics':
          setFilterName('da HQ');
          setFilterType('comics');
        break;
      case 'series':
          setFilterName('da Seríe');
          setFilterType('series');
        break;
      case 'events':
          setFilterName('de Evento');
          setFilterType('events');
        break;
      case 'stories':
          setFilterName('da História');
          setFilterType('stories');
        break;
      default:
        break;
    }
  }

  const handleFilter  =  (data:any, e:SyntheticEvent):void => {
    let converedValue: string = data.filter;
    if (converedValue.length > 1)  {
      converedValue = converedValue.replace(' ', '%20');
      setFilterValue(converedValue);
      setExecFilter(true);
      getCharacters(0);
      e.preventDefault();
    }  
  };

  return (
    <SiteLayout>
     
      <>
      <SectorGlobal>
      <SectorSelected>
        <SectoresSearche
         onClick={() => {
          setOpenSelect(true) }}
          >Filmes <BsChevronDown id="IconMove"/>
          </SectoresSearche>
         {openSelect && (
         
         
         
    <Drop3sdMaster  onMouseLeave={()=> {setOpenSelect(false)}} onSubmit={event=> handleSubmit(handleFilter, event)}> 
      <ContainerTitle>Pesquisando pelo nome {filterName} </ContainerTitle>
        <SectorBtnTable>
          <ContainerList>
            <input type="text" placeholder={`Pesquisa por Nome ${filterName}`} {...register('filter')}/>
          </ContainerList>

          <ContainerList id="name">
          <InputCheckCuston type="checkbox" onClick={()=> {changeFilter('name')}} />
          <ContainerSpan >Nome do Personagem</ContainerSpan>
          </ContainerList>

          <ContainerList id="comics">
            <InputCheckCuston type="checkbox" onClick={()=> {changeFilter('comics')}} />
          <ContainerSpan  >Nome da HQ</ContainerSpan>
          </ContainerList>
  
           <ContainerList id="series">
           <InputCheckCuston type="checkbox" onClick={()=> {changeFilter('series')}}/>
          <ContainerSpan  >Nome da Seríe</ContainerSpan>
          </ContainerList>

           <ContainerList id="events">
           <InputCheckCuston type="checkbox" onClick={()=> {changeFilter('events')}}/>
          <ContainerSpan  >Nome de Evento</ContainerSpan>
          </ContainerList>
          
          <ContainerList id="stories"> 
          <InputCheckCuston type="checkbox" onClick={()=> {changeFilter('stories')}}/>
          <ContainerSpan >Nome da História</ContainerSpan>
          </ContainerList>
         
          </SectorBtnTable>

          <ContainerFilters>
            <BtnSeacher type="submit">Pesquisar</BtnSeacher>
          </ContainerFilters>
    </Drop3sdMaster>
         
         
         
         )}
         </SectorSelected>
         

       <Cards characters={characters} title="Personagens" />
     <React.Fragment>
     <PaginationContainer>
      {load == true ?(<Loading/>):(<></>)}
      {actual > 1 && (
       
       
        <PaginationButtons>
          <Link to={`/?page=${actual - 1}`} onClick={previus}>
           <TiMediaPlayReverse id="IconNav"/> PREV 
          </Link>
        </PaginationButtons>
       
      )}

      {Array.from({ length: Math.min(9, pages) })
        .map((_, index) => index + first)
        .map((item_page) => (
          <div key={`count-${item_page}`}>
            {item_page === actual ? (
              <PaginateNumbers style={{ color: "#e0234e"}}>{item_page}</PaginateNumbers>
            ) : (
              
              <PaginateNumbers >              
                  {item_page}              
              </PaginateNumbers>
              
            )}
          </div>
        ))}

      {actual < pages && (
        <PaginationButtons>
          <Link   to={`/?page=${actual + 1} ` } onClick={next} >
            NEXT <TiMediaPlay id="IconNav"/>
          </Link>
        </PaginationButtons>
      )}
       </PaginationContainer>
      
       </React.Fragment>
       </SectorGlobal>
       </>
    </SiteLayout>
  );
}

export default Guest;
