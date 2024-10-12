import React from 'react'

const Footer = () => {
    return (
        <footer className="footer padding-t-100 bg-off-white">
            <div className="container">
                <div className="row footer-top padding-b-100">
                    <div className="col-xl-4 col-lg-6 col-sm-12 col-12 cr-footer-border">
                        <div className="cr-footer-logo">
                            <div className="image">
                                <img src="/src/assets/img/logo/logo.png" alt="logo" className="logo" />
                                <img src="/src/assets/img/logo/dark-logo.png" alt="logo" className="dark-logo" />
                            </div>
                            <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                        </div>
                        <div className="cr-footer">
                            <h4 className="cr-sub-title cr-title-hidden">
                                Contact us
                                <span className="cr-heading-res" />
                            </h4>
                            <ul className="cr-footer-links cr-footer-dropdown">
                                <li className="location-icon">
                                    51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                                </li>
                                <li className="mail-icon">
                                    <a href="javascript">example@email.com</a>
                                </li>
                                <li className="phone-icon">
                                    <a href="javascript"> +91 123 4567890</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
                        <div className="cr-footer">
                            <h4 className="cr-sub-title">
                                Company
                                <span className="cr-heading-res" />
                            </h4>
                            <ul className="cr-footer-links cr-footer-dropdown">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="track-order.html">Delivery Information</a></li>
                                <li><a href="policy.html">Privacy Policy</a></li>
                                <li><a href="terms.html">Terms &amp; Conditions</a></li>
                                <li><a href="contact-us.html">contact Us</a></li>
                                <li><a href="faq.html">Support Center</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
                        <div className="cr-footer">
                            <h4 className="cr-sub-title">
                                Category
                                <span className="cr-heading-res" />
                            </h4>
                            <ul className="cr-footer-links cr-footer-dropdown">
                                <li><a href="shop-left-sidebar.html">Dairy &amp; Bakery</a></li>
                                <li><a href="shop-left-sidebar.html">Fruits &amp; Vegetable</a></li>
                                <li><a href="shop-left-sidebar.html">Snack &amp; Spice</a></li>
                                <li><a href="shop-left-sidebar.html">Juice &amp; Drinks</a></li>
                                <li><a href="shop-left-sidebar.html">Chicken &amp; Meat</a></li>
                                <li><a href="shop-left-sidebar.html">Fast Food</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-sm-12 col-12 cr-footer-border">
                        <div className="cr-footer cr-newsletter">
                            <h4 className="cr-sub-title">
                                Subscribe Our Newsletter
                                <span className="cr-heading-res" />
                            </h4>
                            <div className="cr-footer-links cr-footer-dropdown">
                                <form className="cr-search-footer">
                                    <input className="search-input" type="text" placeholder="Search here..." />
                                    <a href="javascript" className="search-btn">
                                        <i className="ri-send-plane-fill" />
                                    </a>
                                </form>
                            </div>
                            <div className="cr-social-media">
                                <span><a href="javascript"><i className="ri-facebook-line" /></a></span>
                                <span><a href="javascript"><i className="ri-twitter-x-line" /></a></span>
                                <span><a href="javascript"><i className="ri-dribbble-line" /></a></span>
                                <span><a href="javascript"><i className="ri-instagram-line" /></a></span>
                            </div>
                            <div className="cr-payment">
                                <div className="cr-insta-slider swiper-container row">
                                    <div className="swiper-wrapper col-xl-3">
                                            <a href="#" className="cr-payment-image">
                                                <img src="/src/assets/img/insta/1.jpg" alt="insta" width={60} height={60} className='mx-1' />
                                                <div className="payment-overlay" />
                                            </a>
                                            <a href="#" className="cr-payment-image">
                                                <img src="/src/assets/img/insta/2.jpg" alt="insta" width={60} height={60} className='mx-1' />
                                                <div className="payment-overlay" />
                                            </a>
                                            <a href="#" className="cr-payment-image">
                                                <img src="/src/assets/img/insta/3.jpg" alt="insta" width={60} height={60} className='mx-1' />
                                                <div className="payment-overlay" />
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cr-last-footer">
                    <p>© <span id="copyright_year" /> <a href="index.html">Carrot</a>, All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer