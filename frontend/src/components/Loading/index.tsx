import React from "react";

import {LoadingPage,LoandigLog,LoaAnime,LoaAnimeMessage} from "./styles"

const Loading = () => {
  return (
   
      <LoadingPage>
        <LoandigLog>
          <LoaAnime/>
          <LoaAnimeMessage >Carregando..</LoaAnimeMessage>
        </LoandigLog>
      </LoadingPage>
   
  );
}
export default Loading;