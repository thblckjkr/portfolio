/* eslint-disable react/no-children-prop */
import React, { useContext, useState, useEffect } from 'react';
import TextLoop from 'react-text-loop';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, networks, technologies } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron text-centered">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title md-auto text-center">{title}</h1>
          <h3 className="hero-subtitle">
            <span className="text-secondary">{'<'}</span>
            Desarrollador&nbsp;
            {technologies && (
              <TextLoop
                className="text-primary"
                interval={2500}
                adjustingSpeed={200}
                children={technologies}
              />
            )}
            <span className="text-secondary">{'/>'}</span>
          </h3>

          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;
                return (
                  <a
                    key={id}
                    href={url || '#'}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    <i className={`fa fa-${name || 'refresh'}`} />
                  </a>
                );
              })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
