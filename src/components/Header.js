import './Header.scss';

function Header(){

    return (
        <div className="Header">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="sun">
                <img id="sun" src="./bi_sun.png" />
                <img id="moon" src="./moon.png" />
            </div>
        </div>
    );
}

export default Header;