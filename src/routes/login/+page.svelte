<script>
    export let form;
</script>

<h1>Admin Login</h1>
<form action="?/login" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required />
    <button type="submit">Login</button>
    {#if form?.invalid}
        <p>Invalid username or password</p>
    {/if}
</form>
