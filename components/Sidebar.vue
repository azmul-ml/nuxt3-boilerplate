<template>
  <div>
    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3">
      <nav class="navbar bg-light navbar-light">
        <Anchor to="/" class="navbar-brand mx-4 mb-3">
          <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>MLBD</h3>
        </Anchor>
        <div class="d-flex align-items-center ms-4 mb-4">
          <div class="position-relative">
            <img class="rounded-circle" src="@/assets/images/user.png" alt="" style="width: 40px; height: 40px" />
            <div
              class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"
            ></div>
          </div>
          <div class="ms-3">
            <h6 class="mb-0">Azmul Hossain</h6>
            <span>Admin</span>
          </div>
        </div>
        <div class="navbar-nav w-100">
          <Anchor to="/user" class="nav-item nav-link"
            ><i class="fa fa-tachometer-alt me-2"></i> {{ $t("links.users") }}</Anchor
          >
          <Anchor to="/chart" class="nav-item nav-link"
            ><i class="fa fa-chart-bar me-2"></i> {{ $t("links.charts") }}</Anchor
          >
          <Anchor to="/book" class="nav-item nav-link"
            ><i class="fa fa-book-open me-2"></i> {{ $t("links.books") }}</Anchor
          >
          <Anchor to="/rendering" class="nav-item nav-link"
            ><i class="fa fa-th me-2"></i>{{ $t("links.rendering") }}</Anchor
          >
          <Anchor to="/plugins" class="nav-item nav-link"
            ><i class="fa fa-keyboard me-2"></i>{{ $t("links.plugin") }}</Anchor
          >
          <Anchor to="/about" class="nav-item nav-link"
            ><i class="fa fa-tachometer-alt me-2"></i> {{ $t("links.about") }}</Anchor
          >
          <Anchor to="/profile" class="nav-item nav-link"
            ><i class="fa fa-table me-2"></i>{{ $t("links.profile") }}
          </Anchor>
        </div>
      </nav>
    </div>
    <!-- Sidebar End -->
  </div>
</template>
