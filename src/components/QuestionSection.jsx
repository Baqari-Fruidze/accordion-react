import React from "react";
import styled from "styled-components";
import arrow from "/images/icon-arrow-down.svg";
import data from "../data.json";

export default function QuestionSection({ questionIndex, setActive }) {
  const question = data[questionIndex].question;
  const answer = data[questionIndex].answer;
  return (
    <QuestionContainer onClick={() => setActive(questionIndex)}>
      <div>
        <Question>{question}</Question>
        <img src={arrow} alt="" />
      </div>
      <Answer>{answer}</Answer>
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
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Question = styled.h2`
  color: #1e1f36;
  font-family: "Kumbh Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Answer = styled.p`
  color: #787887;
  font-family: "Kumbh Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;
