import React from 'react'
import './Footer.css'
import '../Navbar/Navbar.css'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
const Footer = () => {
    return (

        <footer className="text-center text-lg-start bg-light text-muted Footer " >

            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom section"
            >

                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div >
                  <a href='https://www.facebook.com/'> <BsFacebook size={27} color="#fff"  /></a>
                  <a href='https://www.instagram.com/'> <BsInstagram size={27} color="#fff"  /></a>
                  <a href='https://www.twitter.com/'> <BsTwitter size={27} color="#fff"  /></a>
                </div>

            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mobhide">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mobhide">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mobhide">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Youth Avenue, 5th Lane,</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +995 555 555</p>
                            <p><i className="fas fa-print me-3"></i> +995 555 551</p>
                        </div>

                    </div>

                </div>
            </section>


        </footer>


    )
}

export default Footer