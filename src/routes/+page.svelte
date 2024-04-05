<script>
	import "./styles.css";
	let selectedOption = "all";
	export let data;

	// const buttonClose = document.getElementById("menu-close");
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

<div class="main-route-body">
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
	<div class="navbar-main">
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
	</div>

	<div class="parallax-1-container">
		<diV id="menu-open-div">
			<i
				class="material-icons"
				on:click={openMobileMenu}
				style="font-size:36px">menu</i
			>
		</diV>
		<div class="prima-text-container">
			<a href="/"
				><img
					src="https://res.cloudinary.com/da2xsrb3n/image/upload/v1712282907/assets/images/logo-new.png"
					alt="logo"
					height="75px"
					width="auto"
					class="logo-2"
				/></a
			>
			<h1 class="prima-text">PRIMA</h1>
			<h3 class="residential-text">RESIDENTIAL</h3>
			<p class="yatll-text">Your access to luxury living</p>
		</div>
	</div>

	<!-- featured properties -->
	<div class="featured-properties-text-container">
		<p class="featured-properties-text">Explore Featured Properties</p>
		<div class="featured-properties-container">
			{#each data.properties as property, i}
				{#if i < 4}
					<a
						class="property-image-link"
						href={`/properties/${property.id}`}
					>
						<div class="featured-property">
							<div
								class="featured-property-1-image"
								style="background-image: url({property.imageUrl});"
							></div>
							<div class="featured-property-text">
								<p>
									{property.address} <br />
									<span class="city-state"
										>{property.city}, {property.state}</span
									>
								</p>
							</div>
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</div>

	<div class="ers-text-container">
		<p class="ers-text">Effortless Rental Solutions</p>
	</div>

	<!-- content prallax -->

	<div class="parallax-container-content-each">
		<div class="parallax-text-side">
			<p class="parallax-text-side-title">Remove The Hassle</p>
			<p class="parallax-text-side-text">
				Your comprehensive solution for all your property managemenet
				needs.
			</p>
			<a class="properties-link" href="/properties">View Properties</a>
		</div>
		<div class="parallax-image-side">
			<div class="within-right red"></div>
		</div>
	</div>
	<div
		class="parallax-container-content-each parallax-container-content-each-2"
	>
		<div class="parallax-image-side">
			<div class="within-right blue"></div>
		</div>
		<div class="parallax-text-side">
			<p class="parallax-text-side-title">Take a Deep Breath...Finally</p>
			<p class="parallax-text-side-text">
				Empowering businesses with our expertise in strategic planning,
				financial managemenet, tenant relations, and asset management.
			</p>
			<a class="properties-link" href="/contact">Contact Us</a>
		</div>
	</div>
</div>
