
import './Navbar.css' 




const Navbar = () => {
return (
    <header className="bg-amber-200">
<div className="header__container">
    {/*<h1 className="header__tittle">LOGO</h1>*/}
    <img src='/Logotipos.png/' alt='Logo' width={150} height={150} />

    <nav className="">
        <a className="text-black text-lg uppercase font-bold"  href="#">Enlace 1</a>
        <a className="text-black text-lg uppercase font-bold"  href="#">Enlace 2</a>
        <a className="text-black text-lg uppercase font-bold"  href="#">Enlace 3</a>
    </nav>
</div>
    </header>
)
}



export default Navbar