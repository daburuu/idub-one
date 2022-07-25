import './Sidebar.scss';

function Sidebar(){

    return(
        <div className="Sidebar">
            <div className="brand">Xae</div>
            <div className="socials">
                <div className="logo">
                    <img src="./facebook.png"></img>
                </div>
                <div className="logo">
                    <img src="./instagram.png"></img>
                </div>
                <div className="logo">
                    <img src="./twitter.png"></img>
                </div>
            </div>
            <div className="burger">
                <img src="./burger.png" />
            </div>
        </div>
    );
}

export default Sidebar;