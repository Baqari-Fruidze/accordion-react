import React from "react";
import styled from "styled-components";
import arrow from "/images/icon-arrow-down.svg";

export default function QuestionSection() {
  return (
    <QuestionContainer>
      <div>
        <Question> What is the maximum file upload size?</Question>
        <img src={arrow} alt="" />
      </div>
    </QuestionContainer>
  );
}

const QuestionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  & div {
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
  font-weight: 700;
  line-height: normal;
`;
