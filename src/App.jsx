import "./css/output.css"
import github from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"
import twitter from "./assets/twitter.svg"


function App() {

  return (
    <>
      <header className="w-screen h-[8vh] flex justify-around">
        <img src='./src/assets/logo.png' className=""/>
        <nav className="w-[40vw] mr-[15%] flex justify-around items-center">
          <a href='' className='navitem'>Home</a>
          <a href='' className='navitem'>Work</a>
          <a href='' className='navitem'>Contact</a>
        </nav>
      </header>
      <section className="handles-container">
        <a><img src={github} className="handle"></img></a>
        <a><img src={linkedin} className="handle"></img></a>
        <a><img src={twitter} className="handle"></img></a>
      </section>
      <section className="intro">
        <div className="flex flex-col justify-around items-center">
          <img src="./src/assets/myimage.jpg" className="rounded-[50%]"/>
          <p className="font-sig text-2xl leading-[5rem]">Hello, I am Atanu Ghosh.</p>
        </div>
        <div className="w-[40%] h-[60%] relative">
          <h1 className="font-heading text-[2rem] leading-10 font-semibold">I am a full stack web developer.</h1>
          <h5 className="font-heading text-xs leading-10">passionate about problem solving and creating robust applications</h5>
          <div className="btn-container absolute bottom-12">
            <button className="btn bg-[#94DEF5]">See my work</button>
            <button className="btn bg-[#D9D9D9]">Read more about me</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
