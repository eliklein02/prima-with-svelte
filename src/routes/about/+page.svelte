<div class="about-page-body">
    <div class="mobile-menu" id="mobile-menu">
        <!-- <div id="menu-close" on:click={closeMenu}>Close</div> -->
        <div id="menu-close" on:click={closeMenu}>
            <i class="material-icons" style="font-size:36px">close</i>
        </div>
        <a href="/"
            ><img
                src="/src/img/logo-new.png"
                alt=""
                height="45px"
                width="45px"
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
                src="/src/img/logo-new.png"
                alt=""
                height="30px"
                width="30px"
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
        <div class="about-us-text-half">
            <!-- <p class="about-us-title-text">Who We Are</p> -->
            <div class="about-us-text">
                <div class="prima-in-about">PRIMA</div>
                <div class="residential-in-about">RESIDENTIAL</div>
                management company is a versatile organization that caters to a diverse
                range of needs with expertise and a dedicated team. We offer comprehensive
                solutions for property needs, including leasing, tenant relations,
                maintenance, and asset management. Our vision is to be a trusted
                partner for clients in achieving their goals by staying up-to-date
                with industry trends and delivering exceptional results for long-term
                success.
                <!-- PRIMA RESIDENTIAL management company is a comprehensive and
                versatile organization that caters to a diverse range of needs
                and requirements. With a wealth of expertise and a dedicated
                team, we offer a wide array of services designed to streamline
                operations and optimize performance. From a personal strategic
                planning and financial management to human resources and
                operational efficiency, we provide comprehensive solutions that
                empower businesses to thrive in today's competitive landscape. -->
                <!-- PRIMA RESIDENTIAL takes pride in its holistic approach to management,
                addressing every aspect of the property needs, we understand that
                success lies in the ability to adapt and evolve, which is why we
                stay up-to-date with the latest industry trends and best practices.
                By offering a comprehensive suite of services including leasing,
                tenant relations, prompt maintenance, and full asset management.
                We take pride in our personal relationship with landlords and we
                aim to become a trusted partner for our clients helping them navigate
                challenges and achieve their goals. With our unwavering commitment
                to excellence and a client-centric approach, our management company
                is poised to deliver exceptional results and drive long-term success
                for our clients -->
            </div>
        </div>
        <div class="about-us-services-half">
            <!-- <img
                class="prima-image-about"
                src="/src/img/workers.jpg"
                alt="prima-ad"
            /> -->
            <i class="fa fa-handshake-o icon"></i>
        </div>
    </div>
</div>

<style>
    .icon {
        font-size: 450px;
        position: relative;
        top: 0;
        right: 50px;
        color: #cee0e3;
        z-index: -1;
        /* transform: rotateZ(35deg); */
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
        /* font-weight: bold; */
        margin-top: 0;
    }
    .prima-image-about {
        height: 45%;
        width: auto;
        overflow: hidden;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        .about-us-text-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            /* justify-content: center;
            margin-top: 5rem; */
        }

        .about-us-text-half {
            margin-bottom: 3rem;
            width: 100%;
        }

        .prima-in-about {
            margin-top: 5vh;
        }

        /* .prima-in-about {
            margin-top: 5rem;
            font-size: 2.2rem;
            font-weight: bold;
            margin-bottom: 0;
            font-family: "lust-sans";
        }

        .residential-in-about {
            font-size: 1.9rem;
            font-weight: bold;
            margin-top: 0;
        } */

        .prima-image-about {
            height: 14rem;
            width: 80%;
            /* overflow: hidden; */
            margin: 0 auto;
        }

        .about-us-text {
            font-size: 1.2rem;
            width: 80%;
            line-height: 1.5;
            /* margin: 0 auto; */
        }

        .about-us-services-half {
            display: none;
        }
    }
</style>
