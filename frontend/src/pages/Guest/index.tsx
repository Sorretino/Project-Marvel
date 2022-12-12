import React, { useEffect, useState, useMemo, useLayoutEffect } from "react";
import SiteLayout from '~/layouts/site';
import Cards from '~/components/Cards';
import { useLocation, Link } from "react-router-dom";
import API from '~/services/api';
import { 
    PaginationButtons,
    PaginationContainer,
    PaginateNumbers,
    SectorGlobal,
    SectorSelected,

  } from '~/styles/home';
import Loading from "~/components/Loading";
import {TiMediaPlayReverse,TiMediaPlay} from "react-icons/ti"

type overType =  number | null;

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const Guest= () => {
  let query = useQuery();
  const [ characters, setCharacters ] = useState<any>();
  const [ limit, setLimit ] = useState<number>(20);
  const [ pages, setPages ] = useState<number>(1);
  const [ actual, setActual] = useState<number>(1);
  const [ load, setLoad ] = useState<boolean>(false);
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
  return (
    <SiteLayout>
      <>
      <SectorGlobal>
         <SectorSelected/>
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
