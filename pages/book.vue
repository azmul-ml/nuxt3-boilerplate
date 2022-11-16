<script setup lang="ts">
definePageMeta({
  layout: false,
});

const booklist = [
  {
    id: 1,
    image: "~/assets/images/elon.jpeg",
    name: "Elon Mask",
    description: "Ashlee Vance",
    icon: 3,
  },
  {
    id: 2,
    image: "~/assets/images/tools.jpeg",
    name: "Tools of Titans",
    description: "Team Feriss",
    icon: 3,
  },
  {
    id: 3,
    image: "~/assets/images/jen.jpeg",
    name: "You are a badass",
    description: "Jen Sincero",
    icon: 2,
  },
];
</script>

<template>
  <div class="wrapper">
    <div class="top-nav">
      <i class="bi bi-list" style="font-size: 2rem"></i>
      <h2>Bookstop</h2>
    </div>
    <div class="searchbar">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
    <div class="pc-tab">
      <input id="tab1" checked type="radio" name="pct" />
      <input id="tab2" type="radio" name="pct" />
      <input id="tab3" type="radio" name="pct" />
      <nav>
        <ul>
          <li class="tab1">
            <label for="tab1">Explore</label>
          </li>
          <li class="tab2">
            <label for="tab2">Recent Books</label>
          </li>
          <li class="tab3">
            <label for="tab3">New</label>
          </li>
        </ul>
      </nav>
      <section>
        <div class="tab1">
          <ExploreTab />
        </div>
        <div class="tab2">
          <h2>Recent Books</h2>
          <div v-for="b in booklist" :key="b.id">
            <BookList :book="b" />
          </div>
        </div>
        <div class="tab3">
          <NewTab />
        </div>
      </section>
    </div>
  </div>
  <NavBottom />
</template>

<style lang="scss" scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");
@import "assets/sass/main.scss";
@import "assets/sass/variables";

h2 {
  margin-left: 15px;
  font-weight: 600;
}

h3,
p {
  font-weight: bold;
}

p {
  color: gray;
}

img {
  width: 100%;
  border-radius: 35px;
}

.wrapper {
  padding: 40px 20px;
}

.top-nav {
  display: flex;
  align-items: flex-end;
}

.tab-div {
  display: flex;
}

.searchbar {
  margin: 10px 0;
}

/* Component Needs */

.pc-tab > input,
.pc-tab section > div {
  display: none;
}

#tab1:checked ~ section .tab1,
#tab2:checked ~ section .tab2,
#tab3:checked ~ section .tab3 {
  display: block;
}

.pc-tab {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      label {
        float: left;
        padding: 5px 15px;
        border-bottom: 0;
        background: $unactiveColor;
        color: gray;
        font-weight: 500;
        border-radius: 35px;

        &:hover {
          background: $unactiveHoverColor;
          color: #fff;
        }

        &:active {
          background: $activeColor;
          color: #fff;
        }
      }

      &:not(:last-child) label {
        border-right-width: 0;
      }
    }
  }

  section {
    clear: both;

    .tab1,
    .tab2,
    .tab3 {
      padding: 20px 0;
      width: 100%;
      background: #fff;
      line-height: 1.5em;
      letter-spacing: 0.3px;
      color: #444;

      h2 {
        margin: 0;
        letter-spacing: 1px;
        color: #34495e;
      }
    }
  }
}

#tab1:checked ~ nav .tab1,
#tab2:checked ~ nav .tab2,
#tab3:checked ~ nav .tab3 {
  label {
    background: #005dfd;
    color: #fff;
    position: relative;
  }
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 650px;
  overflow: hidden;
}

.ant-carousel .slick-dots-bottom {
  color: rgb(200, 17, 17);
  background-color: #005dfd;
}

@include media-md {
  .wrapper {
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
