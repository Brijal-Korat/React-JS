import React from 'react'

const SectionPopular = () => {
    return (
        <section className="section-popular margin-b-100">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-12">
                        <div className="cr-twocolumns-product row">
                            <div className="cr-product-card col-xl-4">
                                <div className="cr-product-image">
                                    <div className="cr-image-inner zoom-image-hover">
                                        <img src="/src/assets/img/product/9.jpg" alt="product-1" />
                                    </div>
                                    <div className="cr-side-view">
                                        <a href="javascript" className="wishlist">
                                            <i className="ri-heart-line" />
                                        </a>
                                        <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                            <i className="ri-eye-line" />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag" href="javascript">
                                        <i className="ri-shopping-bag-line" />
                                    </a>
                                </div>
                                <div className="cr-product-details">
                                    <div className="cr-brand">
                                        <a href="shop-left-sidebar.html">Snacks</a>
                                        <div className="cr-star">
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-line" />
                                            <p>(4.5)</p>
                                        </div>
                                    </div>
                                    <a href="product-left-sidebar.html" className="title">Best snakes with hazel nut
                                        mix pack 200gm</a>
                                    <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                                </div>
                            </div>
                            <div className="cr-product-card col-xl-4">
                                <div className="cr-product-image">
                                    <div className="cr-image-inner zoom-image-hover">
                                        <img src="/src/assets/img/product/10.jpg" alt="product-1" />
                                    </div>
                                    <div className="cr-side-view">
                                        <a href="javascript" className="wishlist">
                                            <i className="ri-heart-line" />
                                        </a>
                                        <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                            <i className="ri-eye-line" />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag" href="javascript">
                                        <i className="ri-shopping-bag-line" />
                                    </a>
                                </div>
                                <div className="cr-product-details">
                                    <div className="cr-brand">
                                        <a href="shop-left-sidebar.html">Snacks</a>
                                        <div className="cr-star">
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <p>(5.0)</p>
                                        </div>
                                    </div>
                                    <a href="product-left-sidebar.html" className="title">Sweet snakes crunchy nut
                                        mix 250gm
                                        pack</a>
                                    <p className="cr-price"><span className="new-price">$100.00</span> <span className="old-price">$110.00</span></p>
                                </div>
                            </div>
                            <div className="cr-product-card col-xl-4">
                                <div className="cr-product-image">
                                    <div className="cr-image-inner zoom-image-hover">
                                        <img src="/src/assets/img/product/1.jpg" alt="product-1" />
                                    </div>
                                    <div className="cr-side-view">
                                        <a href="javascript" className="wishlist">
                                            <i className="ri-heart-line" />
                                        </a>
                                        <a className="model-oraganic-product" data-bs-toggle="modal" href="#quickview" role="button">
                                            <i className="ri-eye-line" />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag" href="javascript">
                                        <i className="ri-shopping-bag-line" />
                                    </a>
                                </div>
                                <div className="cr-product-details">
                                    <div className="cr-brand">
                                        <a href="shop-left-sidebar.html">Snacks</a>
                                        <div className="cr-star">
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-fill" />
                                            <i className="ri-star-line" />
                                            <p>(4.5)</p>
                                        </div>
                                    </div>
                                    <a href="product-left-sidebar.html" className="title">Best snakes with hazel nut
                                        mix pack 200gm</a>
                                    <p className="cr-price"><span className="new-price">$120.25</span> <span className="old-price">$123.25</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12">
                        <div className="cr-products-rightbar">
                            <img src="/src/assets/img/product/products-rightview.jpg" alt="products-rightview" height={380} />
                            <div className="cr-products-rightbar-content">
                                <h4>Organic &amp; Healthy <br /> Vegetables</h4>
                                <div className="cr-off">
                                    <span>25% <code>OFF</code></span>
                                </div>
                                <div className="rightbar-buttons">
                                    <a href="shop-left-sidebar.html" className="cr-button">
                                        shop now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SectionPopular