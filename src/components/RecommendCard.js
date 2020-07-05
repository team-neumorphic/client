import React from "react";
import PropTypes from "prop-types";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import * as FAIcon from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import styled from "styled-components";

const RecommendCard = (props) => {
  const { icon, title } = props;
  const selected = props.selected || false;
  const handleClick = props.onClick;

  return (
    <Wrapper onClick={handleClick}>
      <RemoveWrapper>
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Not relevant</Tooltip>}
        >
          <IoMdCloseCircle size="28px" color="#828282" />
        </OverlayTrigger>
      </RemoveWrapper>
      <Card selected={selected}>
        <IconCircle>
          <IconContext.Provider value={{ color: "white", size: "36px" }}>
            {React.createElement(FAIcon[icon])}
          </IconContext.Provider>
        </IconCircle>
        <h2 className="my-2">
          {title.length > 25 ? title.substring(0, 25) + "..." : title}
        </h2>
      </Card>
    </Wrapper>
  );
};

RecommendCard.defaultProps = {
  title: "Recommend Card",
  icon: "FaHome",
};

RecommendCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default RecommendCard;

const Wrapper = styled.div`
  position: relative;
  padding: 15px;
`;

const Card = styled.div`
  padding: 20px;
  width: 280px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.5);
    transition: box-shadow 0.5s ease-out;
  }

  & h2 {
    font-size: 1.5rem;
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

const IconCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 40px;
  background: #11999e;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const RemoveWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;
