import {SiGithub, SiTwitter, SiInstagram, SiWhatsapp} from 'react-icons/si'
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.grid}>
        <div className={style.item}>
          <h1 className={style.h1}>Abhishek</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            impedit consectetur optio quo iste voluptatem!
          </p>
        </div>
        <div className={style.item}>
            <h1 className={style.h1}>Social</h1>
            <ul className={style.social}>
                <li><a href=""><SiGithub /> Github</a></li>
                <li><a href=""><SiTwitter /> Twitter</a></li>
                <li><a href=""><SiInstagram /> Instagram</a></li>
                <li><a href=""><SiWhatsapp /> WhatsApp</a></li>
            </ul>
        </div>
        <div className={style.item}>
        <h1 className={style.h1}>More Links</h1>
            <ul className={style.social}>
                <li><a href="">Github</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">WhatsApp</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
