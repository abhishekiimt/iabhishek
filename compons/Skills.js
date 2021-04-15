import style from "../styles/Hero.module.css";

const Skills = () => {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <h1 className={style.title}>
          My <span>Skills</span>
        </h1>
        <div className={style.flex}>
          <div className={style.div2}>
            <h1 className={style.title}>
              What is it ? <p className={style.skillhead}>Skills..</p>
            </h1>
            <p className={style.description}>
              A skill or technique is a learned ability to do something. It
              could be playing a musical instrument or playing a kind of sport
              or even doing something simple like using a corkscrew. Someone who
              is trying to do something but not succeeding may be using the
              wrong technique. Skill does not always have to be something
              physical: it may refer to the way a person approaches a problem.
            </p>
            <div className={style.code}>Build your skills, not your resume. -Sheryl Sandberg</div>
          </div>
          <div className={style.wrapper}>
            <div className={style.progress}>
              <label >HTML5 </label>
              <progress id="file" max="100" value="70"></progress>
            </div>
            <div className={style.progress}>
              <label >CSS3 </label>
              <progress id="file" max="100" value="90"></progress>
            </div>
            <div className={style.progress}>
              <label >JavaScript </label>
              <progress id="file" max="100" value="60"></progress>
            </div>
            <div className={style.progress}>
              <label >ReactJs </label>
              <progress id="file" max="100" value="50"></progress>
            </div>
            <div className={style.progress}>
              <label >NextJs </label>
              <progress id="file" max="100" value="50"></progress>
            </div>
            <div className={style.progress}>
              <label >Git/Github </label>
              <progress id="file" max="100" value="70"></progress>
            </div>
            <div className={style.progress}>
              <label >AWS (Amazon Web Services) </label>
              <progress id="file" max="100" value="50"></progress>
            </div>
            <div className={style.progress}>
              <label >LINUX </label>
              <progress id="file" max="100" value="60"></progress>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
