<template>
  <nav class="main-nav flex gap-15">
    
    <div class="has-dropdown">
      <g-link to="/nlp/statistical-nlp/">
        <span class="main-nav__label">NLP</span>
      </g-link>
      <div class="dropdown">
        <g-link to="/nlp/statistical-nlp/">Statistical NLP</g-link>
      </div>
    </div>

    <g-link to="/misc/">
      <span class="main-nav__label">Misc</span>
    </g-link>
  </nav>
</template>


<style lang="scss">
.main-nav {
  flex-wrap: nowrap;
}
@media screen and (max-width: 850px) {
 .main-nav {
    order: 10;
    min-width: 100%;
    a {
      padding-top: 5px;
      padding-bottom: 10px;
    }
  }
}
</style>
