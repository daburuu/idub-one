import './Mobilemenu.scss';

function Mobilemenu(){
    return(
        <div className="Mobilemenu">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div id="close-menu">X</div>
        </div>
    );
}

export default Mobilemenu;