import style from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={style.container}>
      <main className={style.main}>
          <div className={style.flex}>
              <div className={style.div2}>
                  <div className={style.bghero}></div>
              </div>
              <div className={style.div}>
                  <h1 className={style.title}>Hey there, I'm <span>Abhishek</span>.</h1>
                  <code className={style.code}> 🤞 to became Web Developer</code>
                  <div className={style.btncon}>
                      <div className={style.btn}><a href="">Click more</a></div>
                      <div className={style.btn}><a href="">About</a></div>
                  </div>
              </div>
          </div>
      </main>
      <div className={style.scroll}>
            <span></span>
            <span></span>
            <span></span>
          </div>
    </div>
  );
};

export default Hero;
