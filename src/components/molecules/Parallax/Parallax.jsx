import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import styles from './styles';

const useStyles = makeStyles(styles);

function checkIsServer() {
  const isServer = typeof window === 'undefined';

  return isServer;
}

export default function Parallax(props) {
  let windowScrollTop;

  const flag = !checkIsServer()
    ? window.innerWidth >= 768
    : false;

  if (flag) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    `translate3d(0,${windowScrollTop}px,0)`,
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });
  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
  };
  const {
    filter, className, children, style, image, small,
  } = props;
  const classes = useStyles();
  const parallaxClasses = [
    classes.parallax,
    filter ? classes.filter : '',
    small ? classes.small : '',
    className,
  ].join(' ');

  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        transform,
      }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};
