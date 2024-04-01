<script>
    export let data;
    const properties = data.properties;
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

<h1>Hi, Moishe F.</h1>

<h3>Edit Properties</h3>
{#if properties.length !== 0}
    {#each properties as property}
        <div style="border: 1px solid black;">
            <h3>{property.address}</h3>
            <button>Edit</button>
            <form action="?/deleteProperty&id={property.id}" method="post">
                <button type="submit">Delete</button>
            </form>
        </div>
    {/each}
{:else}
    <p>No properties to display</p>
{/if}
<br />
<h3>Add New Property</h3>
<form action="?/addProperty" method="post" enctype="multipart/form-data">
    <input type="text" name="address" placeholder="Address" />
    <br />
    <input type="text" name="city" placeholder="City" />
    <br />
    <input type="text" name="state" placeholder="State" />
    <br />
    <input
        type="text"
        placeholder="Online Link (Zillow or Apartments.com"
        name="url"
    />
    <br>
    <input type="text" name="website" placeholder="Website" />
    <br />
    <input type="file" name="file" id="file-upload" />
    <br />
    <input type="submit" />
</form>
