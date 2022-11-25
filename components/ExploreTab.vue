<template>
  <article class="cover-div">
    <h1>Upcoming Book Fair</h1>
    <img src="~/assets/images/books.jpeg" />
    <button>Book</button>
  </article>
  <article class="popular-div">
    <h2>Popular Now</h2>
    <p>See All</p>
  </article>
  <CarouselItem />
  <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="~/assets/images/tools.jpeg" class="d-block w-100" alt="a" />
        <div class="img-des">
          <h3>Zero to One</h3>
          <p>Blake Masters & Peters</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="~/assets/images/elon.jpeg" class="d-block w-100" alt="elon" />
        <div class="img-des">
          <h3>Elon Musk</h3>
          <p>Ashlee Vance</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="~/assets/images/jen.jpeg" class="d-block w-100" alt="jen" />
        <div class="img-des">
          <h3>You are a badass</h3>
          <p>Jen sincero</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> -->
</template>
<style lang="scss" scoped>
@import "assets/sass/main.scss";
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
.cover-div {
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
  h1 {
    position: absolute;
    line-height: 40px;
    top: 14%;
    left: 7%;
    color: white;
    font-weight: bold;
    font-size: 35px;
  }
  button {
    position: absolute;
    top: 80%;
    left: 80%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    color: black;
    font-size: 18px;
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 35px;
    text-align: center;
  }
}
.popular-div {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 8px;
}
.img-des {
  line-height: 15px;
  margin-top: 5px;
}

@include media-md {
  h3 {
    font-size: 20px;
  }
}
</style>
