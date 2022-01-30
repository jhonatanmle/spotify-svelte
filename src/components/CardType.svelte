<script>
  export let title = "";
  export let imgUrl = null;
  export let backgroundColor = "rgb(230, 30, 50)";
</script>

<a class="card-type" href="#test" style="background-color: {backgroundColor}">
  <h3 class="title">{title}</h3>

  <div class="img-container">
    <img src={imgUrl} alt="Género" />
  </div>
</a>

<style lang="scss">
  .card-type {
    display: inline-block;
    color: var(--text-base);

    position: relative;
    border-radius: 8px;
    padding: 16px;
    min-height: 220px;
    min-width: 422px;
    overflow: hidden;

    .title {
      font-size: 40px;
      margin: 0;
    }

    .img-container {
      position: absolute;
      bottom: 0;
      right: 0;

      width: 120px;
      object-fit: cover;

      > img {
        width: 100%;
        transform: rotate(25deg) translate(18%, -2%);
      }
    }
  }
</style>
