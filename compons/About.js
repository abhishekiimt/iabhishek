import { FcBusinessman , FcPhone} from "react-icons/fc";
import { ImPhone, ImEnvelop } from "react-icons/im";

import style from "../styles/Hero.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <h1 className={style.title}>
            <span>About </span>Us
        </h1>
        <div className={style.flex}>
          <div className={style.div}>
            <h1 className={style.title}>
              My Intro
            </h1>
            <p className={style.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              dignissimos ex necessitatibus cupiditate voluptatibus quae
              mollitia quas obcaecati quis, eum facere rerum dolorum quaerat
              numquam magni libero reprehenderit, doloribus beatae!
            </p>
            <div className={style.intro}>
                <div className={style.name}>
                   <FcBusinessman /> Name    : <span>Abhishek Pandey</span>
                </div>
                <div className={style.name}>
                    <ImPhone /> Phone   : <span>8505921813</span>
                </div>
                <div className={style.name}>
                   <ImEnvelop /> Email   : <span>Abhishekbca15.iimtgn@gmail.com</span>
                </div>
            </div>
          </div>
          <div className={style.div2}>
            <div className={style.bghero}></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
