import React from 'react'

const HeroSlider = () => {
    return (
        <section className="section-hero padding-b-100 next">
            <div className="cr-slider swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="cr-hero-banner cr-banner-image-two">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="cr-left-side-contain slider-animation">
                                            <h5><span>100%</span> Organic Fruits</h5>
                                            <h1>Explore fresh &amp; juicy fruits.</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                                beatae consequuntur.</p>
                                            <div className="cr-last-buttons">
                                                <a href="shop-left-sidebar.html" className="cr-button">
                                                    shop now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="cr-hero-banner cr-banner-image-one">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="cr-left-side-contain slider-animation">
                                            <h5><span>100%</span> Organic Vegetables</h5>
                                            <h1>The best way to stuff your wallet.</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                                beatae consequuntur.</p>
                                            <div className="cr-last-buttons">
                                                <a href="shop-left-sidebar.html" className="cr-button">
                                                    shop now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination" />
            </div>
        </section>

    )
}

export default HeroSlider