<script>
    import { onMount } from "svelte";

    export let data;
    const property = data.property;

    let mapContainer;

    onMount(async () => {
        const geocoder = new google.maps.Geocoder();
        const address =
            property.address + ", " + property.city + ", " + property.state; // replace with your address

        geocoder.geocode({ address: address }, function (results, status) {
            if (status == "OK") {
                const map = new google.maps.Map(mapContainer, {
                    center: results[0].geometry.location,
                    zoom: 15,
                });

                new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: map,
                });
            } else {
                alert(
                    "Geocode was not successful for the following reason: " +
                        status,
                );
            }
        });
    });
</script>

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

<div class="property-container">
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
    <div class="property-image-container-each-property">
        <img class="property-image" src={property.imageUrl} alt="" />
    </div>

    <div class="property-address">
        <p class="street">{property.address}</p>
        <p class="city-state-id-page">{property.city}, {property.state}</p>
    </div>

    <div class="flex-to-reverse">
        
        <div class="find-this-on">
            <i
                class="material-icons apartments-icon"
                style="font-size:86px; margin-bottom:2rem">home</i
            >
            <a class="apartments-link" href={property.url}
                >Find property on {property.website}</a
            >
        </div>

        <div class="map-wrapper">
            <div
                id="map"
                bind:this={mapContainer}
                style="width: 100%; height: 400px;"
                class="map"
            ></div>
        </div>

    </div>
</div>
