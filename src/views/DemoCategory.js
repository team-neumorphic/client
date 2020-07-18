import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import Scrollable from "../components/Scrollable";
import FavouriteCard from "../components/FavouriteCard";
import { getAllCategoryInfor } from "../asset/pages";

const DemoCategory = (props) => {
  const { title, description } = props;
  const history = useHistory();

  return (
    <>
      <LandingGreen>
        <div className="container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </LandingGreen>

      <Scrollable className="my-5">
        {getAllCategoryInfor()
          .find(
            (category) => category.categorySlug === history.location.pathname
          )
          .categoryPages.map((page, i) => (
            <FavouriteCard
              key={i}
              data={page}
              onClick={() => {
                history.push(page.pageSlug);
              }}
            />
          ))}
      </Scrollable>
    </>
  );
};

DemoCategory.defaultProps = {
  title: "Demo Category Title",
  description: "This is a demo page for each category.",
};

DemoCategory.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DemoCategory;

const LandingGreen = styled.div`
  padding: 30px 0;
  text-align: center;

  background: #e4f9f5;
`;
