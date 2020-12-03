import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import PortfolioItem from '../../molecules/portfolioItem/portfolioItem';
import './style.css';

const propTypesPortfolio = {
  href: PropTypes.string,
  subtitle: PropTypes.string,
  portfolioList: PropTypes.array,
  locale: PropTypes.string,
};

function Portfolio({
  href = '',
  subtitle = '',
  portfolioList = [],
  locale,
}) {
  return (
    <div
      className="portfolioPage"
      id={href}
    >
      <h1 className="portfolioTitle">
        {subtitle}
      </h1>
      <div className="portfolioContainer">
        {portfolioList.map(
          (item) => {
            const key = v4();
            return (
              <PortfolioItem {...{
                ...item,
                locale,
                key,
              }}
              />
            );
          },
        )}
      </div>
    </div>
  );
}
Portfolio.propTypes = propTypesPortfolio;

export default Portfolio;
