import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import Design from '../assets/images/Design.jpg';

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Who We Are:</h2>
                            </header>
                            <p>Mignon is a boutique digital marketing consultancy specializing in Facebook, Instagram, Twitter and Google AdWords. We are here to create beautiful content for your social media to increase your profits, and run ad campaigns to attract sales and new customers. Take your brand to the next level with Mignon.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={Design} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Our Services:</h2>
                            </header>
                            <p>At Mignon we project your brands image across multiple social media platforms such as Facebook, Instagram, and Twitter. We create content that reflect your values while attracting potential customers. This crafted content will be posted at specific times to create the most engagement from your following.</p>
                            <p>
Mignon can increase your following organically and through managing paid advertisements. Paid advertising is possible and effective at any budget with Mignon. Not only can you advertise on your own social media platforms, but you can use Google to have your advertisement appear all over the Internet.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>We've Worked With:</h2>
                            </header>
                            <p>Here are just a couple of our great clients.</p>
                        </div>

                        <div className="col-6">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Interested?</h2>
                        </header>
                        <p>To learn more contact us.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Contact</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;