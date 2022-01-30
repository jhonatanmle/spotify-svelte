<script>
  export let title = "";
  export let imgUrl = null;
  export let backgroundColor = "rgb(230, 30, 50)";
</script>

<a
  class="card-explore"
  href="#explore"
  style="background-color: {backgroundColor}"
>
  <h3 class="title">{title}</h3>

  <div class="img-container">
    <img src={imgUrl} alt="Género" />
  </div>
</a>

<style lang="scss">
  .card-explore {
    display: inline-block;
    background-color: rgb(230, 30, 50);
    color: var(--text-base);

    position: relative;
    border-radius: 8px;
    padding: 16px;
    height: 220px;
    width: 220px;
    overflow: hidden;

    @media screen and (min-width: 1020px) {
      height: 180px;
      width: 180px;
    }

    .title {
      font-size: 26px;
      margin: 0;
    }

    .img-container {
      position: absolute;
      bottom: 0;
      right: 0;

      width: 120px;
      object-fit: cover;

      > img {
        width: 90%;
        transform: rotate(25deg) translate(30%, -2%);
      }
    }
  }
</style>
