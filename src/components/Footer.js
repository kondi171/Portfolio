import { useContext } from "react";
import authorImage from "./../assets/img/avatar/Konrad-rotate.png";
import { AppContext } from "./flow/AppContext";
const Footer = () => {
  const { photoBy, on, contact, sources } = useContext(AppContext).footerData;
  const sourcesList = [
    {
      authorText: 'Blake Connally',
      authorLink: 'https://unsplash.com/@blakeconnally?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      websiteLink: 'https://unsplash.com',
      websiteText: 'Unsplash'
    },
    {
      authorText: 'Atle Mo',
      authorLink: 'https://www.toptal.com/designers/subtlepatterns/awesome-pattern',
      websiteLink: 'https://www.toptal.com/designers/subtlepatterns',
      websiteText: 'Toptal'
    },
    {
      authorText: 'Atle Mo',
      authorLink: 'https://www.toptal.com/designers/subtlepatterns/fabric-1/',
      websiteLink: 'https://www.toptal.com/designers/subtlepatterns',
      websiteText: 'Toptal'
    },
    {
      authorText: 'Dejan Horakovic',
      authorLink: 'https://www.toptal.com/designers/subtlepatterns/mosaic',
      websiteLink: 'https://www.toptal.com/designers/subtlepatterns',
      websiteText: 'Toptal'
    },
    {
      authorText: 'AltumCode',
      authorLink: 'https://unsplash.com/es/@altumcode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      websiteLink: 'https://unsplash.com',
      websiteText: 'Unsplash'
    }
  ];
  return (
    <footer id="footer" className="footer">
      <div className="footer__content">
        <div className="footer__sources">
          <h4 className="subtitle">{sources}</h4>
          <ul>
            {sourcesList.map(({ authorLink, authorText, websiteLink, websiteText }, index) => {
              return (<li key={`list-item-${index}`}>
                {photoBy}
                <a target="_blank" href={authorLink} rel="noreferrer">{authorText}</a>
                {on}
                <a href={websiteLink}>{websiteText}</a>
              </li>);
            })}
          </ul>
        </div>
        <div className="footer__contact">
          <h4 className="subtitle">{contact}</h4>
          <div className="contact">
            <span><i className="fa fa-envelope" aria-hidden="true"></i> wk.k.nowak@gmail.com</span>
            <span><i className="fa fa-envelope-o" aria-hidden="true"></i> kondi.171@wp.pl</span>
            <span><i className="fa fa-phone" aria-hidden="true"></i> +48 690 992 435</span>
            <span><i className="fa fa-heart" aria-hidden="true"></i> Social Media</span>
          </div>
        </div>
        <div className="footer__author">
          <div className="img-wrapper">
            <img src={authorImage} alt="Konrad Nowak" />
          </div>
          <div className="socials">
            <a className="tooltip" href="https://github.com/kondi171" target="_blank" rel="noreferrer" >
              <i className="fa fa-github tooltip__icon" aria-hidden="true"></i>
              <span className="tooltip__text">GitHub</span>
            </a>
            <a className="tooltip" href="https://stackoverflow.com/users/10164453/kondi" target="_blank" rel="noreferrer">
              <i className="fa fa-stack-overflow tooltip__icon" aria-hidden="true"></i>
              <span className="tooltip__text">StackOverflow</span>
            </a>
            <a className="tooltip" href="https://www.linkedin.com/in/konrad-nowak-91194a165" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin-square tooltip__icon" aria-hidden="true"></i>
              <span className="tooltip__text">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="developer">Konrad Nowak &reg; 2022</div>
    </footer>
  );
}
export default Footer;