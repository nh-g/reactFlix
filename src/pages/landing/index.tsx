// Project files
import "./LandingPage.css";
import footerLinks from "../../data/home-footer-links.json";
import {
  FaqAccordion,
  Feature,
  Footer,
  HeaderHero,
  MacAnimation,
  PhoneAnimation,
  RedirectSignupForm,
  TVAnimation,
} from "components";

export default function LandingPage() {

  return (
    <div className="Home">
      <HeaderHero />
      <div className="Home__row">
        <div className="Home__feature">
          <Feature
            title="Enjoy on your TV."
            animation={<TVAnimation />}
            adjustAnimationMobileMargin
            titleFontSize="3rem"
          >
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Feature>
        </div>
      </div>
      <div className="Home__row">
        <div className="Home__feature">
          <Feature
            title="Download your programmes to watch offline."
            animation={<PhoneAnimation />}
            flipped
            titleFontSize="3rem"
          >
            Save your favorites easily and always have something to watch.
          </Feature>
        </div>
      </div>
      <div className="Home__row">
        <div className="Home__feature">
          <Feature
            title="Watch everywhere."
            animation={<MacAnimation />}
            titleFontSize="3rem"
          >
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </Feature>
        </div>
      </div>
      <div className="Home__row">
        <div className="Home__faq">
          <FaqAccordion />
          <div className="Home__faqForm">
            <RedirectSignupForm />
          </div>
        </div>
      </div>
      <div className="Home__row" id="bigFooter">
        <Footer
          className="Home__footer"
          menuLinks={footerLinks}
          showHotlineNumber
          showLanguagePicker
        >
          <div className="Home__footerSiteName">
            Netflix Clone © 2021 • giangngohong@gmail.com
          </div>
        </Footer>
      </div>
    </div>
  );
}
