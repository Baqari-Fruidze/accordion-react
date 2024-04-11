import { GlobalStyles } from "./Global";
import styled from "styled-components";
import ilustrationMobile from "/images/bg-pattern-mobile.svg";
import ilustrationWomanMobile from "/images/illustration-woman-online-mobile.svg";
import QuestionSection from "./components/QuestionSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <div>
          <WomanImage
            src={ilustrationWomanMobile}
            alt=" woman in online meeting"
            className="woman"
          />
          <Shadow src={ilustrationMobile} alt=" shadow" />
        </div>

        <Title>FAQ</Title>
        <QuestionSection />
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
`;
const Shadow = styled.img`
  margin-top: -8rem;
`;
export default App;
