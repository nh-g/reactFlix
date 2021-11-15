import "./HeaderHero.css";
import bgImage from "assets/images/authBackground.jpg";
import {
  Hero,
  Header,
  Button,
  LanguagePicker,
  Menu,
  RedirectSignupForm,
  Feature,
} from "components";
import { ROUTE_LOGIN } from "../../constants/routes";

const HeaderHero = () => {
  return (
    <Hero image={bgImage}>
      <Header>
        <Menu
          items={[
            <LanguagePicker className="HeaderHero__languagePicker" />,
            <Button link={ROUTE_LOGIN}>Sign In</Button>,
          ]}
        />
      </Header>
      <div className="HeaderHero__content">
        <Feature
          title="Unlimited films, TV programmes and more."
          titleFontSize="3rem"
        >
          Watch anywhere. Cancel at any time.
        </Feature>
        <RedirectSignupForm />
      </div>
    </Hero>
  );
};

export default HeaderHero;
