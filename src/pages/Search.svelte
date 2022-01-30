<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { CardType, CardExplore } from "@components/index.js";
  import { IconButton, InputSearch } from "@components/atoms/index.js";
  import { ArrowLeftIcon } from "@icons/index.js";

  import listTypes from "../mocks/song-types";
  import listExplore from "../mocks/explore-types";
</script>

<section>
  <header class="header">
    <IconButton><ArrowLeftIcon width={11} /></IconButton>
    <div class="search-container">
      <InputSearch placeholder="Artistas, canciones o pódcasts" />
    </div>
  </header>
  <div>
    <h2>Tus géneros más escuchados</h2>
    <div class="types-container">
      <Swiper slidesPerView={"auto"} spaceBetween={20} class="carousel">
        {#each listTypes as { title, imgUrl, backgroundColor }}
          <SwiperSlide
            ><CardType {title} {imgUrl} {backgroundColor} /></SwiperSlide
          >
        {/each}
      </Swiper>
    </div>
  </div>
  <div>
    <h2>Explorar todo</h2>
    <div class="explore-container">
      {#each listExplore as { title, imgUrl, backgroundColor }}
        <CardExplore {title} {imgUrl} {backgroundColor} />
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;

    .search-container {
      margin-left: 20px;
    }
  }

  .types-container {
    display: flex;
    overflow-x: auto;
  }

  .explore-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 220px), 1fr));
    gap: 20px 20px;
    /* overflow: hidden; */

    @media screen and (min-width: 1020px) {
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 180px), 1fr));
    }
  }
</style>
