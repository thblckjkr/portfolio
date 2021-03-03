import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
// import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const NavbarComponent = () => {
  const { navbar } = useContext(PortfolioContext);
  // const { name } = navbar;

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
    <navbar id="navbar">
      <a href="/">
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="title">
            <Typewriter
              options={{ cursor: '_' }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'thblckjk' +
                      '<span style="color:var(--secondary)">.</span>' +
                      '<span style="color:var(--primary)">tk</span>'
                  )
                  .start();
              }}
            />
          </div>
        </Fade>
      </a>
      <div className="language">
        <i className="fa fa-language text-primary" />
        ES
      </div>
    </navbar>
  );
};

export default NavbarComponent;
