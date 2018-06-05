import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, we're <strong>Mignon</strong>, a digital consultancy<br />
                    Based in Baltimore MD.</h1>
                    <p>We bring powerful digital marketining tools to artists and small businesses.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Learn More</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
