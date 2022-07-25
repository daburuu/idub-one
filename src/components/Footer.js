import './Footer.scss';

function Footer(){
    return (
        <div className="Footer">
            <img src="./man-on-moon.png" />
            <div className="footer-block left">
                <div className="title">
                    Exploration
                </div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id potenti faucibus nec, rhoncus, vulputate
                </div>
            </div>
            <div className="arrow">
                <img src="./arrow.png" />
            </div>
            <div className="footer-block right">
                <div className="title">
                    Footprint
                </div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur 
                </div>
            </div>
        </div>
    );
}

export default Footer;