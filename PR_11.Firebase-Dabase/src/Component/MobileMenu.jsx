import React from 'react'

const MobileMenu = () => {
    return (
        <>
            <div className="cr-sidebar-overlay" />
            <div id="cr_mobile_menu" className="cr-side-cart cr-mobile-menu">
                <div className="cr-menu-title">
                    <span className="menu-title">My Menu</span>
                    <button type="button" className="cr-close">×</button>
                </div>
                <div className="cr-menu-inner">
                    <div className="cr-menu-content">
                        <ul>
                            <li className="dropdown drop-list">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="dropdown drop-list">
                                <span className="menu-toggle" />
                                <a href="javascript" className="dropdown-list">Category</a>
                                <ul className="sub-menu">
                                    <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                    <li><a href="shop-right-sidebar.html">Shop Right sidebar</a></li>
                                    <li><a href="shop-full-width.html">Full Width</a></li>
                                </ul>
                            </li>
                            <li className="dropdown drop-list">
                                <span className="menu-toggle" />
                                <a href="javascript" className="dropdown-list">product</a>
                                <ul className="sub-menu">
                                    <li><a href="product-left-sidebar.html">product Left sidebar</a></li>
                                    <li><a href="product-right-sidebar.html">product Right sidebar</a></li>
                                    <li><a href="product-full-width.html">Product Full Width </a></li>
                                </ul>
                            </li>
                            <li className="dropdown drop-list">
                                <span className="menu-toggle" />
                                <a href="javascript" className="dropdown-list">Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="track-order.html">Track Order</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="faq.html">Faq</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="policy.html">Policy</a></li>
                                </ul>
                            </li>
                            <li className="dropdown drop-list">
                                <span className="menu-toggle" />
                                <a href="javascript" className="dropdown-list">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-left-sidebar.html">Left Sidebar</a></li>
                                    <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                                    <li><a href="blog-full-width.html">Full Width</a></li>
                                    <li><a href="blog-detail-left-sidebar.html">Detail Left Sidebar</a></li>
                                    <li><a href="blog-detail-right-sidebar.html">Detail Right Sidebar</a></li>
                                    <li><a href="blog-detail-full-width.html">Detail Full Width</a></li>
                                </ul>
                            </li>
                            <li className="dropdown drop-list">
                                <span className="menu-toggle" />
                                <a href="javascript">Element</a>
                                <ul className="sub-menu">
                                    <li><a href="elements-products.html">Products</a></li>
                                    <li><a href="elements-typography.html">Typography</a></li>
                                    <li><a href="elements-buttons.html">Buttons</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu