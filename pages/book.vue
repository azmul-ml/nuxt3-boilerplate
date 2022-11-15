<script setup lang="ts">
import { AlignLeftOutlined } from "@ant-design/icons-vue";

definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="wrapper">
    <div class="top-nav">
      <AlignLeftOutlined style="font-size: 20px" />
      <h2>Bookstop</h2>
    </div>
    <div class="searchbar">
      <a-input-search placeholder="Search Here" style="width: 100%" />
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
          <BookList />
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
$small: 768px;
$activeColor: #005dfd;
$unactiveColor: #fefefe;
$unactiveHoverColor: #005dfd;
@media screen and (max-width: $small) {
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
    align-items: baseline;
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
}
</style>
