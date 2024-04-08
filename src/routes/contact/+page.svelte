<script>
    const openMobileMenu = () => {
        const buttonOpen = document.getElementById("menu-open-div");
        const menu = document.getElementById("mobile-menu");
        menu.style.display = "flex";
        buttonOpen.style.display = "none";
    };

    const closeMenu = () => {
        const buttonOpen = document.getElementById("menu-open-div");
        const menu = document.getElementById("mobile-menu");
        buttonOpen.style.display = "block";
        menu.style.display = "none";
    };
</script>

<div class="navbar-all">
    <a href="/"
        ><img
            src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282907/assets/images/logo-new.png"
            alt=""
            height="40px"
            width="auto"
            class="logo"
        /></a
    >
    <a class="navbar-links" href="/about">About</a>
    <a class="navbar-links" href="/properties">Properties</a>
    <a class="navbar-links" href="/contact">Contact</a>

    <p class="yatll-text">Your access to luxury living</p>
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
                src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282907/assets/images/logo-new.png"
                alt=""
                height="40px"
                width="auto"
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
</style>
