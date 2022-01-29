<main class="main">
  <slot />
</main>

<style>
  .main {
    background-color: var(--background-base);
    color: var(--text-base);

    height: 100vh;
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>
