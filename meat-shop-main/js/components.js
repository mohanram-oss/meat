class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header">
            <div class="header__top">
                <div class="header__top-item">
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:+977-1-2-3-466373">+977-1-2-3-466373</a>
                </div>
                <div class="header__top-item">
                    <i class="fa-regular fa-envelope"></i>
                    <a href="mailto:meatshop@gmail.com">meatshop@gmail.com</a>
                </div>
            </div>
            <!-- / header top -->

            <div class="header__bottom">
                <div class="large">
                    <a class="brand-name noselect" href="./"> Meat Shop </a>

                    <nav class="navbar navbar-large">
                        <ul class="navbar-nav navbar_links">
                            <li class="nav-item">
                                <a class="nav-link" href="./"> Home </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="./about.html">About Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="./product.html">Product</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="./blog.html">Blog</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="./contact.html">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                    <!-- / navbar large -->
                </div>

                <nav class="navbar navbar-small">
                    <ul class="navbar-nav navbar_links">
                        <li class="nav-item">
                            <a class="nav-link" href="./"> Home </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="./about.html">About Us</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="./product.html">Product</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="./blog.html">Blog</a>
                        </li>

                        <li class="nav-item">
                             <a class="nav-link" href="./contact.html">Contact</a>
                        </li>
                    </ul>
                </nav>
                <!-- / navbar small -->

                <div class="toggle-btn">
                    <div class="bar"></div>
                </div>
                <!-- / toggle btn -->
            </div>
        </header>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-item">
                <h3>Meat Shop</h3>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
                neque mollitia dolores nostrum repellat exercitationem nulla totam.
                Eveniet, expedita consequuntur.
                </p>
            </div>
            <!-- / footer item -->
        
            <div class="footer-info-container">
                <div class="footer-item">
                    <h4>Useful Links</h4>
                    <ul class="footer-nav">
                        <li><a class="nav-link" href="./">Home</a></li>
                        <li><a class="nav-link" href="./about">About</a></li>
                        <li><a class="nav-link" href="./product.html">Products</a></li>
                        <li><a class="nav-link" href="./blog.html">Blog</a></li>
                        <li><a class="nav-link" href="./contact.html">Contact</a></li>
                    </ul>
                </div>
                <!-- / footer item -->
        
                <div class="footer-item">
                    <h4>Contact With Us</h4>
                    <ul class="footer-contact-list">
                        <li>
                            <i class="fa-solid fa-location-pin"></i>
                            PO Box 1338, Nayabazzar, Nepal
                        </li>
                        <li>
                            <i class="fa-solid fa-envelope"></i>
                            meatshop@gamil.com
                        </li>
                        <li>
                            <i class="fa-solid fa-phone"></i>
                            +1 320 669 2709
                        </li>
                    </ul>
                </div>
                <!-- / footer item -->
            </div>
            <!-- / footer info container -->
        </div>
        <!-- / footer container -->
    </footer>
    `;
  }
}

class BackToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="back-to-top">
            <i class="fa-solid fa-arrow-up"></i>
        </div>`;
  }
}

customElements.define('app-header', Header);
customElements.define('app-footer', Footer);
customElements.define('app-to-top', BackToTop);
