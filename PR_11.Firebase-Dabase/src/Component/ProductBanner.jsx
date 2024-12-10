import React from 'react'

const ProductBanner = () => {
    return (
        <section className="section-product-banner padding-b-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cr-banner-slider swiper-container row">
                            <div className="swiper-wrapper col-xl-4">
                                    <div className="cr-product-banner-image mx-2">
                                        <img src="/src/assets/img/product-banner/1.jpg" alt="product-banner" />
                                        <div className="cr-product-banner-contain">
                                            <h5>Healthy <br /> Bakery Products</h5>
                                            <p><span className="percent">30%</span> Off <span className="text">on first order</span>
                                            </p>
                                            <div className="cr-product-banner-buttons">
                                                <a href="shop-left-sidebar.html" className="cr-button">shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cr-product-banner-image mx-2">
                                        <img src="/src/assets/img/product-banner/2.jpg" alt="product-banner" />
                                        <div className="cr-product-banner-contain">
                                            <h5>Fresh <br />Snacks &amp; Sweets</h5>
                                            <p><span className="percent">20%</span> Off <span className="text">on first order</span>
                                            </p>
                                            <div className="cr-product-banner-buttons">
                                                <a href="shop-left-sidebar.html" className="cr-button">shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cr-product-banner-image mx-2">
                                        <img src="/src/assets/img/product-banner/3.jpg" alt="product-banner" />
                                        <div className="cr-product-banner-contain">
                                            <h5>Fresh &amp; healthy <br /> Organic Fruits</h5>
                                            <p><span className="percent">35%</span> Off <span className="text">on first order</span>
                                            </p>
                                            <div className="cr-product-banner-buttons">
                                                <a href="shop-left-sidebar.html" className="cr-button">shop now</a>
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

export default ProductBanner