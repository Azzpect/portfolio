export default function WorkCard({img, title, desc, url}) {
  function redirect() {
    window.open(url, '_blank');
  }
  return (
    <div className="work" onClick={redirect}>
      <img src={img} className="w-[10%] h-[40%]"/>
      <div className="w-[70%]">
        <h2 className="font-heading text-lg font-semibold">{title}</h2>
        <p className="font-para text-xs font-regular">{desc}</p>
      </div>
    </div>
  );
}
