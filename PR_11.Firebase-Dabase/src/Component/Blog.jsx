import React from 'react'

const Blog = () => {
    return (
        <section className="section-blog padding-b-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-30">
                            <div className="cr-banner">
                                <h2>Latest News</h2>
                            </div>
                            <div className="cr-banner-sub-title">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore lacus vel facilisis. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cr-blog-slider swiper-container row">
                            <div className="swiper-wrapper col-xl-3">
                                    <div className="cr-blog mx-1">
                                        <div className="cr-blog-content">
                                            <span><code>By Admin</code> | <a href="blog-left-sidebar.html">Snacks</a></span>
                                            <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                            <a className="read" href="blog-detail-left-sidebar.html">Read More</a>
                                        </div>
                                        <div className="cr-blog-image">
                                            <img src="/src/assets/img/blog/2.jpg" alt="blog-2" />
                                            <div className="cr-blog-date">
                                                <span>
                                                    10
                                                    <code>oct</code>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cr-blog mx-1">
                                        <div className="cr-blog-content">
                                            <span><code>By Admin</code> | <a href="blog-left-sidebar.html">Food</a></span>
                                            <h5>Best guide to Shopping for organic & natural ingredients.</h5>
                                            <a className="read" href="blog-detail-left-sidebar.html">Read More</a>
                                        </div>
                                        <div className="cr-blog-image">
                                            <img src="/src/assets/img/blog/1.jpg" alt="blog-1" />
                                            <div className="cr-blog-date">
                                                <span>
                                                    09<code>sep</code>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cr-blog mx-1">
                                        <div className="cr-blog-content">
                                            <span><code>By Admin</code> | <a href="blog-left-sidebar.html">Snacks</a></span>
                                            <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                            <a className="read" href="blog-detail-left-sidebar.html">Read More</a>
                                        </div>
                                        <div className="cr-blog-image">
                                            <img src="/src/assets/img/blog/3.jpg" alt="blog-2" />
                                            <div className="cr-blog-date">
                                                <span>
                                                    12
                                                    <code>oct</code>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cr-blog mx-1">
                                        <div className="cr-blog-content">
                                            <span><code>By Admin</code> | <a href="blog-left-sidebar.html">Vegetable</a></span>
                                            <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                            <a className="read" href="blog-detail-left-sidebar.html">Read More</a>
                                        </div>
                                        <div className="cr-blog-image">
                                            <img src="/src/assets/img/blog/2.jpg" alt="blog-3" />
                                            <div className="cr-blog-date">
                                                <span>
                                                    22
                                                    <code>jan</code>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Blog