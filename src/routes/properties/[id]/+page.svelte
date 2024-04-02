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
    console.log(property.imageUrl);
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
    <!-- <div class="property-image-container-each-property">
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

    </div> -->
    <div
        class="full-property-img"
        style="background-image: url({property.imageUrl});"
    >
        <div class="property-info-on-hero">
            <div>
                <p class="street-on-property-page">
                    {property.address}
                </p>
                <p class="city-state-on-property-page">
                    {property.city + ", " + property.state}
                </p>
            </div>
        </div>
    </div>
    <div class="map-and-explore">
        <div class="map">
            <div
                id="map"
                bind:this={mapContainer}
                style="width: 100%; height: 400px;"
                class="map"
            ></div>
        </div>
        <div class="explore-further">
            <a class="apartments-link" href={property.url}
                >Explore further at {property.website}</a
            >
            {#if property.website === "Zillow.com"}
                <a href={property.url}>
                    <img
                        src="/src/img/z-logo-default.svg"
                        alt=""
                        class="zillow-logo"
                    />
                </a>
            {:else if property.website === "Apartments.com"}
                <a href={property.url}>
                    <img
                        src="/src/img/apartments-com-logo.png"
                        alt=""
                        class="apartments-com-logo"
                    />
                </a>
            {:else if property.website === "Trullo.com"}
                <p>trullo</p>
            {:else}
                <p>website</p>
            {/if}
        </div>
    </div>
</div>

<style>
    .zillow-logo {
        height: 75px;
    }

    .apartments-com-logo {
        height: 85px;
    }

    .apartments-link {
        font-size: 1.7rem;
        margin-bottom: 1rem;
        color: black;
        text-decoration: none;
    }

    .map {
        width: 50%;
        /* height: 400px; */
    }

    .explore-further {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .map-and-explore {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        margin: 2rem;
    }

    .property-info-on-hero {
        /* font-size: 3rem; */
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
        );
        padding: 1rem;
        color: white;
    }

    .full-property-img {
        height: 70vh;
        width: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        text-align: center;
        font-family: Montserrat;
    }

    .street-on-property-page {
        font-size: 3.7rem;
        margin: 0;
        margin-bottom: 1rem;
    }

    .city-state-on-property-page {
        font-size: 2rem;
        margin: 0;
    }

    @media (max-width: 768px) {
        .full-property-img {
            height: 80vh;
        }

        .street-on-property-page {
            font-size: 2.2rem;
        }

        .city-state-on-property-page {
            font-size: 1.7rem;
        }

        .zillow-logo {
            height: 55px;
        }

        .apartments-com-logo {
            height: 65px;
        }

        .map-and-explore {
            flex-direction: column-reverse;
        }

        .map {
            width: 100%;
        }

        .explore-further {
            width: 100%;
            margin-block: 2rem;
            text-align: center;
        }
    }
</style>
