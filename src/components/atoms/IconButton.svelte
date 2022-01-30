<script>
</script>

<button class="icon-btn">
  <span class="icon"><slot /></span>
</button>

<style lang="scss">
  .icon-btn {
    color: var(--text-base);
    background-color: #000;
    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;

    cursor: pointer;

    .icon {
      height: auto;
      line-height: 0;
    }
  }
</style>
