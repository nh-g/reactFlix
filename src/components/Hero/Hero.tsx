import React from 'react';
import mergeClassNames from '../../scripts/merge-class-names';
import './Hero.css';
import {Spinner} from 'components/shared/FetchItems';

interface Props {
  image?: string;
  className?: string;
  spinnerVisible?: boolean;
}

const Hero: React.FC<Props> = ({
  image,
  className,
  spinnerVisible,
  children,
}) => {
  return (
    <div
      className={mergeClassNames('Hero', className)}
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      {spinnerVisible && <Spinner />}
      <div className="Hero__content">{children}</div>
    </div>
  );
};

export default Hero;
