<div class="about-page-body">
    <div class="mobile-menu" id="mobile-menu">
        <!-- <div id="menu-close" on:click={closeMenu}>Close</div> -->
        <div id="menu-close" on:click={closeMenu}>
            <i class="material-icons" style="font-size:36px">close</i>
        </div>
        <a href="/"
            ><img
                src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282908/assets/images/logo-new.png"
                alt="logo"
                height="40px"
                width="auto"
                class="logo-mobile"
            /></a
        >
        <a class="navbar-mobile-links" href="/about">About</a>
        <a class="navbar-mobile-links" href="/properties">Properties</a>
        <a class="navbar-mobile-links" href="/contact">Contact</a>
    </div>
    <div class="navbar-all">
        <a href="/"
            ><img
                src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282907/assets/images/logo-new.png"
                alt="logo"
                height="40px"
                width="auto"
                class="logo"
            /></a
        >
        <a class="navbar-links" href="/about">About</a>
        <a class="navbar-links" href="/properties">Properties</a>
        <a class="navbar-links" href="/contact">Contact</a>
    </div>
    <div class="about-us-text-container">
        <diV id="menu-open-div">
            <i
                class="material-icons"
                on:click={openMobileMenu}
                style="font-size:36px">menu</i
            >
        </diV>
        <div class="about-page-row-flex">
            <div class="about-us-text-half">
                <div class="about-us-text">
                    <div class="about-image-logo-container">
                        <img
                            src="/src/img/logo-new.png"
                            alt=""
                            class="logo-in-about"
                        />
                    </div>

                    <div class="prima-in-about">PRIMA</div>
                    <div class="residential-in-about">RESIDENTIAL</div>
                    management company is a versatile organization that caters to
                    a diverse range of needs with expertise and a dedicated team.
                    We offer comprehensive solutions for property needs, including
                    leasing, tenant relations, maintenance, and asset management.
                    Our vision is to be a trusted partner for clients in achieving
                    their goals by staying up-to-date with industry trends and delivering
                    exceptional results for long-term success.
                </div>
            </div>
            <div class="about-us-services-half">
                <div class="services">
                    <div class="service">
                        <img
                            src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282669/assets/icons/tenant-relations.svg"
                            alt=""
                            height="115px"
                            width="115px"
                            style="filter: invert(43%) sepia(9%) saturate(1655%) hue-rotate(143deg) brightness(89%) contrast(89%);
                            "
                        />
                        Tenant Relations
                    </div>
                    <div class="service">
                        <img
                            src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282669/assets/icons/building.svg"
                            alt=""
                            height="115px"
                            width="115px"
                            style="filter: invert(43%) sepia(9%) saturate(1655%) hue-rotate(143deg) brightness(89%) contrast(89%);
                            "
                        /> Asset Management
                    </div>
                    <div class="service">
                        <img
                            src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282669/assets/icons/leasing.svg"
                            alt=""
                            height="115px"
                            width="115px"
                            style="filter: invert(43%) sepia(9%) saturate(1655%) hue-rotate(143deg) brightness(89%) contrast(89%);
                            "
                        /> Leasing
                    </div>
                    <div class="service">
                        <img
                            src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282669/assets/icons/financial-advisor.svg"
                            alt=""
                            height="115px"
                            width="115px"
                            style="filter: invert(43%) sepia(9%) saturate(1655%) hue-rotate(143deg) brightness(89%) contrast(89%);
                            "
                        /> Strategic Planning
                    </div>
                    <div class="service">
                        <img
                            src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282669/assets/icons/personal-finance.svg"
                            alt=""
                            height="115px"
                            width="115px"
                            style="filter: invert(43%) sepia(9%) saturate(1655%) hue-rotate(143deg) brightness(89%) contrast(89%);
                            "
                        />Finance Management
                    </div>
                    <!-- <div class="service">
                        <img
                            src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282669/assets/icons/screwdriver.svg"
                            alt=""
                            height="115px"
                            width="115px"
                            class="service-icon"
                            style="filter: invert(43%) sepia(9%) saturate(1655%) hue-rotate(143deg) brightness(89%) contrast(89%);"
                        />Maintenance
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .logo-in-about {
        height: 10rem;
        width: auto;
        position: relative;
        top: 0;
        right: 15px;
    }

    .services {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        height: 75%;
    }

    .service {
        background-color: #f7f7f7;
        margin: 0.3rem;
        display: flex;
        padding: 0.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* border: 2px solid black; */
        font-size: 1.2rem;
        gap: 1rem;
        color: #436f78;
        border-radius: 10px;
        text-align: center;
    }

    .about-page-row-flex {
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .prima-in-about {
        font-size: 5.5rem;
        margin-bottom: 0;
        font-family: "lust-sans";
        line-height: 0.7;
    }

    .residential-in-about {
        display: block;
        font-size: 2rem;
        margin-top: 0;
    }

    .about-us-services-half {
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        .about-us-text-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
            height: auto;
        }

        .about-us-text-half {
            width: 100%;
            padding-bottom: 0;
            margin-block: 2rem;
        }

        .prima-image-about {
            height: 14rem;
            width: 80%;
            margin: 0 auto;
        }

        .about-us-text {
            font-size: 1.2rem;
            width: 100%;
            line-height: 1.5;
        }

        .about-us-services-half {
            width: 90%;
            margin: 0 auto;
        }

        .services {
            margin: 0 auto;
            height: 100%;
            width: 100%;
        }

        .about-page-row-flex {
            flex-direction: column;
            margin: 0 auto;
        }

        .logo-in-about {
            height: 10rem;
            margin: 0 auto;
            position: static;
        }

        .about-image-logo-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
        }
    }
</style>
