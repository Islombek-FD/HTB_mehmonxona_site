import './Nav.css';

function Nav() {
    return (

        <nav id="navbar">

            <div className="container">

                <h1 className="logo"><a href="#link">HBT</a></h1>
                
                <ul>
                    <li>
                        <a className="current" href="#link">Home</a>
                    </li>
                    <li>
                        <a href="about.html ">About</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>

            </div>

         </nav>

    )
}

export default Nav;