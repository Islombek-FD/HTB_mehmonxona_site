import './Header.css';
import Nav from '../Nav/Nav';

function Header() {
    return (

        <header>

            <Nav />

            <div id="showcase">
                <div className="container">
                    <div id="showcase-content">
                        <h1><span className="text-primary">Enjoy</span> Your Stay</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam mollitia, sed fugiat sapiente beatae architecto magnam? Recusandae, nihil eos eligendi velit explicabo minima hic porro aperiam vitae iure dolorem corrupti.
                        </p>
                        <a href="about.html" className="btn">About Us</a>
                    </div>
                </div>
            </div>    

        </header>

    )
}

export default Header;