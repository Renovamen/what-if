<template>
  <form class="header-search" >
    <label>
      <input
        ref="input"
        v-model="searchTerm"
        class="header-search__input"
        placeholder="Search for notes..."
        title="Search notes"
        type="search"
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </label>
    
    <div v-if="searchResults.length" class="header-search__result">
      <div 
        v-for="group in searchResults.results" 
        :key="group.title"
        class="result-group" >
        <h4 class="result-group__title"> {{ group.title }}</h4>
        <g-link
          v-for="item in group.list"
          :key="item.id"
          :to="item.path"
          class="result-group__item">
          <p>{{ item.title }}</p>
        </g-link>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      searchTerm: ''
    }
  },
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 1) return []
      var raw_result = this.$search.search({ query: searchTerm, limit: 5 })
      console.log(raw_result)

      var result_list = {}
      for(let item of raw_result) {
        if(!result_list[item.index]) {
          result_list[item.index] = {
            "title": item.index,
            "list": []
          }
        }
        let result = {
          "id": item.id,
          "title": item.title,
          "path": item.path
        }
        result_list[item.index]["list"].push(result)
      }
      // console.log(result_list, raw_result.length)
      return {
        "results": result_list,
        "length": raw_result.length
      }
    },
  },
}
</script>