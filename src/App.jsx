import { GlobalStyles } from "./Global";
import styled from "styled-components";
import ilustrationMobile from "/images/bg-pattern-mobile.svg";
import ilustrationWomanMobile from "/images/illustration-woman-online-mobile.svg";
import QuestionSection from "./components/QuestionSection";
import { useState } from "react";
import womanImageDesktop from "/images/illustration-woman-online-desktop.svg";
import ilustrationDesktop from "/images/bg-pattern-desktop.svg";

function App() {
  const [active, setActive] = useState(null);
  return (
    <>
      <GlobalStyles />
      <Main>
        <Cont>
          <WomanImage
            src={ilustrationWomanMobile}
            alt=" woman in online meeting"
            className="woman"
          />
          <DesktopWoman src={womanImageDesktop} alt="" />
          <Shadow src={ilustrationMobile} alt=" shadow" />
          <DesktopIllustration src={ilustrationDesktop} alt="" />
        </Cont>
        <Contai>
          <Title>FAQ</Title>
          <QuestionSection
            questionIndex={0}
            setActive={setActive}
            active={active}
          />
          <QuestionSection
            questionIndex={1}
            setActive={setActive}
            active={active}
          />
          <QuestionSection
            questionIndex={2}
            setActive={setActive}
            active={active}
          />
          <QuestionSection
            questionIndex={3}
            setActive={setActive}
            active={active}
          />
          <QuestionSection
            questionIndex={4}
            setActive={setActive}
            active={active}
          />
        </Contai>
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 0 2.4rem 4.8rem;
  border-radius: 23px;
  background: #fff;
  box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.5);
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
  align-items: center;
  color: red;
  @media (min-width: 90rem) {
    flex-direction: row;
    padding: 6.5rem 9.5rem 8.3rem 0rem;
    overflow: hidden;
  }
`;
const Title = styled.h1`
  color: #1e1f36;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const WomanImage = styled.img`
  margin-top: -10.5rem;
  @media (min-width: 90rem) {
    display: none;
  }
`;
const Shadow = styled.img`
  margin-top: -8rem;
  @media (min-width: 90rem) {
    display: none;
  }
`;
const DesktopWoman = styled.img`
  display: none;
  @media (min-width: 90rem) {
    display: block;
    margin-left: -7rem;
    margin-top: -3rem;
  }
`;
const DesktopIllustration = styled.img`
  display: none;
  @media (min-width: 90rem) {
    display: block;
    width: 103%;
    margin-top: -34rem;
    margin-left: -4rem;
  }
`;
const Cont = styled.div`
  @media (min-width: 90rem) {
    display: inline;
    width: 50%;
  }
`;
const Contai = styled.div`
  @media (min-width: 90rem) {
    width: 100%;
    display: flex;
    gap: 3.7rem;
    flex-direction: column;
  }
`;
export default App;
