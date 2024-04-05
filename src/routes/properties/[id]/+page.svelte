<script>
    import { onMount, onDestroy } from "svelte";
    import axios from "axios";
    import mapboxgl from "mapbox-gl";
    mapboxgl.accessToken =
        "pk.eyJ1IjoiZWxpa2xlaW4wMiIsImEiOiJjbHVrZnE0ZzAwcTZ5MnBudXB4ZjVpYXZrIn0.d9Z7S5RUP-DnYmDoV8lSBA";

    export let data;
    const property = data.property;

    let map;

    let address =
        property.address + ", " + property.city + ", " + property.state;

    axios
        .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`,
            {
                params: {
                    access_token: mapboxgl.accessToken,
                },
            },
        )
        .then((response) => {
            let [longitude, latitude] = response.data.features[0].center;

            map = new mapboxgl.Map({
                container: "map",
                style: "mapbox://styles/mapbox/streets-v11",
                center: [longitude, latitude],
                zoom: 17,
            });
            let marker = new mapboxgl.Marker();
            marker.setLngLat([longitude, latitude]);
            marker.addTo(map);
            map.addControl(new mapboxgl.NavigationControl(), "top-right");
        })
        .catch((error) => {
            console.error("Error geocoding address:", error);
        });
</script>

<div class="navbar-all">
    <a href="/"
        ><img
            src="/src/img/logo-new.png"
            alt=""
            height="40px"
            width="auto"
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
                height="40px"
                width="auto"
                class="logo-mobile"
            /></a
        >
        <a class="navbar-mobile-links" href="/about">About</a>
        <a class="navbar-mobile-links" href="/properties">Properties</a>
        <a class="navbar-mobile-links" href="/contact">Contact</a>
    </div>
    <!-- <div id="map"></div> -->

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
        <div class="map-container">
            <div id="map" style="width: 100%;"></div>
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

    .map-container {
        width: 50%;
        /* height: 400px; */
        height: 25rem;
    }

    #map {
        height: 100%;
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
        align-items: center;
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
            height: 55px;
        }

        .map-and-explore {
            flex-direction: column-reverse;
            margin: 1rem;
        }

        .explore-further {
            margin-block: 4rem;
        }
        .map-container {
            width: 100%;
        }

        #map {
            width: 100%;
            height: 25rem;
        }

        .explore-further {
            width: 100%;
            margin-block: 2rem;
            text-align: center;
        }

        .full-property-img {
            align-items: flex-end;
        }
    }
</style>
