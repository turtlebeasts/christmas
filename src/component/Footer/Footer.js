import React from 'react'
import "./style.css"
import { Github, Instagram, Facebook } from 'react-bootstrap-icons'

export default function Footer() {
    return (
        <div>
            <footer className="page-footer font-small blue pt-4">

                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        <div className="col-md-6 mt-md-0 mt-3">

                            <h5 className="text-uppercase">Christmas</h5>
                            <p>Hope you enjoy your Christmas with your dear one's</p>

                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />

                            <div className="col-md-3 mb-md-0 mb-3">

                                <h5 className="text-uppercase">Social Media Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Github color='white' />
                                        <a href="https://github.com/turtlebeasts"> Github</a>
                                    </li>
                                    <li>
                                        <Instagram color='white' />
                                        <a href="https://www.instagram.com/_turtle_shells/"> Instagram</a>
                                    </li>
                                    <li>
                                        <Facebook color='white' />
                                        <a href="https://www.facebook.com/mriganka.das.568089/"> Facebook</a>
                                    </li>
                                </ul>

                            </div>
                            
                    </div>

                </div>
                <div className="footer-copyright text-center py-3">© 2021 Copyright:
                    Christmas
                </div>

            </footer>
        </div>
    )
}
