import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
// import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const NavbarComponent = () => {
  const { navbar } = useContext(PortfolioContext);
  const { language } = navbar; // TODO: Get the address and split it
  const parts = 'teogonzalez.dev'.split('.');

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
                    `${parts[0]}<span style='color:var(--secondary)'>.</span>` +
                      `<span style="color:var(--primary)">${parts[1]}</span>`
                  )
                  .start();
              }}
            />
          </div>
        </Fade>
      </a>
      <div className="language">
        <i className="fa fa-language text-primary px-2" />
        {language}
      </div>
    </navbar>
  );
};

export default NavbarComponent;
