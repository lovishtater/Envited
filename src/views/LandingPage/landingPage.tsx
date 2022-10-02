import './landingPage.css';
import LandingImage from '../../assets/img/LandingPageImage.svg';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return(
        <div className="landing-container">
            <div className="landing">
                <div className="landing-text-container">
                    <h3>
                        Imagine if <span>Snapchat</span> had events
                    </h3>
                    <h6>
                        Easily host and share events with your friends <br/> across any social media.
                    </h6>
                    <div className="create-btn inside">
                        <Link to='/create'>
                            <button>Create my event</button>
                        </Link>
                    </div>
                </div>
                <div className="landing-img">
                    <img src={LandingImage} alt='birthday event landing image'/>
                </div>
                <div className="create-btn outside">
                    <Link to='/create'>
                        <button>Create my event</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}