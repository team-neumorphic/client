import React from "react";
import * as FAIcon from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { getAllPageInfor } from "../asset/pages";

const TITLE_CHAR_LIMIT = 50;
const DESCRIPTION_CHAR_LIMIT = 85;

const defaults = getAllPageInfor()[0];

export default function FavouritesCard(props) {
  const { pageIcon, pageTitle, pageDescription } = props.data || defaults;
  const selected = props.selected || false;
  const handleClick = props.onClick;

  return (
    <Wrapper onClick={handleClick}>
      <Card selected={selected}>
        <IconContext.Provider value={{ color: "11999e", size: "64px" }}>
          {React.createElement(FAIcon[pageIcon])}
        </IconContext.Provider>
        <div id="align-middle">
          <h2>
            {pageTitle.length > TITLE_CHAR_LIMIT
              ? pageTitle.substring(0, TITLE_CHAR_LIMIT) + "..."
              : pageTitle}
          </h2>
        </div>
        <p>
          {pageDescription.length > DESCRIPTION_CHAR_LIMIT
            ? pageDescription.substring(0, DESCRIPTION_CHAR_LIMIT) + "..."
            : pageDescription}
        </p>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 15px;

  &:hover {
    transform: scale(1.02);
  }
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
`;

const Card = styled.div`
  padding: 18px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.5);
    transition: all 0.5s ease-out;
  }

  & div#align-middle {
    display: flex;
    align-items: center;
    height: 57px;
    margin: 10px 0;
  }

  & h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  ${(props) => {
    if (props.selected) {
      return `
			box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.5);
			border: rgba(17, 153, 158, 0.7);
			border-width: 2px;
			border-style: solid;
			transition: all 0.5s ease-out;
			`;
    } else {
      return `
			box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.15);
			border: transparent;
			border-width: 2px;
			border-style: solid;
			transition: all 0.5s ease-out;
			`;
    }
  }}
`;
