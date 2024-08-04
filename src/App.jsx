import "./css/output.css";
import dgithub from "./assets/dgithub.svg";
import lgithub from "./assets/lgithub.svg";
import dlinkedin from "./assets/dlinkedin.svg";
import llinkedin from "./assets/llinkedin.svg";
import dtwitter from "./assets/dtwitter.svg";
import ltwitter from "./assets/ltwitter.svg";
import dsun from "./assets/dsun.svg";
import lsun from "./assets/lsun.svg";
import WorkCard from "./WorkCard";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.querySelector("#light-handles").style.display = "none";
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector("header").style.backgroundColor = "black";
      document.querySelector("header>img").src = "./src/assets/logo2.png";
      document.querySelectorAll(".navitem").forEach((item) => {
        item.style.color = "white";
      });
      document.querySelector("*").style.color = "white";
      document.querySelector(".btn-container>button:nth-child(2)").style.color = "black";
      document.querySelector("#light-handles").style.display = "flex";
      document.querySelector("#dark-handles").style.display = "none";
    } else {
      document.querySelector("*").style.color = "black";
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header>img").src = "./src/assets/logo1.png";
      document.querySelector("#light-handles").style.display = "none";
      document.querySelector("#dark-handles").style.display = "flex";
      document.querySelectorAll(".navitem").forEach((item) => {
        item.style.color = "black";
      });


    }
  }, [darkMode]);

  return (
    <>
      <header className="fixed bg-white top-0 z-10 w-screen h-[8vh] flex justify-around">
        <img src="./src/assets/logo1.png" className="" />
        <nav className="w-[40vw] mr-[15%] flex justify-around items-center">
          <a
            className="navitem"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Home
          </a>
          <a
            className="navitem"
            onClick={() => {
              window.scrollTo(0, 500);
            }}
          >
            Work
          </a>
          <a
            className="navitem"
            onClick={() => {
              window.scrollTo(0, 2000);
            }}
          >
            Contact
          </a>
        </nav>
      </header>
      <section id="dark-handles" className="handles-container">
        <img
          src={dsun}
          name="sun"
          className="handle mb-[5vh]"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        />
        <a href="https://github.com/Azzpect/" target="_blank">
          <img src={dgithub} className="handle"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/atanu-ghosh-698649294/"
          target="_blank"
        >
          <img src={dlinkedin} className="handle"></img>
        </a>
        <a href="https://x.com/AtanughoshBrp" target="_blank">
          <img src={dtwitter} className="handle"></img>
        </a>
      </section>
      <section id="light-handles" className="handles-container">
        <img
          src={lsun}
          name="sun"
          className="handle mb-[5vh]"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        />
        <a href="https://github.com/Azzpect/" target="_blank">
          <img src={lgithub} className="handle"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/atanu-ghosh-698649294/"
          target="_blank"
        >
          <img src={llinkedin} className="handle"></img>
        </a>
        <a href="https://x.com/AtanughoshBrp" target="_blank">
          <img src={ltwitter} className="handle"></img>
        </a>
      </section>
      <section className="intro" id="home">
        <div className="flex flex-col justify-around items-center">
          <img src="./src/assets/myimage.jpg" className="rounded-[50%] border-white border-solid border-2" />
          <p className="font-sig text-2xl leading-[5rem]">
            Hello, I am Atanu Ghosh.
          </p>
        </div>
        <div className="w-[40%] h-[60%] relative">
          <h1 className="font-heading text-[2rem] leading-10 font-semibold">
            I am a full stack web developer.
          </h1>
          <h5 className="para leading-10">
            passionate about problem solving and creating robust applications
          </h5>
          <div className="btn-container absolute bottom-12">
            <button className="btn bg-primary-color" onClick={() => {
              window.scrollTo(0, 500);
            }}>See my work</button>
            <button
              className="btn bg-[#D9D9D9]"
              onClick={() => {
                window.scrollTo(0, 1000);
              }}
            >
              Read more about me
            </button>
          </div>
        </div>
      </section>
      <section className="projects" id="work-container">
        <h1 className="heading">Projects</h1>
        <div className="w-[80%] h-[70%] container">
          <WorkCard
            img="https://raw.githubusercontent.com/Azzpect/WeatherApp/main/public/images/favicon.ico"
            title="Weather App"
            desc="It's a weather app made in react using the open weather api. It has a input field to take city name as input and fetches data of that location using the open weather api.'"
            url="https://weatherapp6571.netlify.app/"
          />
        </div>
      </section>
      <section id="about" className="container w-[85vw] min-h-[40vh] my-[15vh]">
        <div className="w-[30%]">
          <h1 className="heading">About Me</h1>
          <p className="para font-regular p-2">
            I am Atanu Ghosh, a full stack web developer. I am currently
            pursuing BCA. I live in India, West Bengal, Baruipur. I am
            passionate about problem solving and building full fledged products.
            My strengths are my problem solving capability, fast learning, self
            motivation etc. As for my weakness, I think it is my communication
            skill which is not good as my other skill but still near average.
          </p>
        </div>
        <img
          src="./src/assets/myimage.jpg"
          className="w-[20%] aspect-square rounded-3xl border-white border-solid border-2"
        />
      </section>
      <section className="contact-container" id="contact">
        <h1 className="heading mb-10">Contact Me</h1>
        <div className="contact">
          <input type="text" placeholder="Enter your name:" />
          <input type="email" placeholder="Enter your email:" />
          <input type="text" placeholder="Enter the subject:" />
          <textarea placeholder="Enter your message:"></textarea>
          <button className="btn">Send Email</button>
        </div>
      </section>
    </>
  );
}

export default App;
