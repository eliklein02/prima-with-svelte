<script>
    export let data;
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

<!-- {#each data.properties as property}
    <div>{property.fullAddress}</div>
{/each} -->

<!-- <Properties {data} /> -->
<div class="navbar-all">
    <a href="/"
        ><img
            src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282907/assets/images/logo-new.png"
            alt=""
            height="40px"
            width="auo"
            class="logo"
        /></a
    >
    <a class="navbar-links" href="/about">About</a>
    <a class="navbar-links" href="/properties">Properties</a>
    <a class="navbar-links" href="/contact">Contact</a>
</div>

<div class="masonry">
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
    {#each data.properties as property, i (property.id)}
        <a
            href="/properties/{property.id}"
            class="properties-page-each-property-link"
        >
            <div class="masonry-item">
                <div
                    class="masonry-item-img"
                    style="background-image: url({property.imageUrl});"
                ></div>
                <div class="masonry-item-text-container">
                    <p class="masonry-item-address">{property.address}</p>
                    <p class="masonry-item-city-state">
                        {property.city}, {property.state}
                    </p>
                </div>
            </div>
        </a>
    {/each}
</div>

<style>
</style>
