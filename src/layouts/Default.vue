<template>
  <div class="layout sticky-header">
    <header data-v-7e33895e="" class="header sticky">
      <div data-v-7e33895e="" class="container">
        <div data-v-7e33895e="" class="left">
          <g-link
            data-v-7e33895e=""
            to="/"
            aria-current="page"
            class="home-link active--exact active"
            ><img
              data-v-7e33895e=""
              src="	https://gridsome-forestry.netlify.app/assets/img/logo.332701b7.svg"
              alt="尼古拉斯·W·安徒生"
              class="logo"
          /></g-link>
        </div>
        <nav data-v-7e33895e="" class="nav right">
          <g-link data-v-7e33895e="" to="/journal" class="nav__link"
            ><font style="vertical-align: inherit"
              ><font style="vertical-align: inherit">journal</font></font
            ></g-link
          ><g-link data-v-7e33895e="" to="/sayhi" class="nav__link"
            ><font style="vertical-align: inherit"
              ><font style="vertical-align: inherit">say hi!</font></font
            ></g-link
          >
        </nav>
      </div>
    </header>
    <slot />
    <footer data-v-07acb5f8="" class="footer">
      <div data-v-07acb5f8="" class="container">
        <span data-v-07acb5f8=""
          ><font style="vertical-align: inherit"
            ><font style="vertical-align: inherit">版权所有 © 2021</font></font
          ></span
        >
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

</style>
