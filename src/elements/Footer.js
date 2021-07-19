import { Row, Col } from 'react-materialize';
import { SocialIcon } from "react-social-icons";
import { Link } from 'react-router-dom';

export default function Foot() {
    return (<div className='grey lighten-4'><br/>
        <Row 

        >
            {/* <h5 className='text-grey darken-3 footer_title'>Instagram Feed</h5> */}

        </Row>
        <Row >
            <Col
                className='left'
            >
                <SocialIcon
                    bgColor="#ff5a01"
                    url="https://instagram.com/pauldowlandtile"
                />
                <SocialIcon

                    url="https://www.facebook.com/pauldowlandtile" />


                <SocialIcon
                    url="https://twitter.com/pauldowlandtile" />
            </Col><Col>          <Link className='black-text' to="/pricing">Pricing</Link>
            </Col>
        </Row>

        <div className="footer-copyright">
            © 2019-<noscript>2018</noscript><script type="text/javascript">document.write(new Date().getFullYear());</script>2020 Deepturn Ltd, All rights reserved.
                <a className="grey-text text-darken-1 right" href="https://github.com/LandoLabrum/Deepturn-Ltd/blob/main/LICENSE">MIT License</a>
            <br />
        </div>

    </div>
    );
}