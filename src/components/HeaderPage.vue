<template>
      <header>
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color:  rgba(27, 96, 38, 0.80);">
        <div class="container-fluid container">
          <RouterLink to="/" class="navbar-brand header-logo" href="#">
            <img src="@/assets/img/logo.png" alt="">
          </RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end flex-grow-1">
              <li class="nav-item d-flex">
                <RouterLink to="/" class="nav-link active li-under-line flex-shrink-1" aria-current="page" href="#">首頁</RouterLink>
              </li>
              <li class="nav-item d-flex">
                <a class="nav-link active li-under-line flex-shrink-1" aria-current="page" href="#">關於</a>
              </li>
              <li class="nav-item d-flex">
                <RouterLink class="nav-link active li-under-line flex-shrink-1" to="/gunList">清單</RouterLink>
              </li>
              <li class="nav-item d-flex">
                <RouterLink to="/service" class="nav-link active li-under-line flex-shrink-1" aria-current="page" href="#">聯絡我們</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header-logo.router-link-active.router-link-exact-active {
  background-color: transparent;
}
</style>