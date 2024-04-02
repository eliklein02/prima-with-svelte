<script>
    // import "../app.pcss";
    import "./styles.css";
</script>

<main class="main">
    <slot />

    <div class="footer">
        <div class="footer-logo">
            <img
                src="/src/img/logo-new.png"
                alt="prima-logo"
                height="75px"
                width="auto"
            />
        </div>
        <div class="footer-links">
            <a class="footer-link-a-tag" href="/">Home</a>
            <a class="footer-link-a-tag" href="/about">About</a>
            <a class="footer-link-a-tag" href="/properties">Properties</a>
            <a class="footer-link-a-tag" href="/contact">Contact</a>
        </div>
        <div class="contact-us-links-footer">
            <a href="#" class="contact-us-link-footer">
                <i
                    class="fa fa-linkedin-square"
                    style="font-size:24px; vertical-align: bottom; margin-right: 0.75rem"
                ></i>
                @primaresidential
            </a>
            <a class="contact-us-link-footer" href="tel:+1(215) 220-9927">
                <i
                    class="material-icons"
                    style="font-size:24px; vertical-align: bottom; margin-right: 0.75rem"
                    >phone</i
                >
                +1(215) 220-9927</a
            >
            <a
                class="contact-us-link-footer"
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
    </div>
</main>
