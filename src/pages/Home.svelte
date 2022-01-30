<script>
  import Screen from "../layouts/Screen.svelte";
  import Sidebar from "../layouts/Sidebar.svelte";
  import Search from "./Search.svelte";
</script>

<div class="home-container">
  <Sidebar />
  <Screen>
    <Search />
  </Screen>
</div>

<style>
  .home-container {
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>
