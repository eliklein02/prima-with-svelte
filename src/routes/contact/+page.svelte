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
<div class="contact-page-container">
    <diV id="menu-open-div">
        <i
            class="material-icons"
            on:click={openMobileMenu}
            style="font-size:36px">menu</i
        >
    </diV>
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
    <div class="contact-page-content">
        <div class="contact-us-ways">
            <div class="contact-us-text-container">
                <div class="contact-us-title">Thank you for visiting.</div>
                <p class="contact-us-text">
                    We encourage you to contact us by phone, email, or sending
                    us a message, with any questions or comments you may have.
                    We look forward to hearing from you soon.
                </p>
            </div>
            <div class="contact-us-links">
                <a href="#" class="contact-us-link">
                    <i
                        class="fa fa-linkedin-square"
                        style="font-size:24px; vertical-align: bottom; margin-right: 0.75rem"
                    ></i>
                    @primaresidential
                </a>
                <a class="contact-us-link" href="tel:+1(215) 220-9927">
                    <i
                        class="material-icons"
                        style="font-size:24px; vertical-align: bottom; margin-right: 0.75rem"
                        >phone</i
                    >
                    +1(215) 220-9927</a
                >
                <a
                    class="contact-us-link"
                    href="mailto:office@primaresidential.com"
                >
                    <i
                        class="material-icons"
                        style="font-size:24px; vertical-align: bottom; margin-right: 0.75rem"
                        >mail_outline</i
                    >
                    office@primaresidential.com</a
                >
            </div>
            <!-- <i class="material-icons icon">phone</i> -->
        </div>
        <div class="form-container">
            <i class="material-icons" style="font-size: 75px;">mail_outline</i>
            <form
                action="https://formsubmit.co/eliklein02@gmail.com"
                method="POST"
                class="form"
            >
                <input type="text" name="name" required placeholder="Name" />
                <input type="email" name="email" required placeholder="Email" />
                <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                />
                <textarea name="body" placeholder="Message"></textarea>
                <input type="submit" class="submit-form" />
            </form>
        </div>
    </div>
</div>

<style>
    .icon {
        font-size: 650px;
        position: absolute;
        top: 50%;
        left: 35%;
        transform: translate(-50%, -50%);
        color: #cee0e3;
        z-index: -1;
        /* transform: rotateZ(35deg); */
    }

    .contact-page-container {
        height: 100vh;
        width: 100%;
        /* background-color: #436f78; */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-family: Montserrat;
    }

    .contact-page-content {
        display: flex;
        flex-direction: row;
        color: #436f78;
        width: 100%;
        height: 100%;
    }

    .contact-us-ways {
        /* font-size: 2rem; */
        text-align: left;
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .contact-us-text-container {
        margin: 1rem;
        width: 75%;
        margin: 0 auto;
    }

    .contact-us-title {
        font-size: 1.7rem;
        /* margin: 1rem; */
        /* width: 75%; */
        margin: 0 auto 1rem auto;
    }

    .contact-us-text {
        margin: 1rem;
        font-size: 1.3rem;
        /* width: 85%; */
        line-height: 1.5;
        margin: 0 auto 2rem auto;
    }

    .contact-us-link {
        color: #436f78;
        text-decoration: none;
        font-size: 1.4rem;
        display: block;
        margin: 1rem 0 0 0;
    }

    .contact-us-links {
        width: 75%;
        text-align: left;
        margin: 0 auto;
    }

    .form-container {
        width: 35%;
        /* margin: 0 auto; */
        /* background-color: #436f78; */
        background-image: linear-gradient(
            to right,
            rgba(67, 111, 120, 0.4),
            rgba(67, 111, 120, 0.4)
        );
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .form {
        width: 75%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .form input {
        margin: 0.5rem 1rem;
        padding: 1rem;
        width: 100%;
        border-radius: 5px;
        border: 2px solid #436f78;
    }

    .form textarea {
        margin: 0.5rem 1rem;
        padding: 1rem;
        width: 100%;
        border-radius: 5px;
        border: 2px solid #436f78;
    }

    .submit-form {
        margin-block: 1rem;
        padding: 1rem;
        width: 35% !important;
        border-radius: 5px;
        border: none;
        background-color: #f4f4f4;
        color: #436f78;
        font-size: 1.4rem;
        cursor: pointer;
        margin-left: auto !important;
        margin-right: 0 !important;
    }

    @media (max-width: 768px) {
        .contact-page-content {
            display: flex;
            flex-direction: column;
            color: #436f78;
            width: 100%;
            height: 100%;
        }

        .icon {
            font-size: 350px;
        }

        .contact-us-ways {
            /* font-size: 2rem; */
            text-align: left;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .contact-us-text-container {
            margin: 1rem;
            width: 85%;
            margin: 0 auto;
        }

        .contact-us-text {
            margin: 1rem auto;
            font-size: 1.2rem;
            width: 100%;
            line-height: 1.4;
            /* margin: 0 auto 1rem auto; */
        }

        .contact-us-title {
            font-size: 1.7rem;
            margin-top: 4rem;
        }

        .contact-us-link {
            color: #436f78;
            text-decoration: none;
            font-size: 1rem;
            display: block;
            margin: 1rem 0 0 0;
        }

        .contact-us-links {
            width: 85%;
            text-align: left;
            margin: 0 auto 1rem auto;
        }

        .form-container {
            width: 100%;
            /* margin: 0 auto; */
            /* background-color: #436f78; */
            background-image: linear-gradient(
                to right,
                rgba(67, 111, 120, 0.4),
                rgba(67, 111, 120, 0.4)
            );
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-block: 1rem;
        }

        .form {
            width: 85%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .form input {
            margin: 0.5rem 1rem;
            padding: 1rem;
            width: 100%;
            border-radius: 5px;
            border: 2px solid #436f78;
        }

        .form textarea {
            margin: 0.5rem 1rem;
            padding: 1rem;
            width: 100%;
            border-radius: 5px;
            border: 2px solid #436f78;
        }

        .submit-form {
            margin-block: 1rem;
            padding: 1rem;
            width: 100% !important;
            border-radius: 5px;
        }
    }
</style>
