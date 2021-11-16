import React from 'react';
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { GridMenu } from '..';
import { MenuLink } from 'types/landing/types';
import mergeClassNames from '../../utils/merge-class-names';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import './Footer.css';

interface Props {
  menuLinks: MenuLink[][];
  languagePickerClassName?: string;
  showHotlineNumber?: boolean;
  showLanguagePicker?: boolean;
  showSocialMediaIcons?: boolean;
}

const Footer: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  menuLinks,
  languagePickerClassName,
  showLanguagePicker = false,
  showSocialMediaIcons = false,
  showHotlineNumber = false,
  children,
  ...props
}) => {
  return (
    <footer id = "footer" className={mergeClassNames("Footer", props.className)}>
      <div className="Footer__inner">
        {showSocialMediaIcons && (
          <div className="Footer__socialMedia">
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <AiFillYoutube />
          </div>
        )}
        {showHotlineNumber && (
          <h3 className="Footer__hotline">Questions? Call 020-79 06 35</h3>
        )}

        <div className="Footer__menu">
          <GridMenu links={menuLinks} />
        </div>
        {showLanguagePicker && (
          <LanguagePicker
            className={mergeClassNames(
              "Footer__languagePicker",
              languagePickerClassName
            )}
          />
        )}
        {children}
      </div>
    </footer>
  );
};

export default Footer;
