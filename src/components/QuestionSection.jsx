import React from "react";
import styled from "styled-components";
import arrow from "/images/icon-arrow-down.svg";
import data from "../data.json";

export default function QuestionSection({ questionIndex, setActive, active }) {
  const question = data[questionIndex].question;
  const answer = data[questionIndex].answer;
  return (
    <QuestionContainer
      onClick={() => {
        if (active === questionIndex) {
          setActive(null);
        } else {
          setActive(questionIndex);
        }
      }}
      active={active}
      questionIndex={questionIndex}
    >
      <div>
        <Question active={active} questionIndex={questionIndex}>
          {question}
        </Question>
        <img src={arrow} alt="" />
      </div>
      {active === questionIndex && <Answer>{answer}</Answer>}
    </QuestionContainer>
  );
}

const QuestionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  border-bottom: 1px solid #e8e8ea;
  padding-bottom: 1.8rem;
  cursor: pointer;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > img {
      transform: ${(props) =>
        props.active === props.questionIndex
          ? "rotate(180deg)"
          : "rotate(0deg)"};
      transition: 0.3s;
    }
  }
  @media (min-width: 90rem) {
    width: 100%;
    justify-content: space-between;
    padding: 0;
  }
`;

const Question = styled.h2`
  color: #1e1f36;
  font-family: "Kumbh Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: ${(props) =>
    props.active === props.questionIndex ? "700" : "400"};
  line-height: normal;
  transition: 0.3s;
  &:hover {
    color: #f47b56;
  }
  @media (min-width: 90rem) {
    color: #4b4c5f;
    font-family: "Kumbh Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: ${(props) =>
      props.active === props.questionIndex ? "700" : "400"};
    line-height: normal;
  }
`;
const Answer = styled.p`
  color: #787887;
  font-family: "Kumbh Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
