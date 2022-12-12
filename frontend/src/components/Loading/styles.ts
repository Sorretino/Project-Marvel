import styled from "styled-components";

export const LoadingPage = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  background: #0009 !important;
  backdrop-filter: saturate(180%) blur(20px);
`;
export const LoandigLog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  min-height: 130px;
  background-color: #fff;
  border-radius: 5px;
  flex-direction: column;
`;
export const LoaAnime = styled.div`
  animation: is-rotating 1s infinite;
  border: 2px solid var(--colorDanger);
  border-radius: 50%;
  border-top-color: #ddd;
  height: 50px;
  width: 50px;
  display: flex;
  color: #fff;
  z-index: 1;
  span {
    color: #fff;
    font-size: 2em;
  }
  @keyframes is-rotating {
    to {
      transform: rotate(2turn);
    }
  }
`;
export const LoaAnimeMessage = styled.span`
  font-size: 10px;
  font-family: "Helvetica";
  letter-spacing: 0.9px;
  display: flex;
  color: var(--colorBg);
  z-index: 1;
  padding-top: 15px;
`;
