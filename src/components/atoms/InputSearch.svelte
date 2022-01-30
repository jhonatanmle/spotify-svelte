<script>
  import { SearchIcon, CloseIcon } from "@icons/index";

  export let placeholder;

  let searchText = "";

  const cleanSearh = () => {
    searchText = "";
  };
</script>

<div class="input-search">
  <span class="icon">
    <SearchIcon width={22} />
  </span>
  <input bind:value={searchText} {placeholder} />
  {#if searchText}
    <span on:click={cleanSearh} class="icon icon-close">
      <CloseIcon width={17} />
    </span>
  {/if}
</div>

<style lang="scss">
  .input-search {
    font-family: Circular;
    font-size: 14px;

    background-color: #fff;
    border: none;

    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 24px;
    width: 350px;
    min-height: 38px;

    > input {
      border: none;
      outline: none;

      width: 100%;
    }

    .icon {
      height: auto;
      line-height: 0;
      color: #000;
      margin-right: 10px;

      &.icon-close {
        cursor: pointer;
      }
    }
  }
</style>
