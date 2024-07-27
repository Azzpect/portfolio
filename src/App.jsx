import "./css/output.css"
import github from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"
import twitter from "./assets/twitter.svg"
import WorkCard from "./WorkCard"

function App() {

  return (
    <>
      <header className="fixed top-0 bg-white z-10 w-screen h-[8vh] flex justify-around">
        <img src='./src/assets/logo.png' className=""/>
        <nav className="w-[40vw] mr-[15%] flex justify-around items-center">
          <a href='' className='navitem'>Home</a>
          <a href='#work-container' className='navitem'>Work</a>
          <a href='' className='navitem'>Contact</a>
        </nav>
      </header>
      <section className="handles-container">
        <a href='https://github.com/Azzpect/' target="_blank"><img src={github} className="handle"></img></a>
        <a href='https://www.linkedin.com/in/atanu-ghosh-698649294/' target="_blank"><img src={linkedin} className="handle"></img></a>
        <a href="https://x.com/AtanughoshBrp" target="_blank"><img src={twitter} className="handle"></img></a>
      </section>
      <section className="intro">
        <div className="flex flex-col justify-around items-center">
          <img src="./src/assets/myimage.jpg" className="rounded-[50%]"/>
          <p className="font-sig text-2xl leading-[5rem]">Hello, I am Atanu Ghosh.</p>
        </div>
        <div className="w-[40%] h-[60%] relative">
          <h1 className="font-heading text-[2rem] leading-10 font-semibold">I am a full stack web developer.</h1>
          <h5 className="font-para text-xs leading-10">passionate about problem solving and creating robust applications</h5>
          <div className="btn-container absolute bottom-12">
            <button className="btn bg-[#94DEF5]">See my work</button>
            <button className="btn bg-[#D9D9D9]">Read more about me</button>
          </div>
        </div>
      </section>
      <section className="projects" id="work-container">
        <h1 className="font-heading text-4xl font-bold">Projects</h1>
        <div className='w-[80%] h-[70%] mx-auto'>
          <WorkCard img='https://raw.githubusercontent.com/Azzpect/WeatherApp/main/public/images/favicon.ico' title='Weather App' desc="It's a weather app made in react using the open weather api. It has a input field to take city name as input and fetches data of that location using the open weather api.'" url='https://weatherapp6571.netlify.app/'/>
        </div>
      </section>
    </>
  )
}

export default App
