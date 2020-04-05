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
        @focus="focused = true"
        @blur="focused = false"
      />
      <font-awesome-icon icon="search" class="search-icon feather feather-search"/>
    </label>
    
    <div v-if="showResult" class="header-search__result">
      <div v-if="searchResults.length === 0" class="result-group">
        No results found for query <span style="font-weight: 600">{{ searchTerm }}</span>.
      </div>
      <div 
        v-else
        v-for="group in searchResults.results" 
        :key="group.title"
        class="result-group" >
        <h4 class="result-group__title"> {{ group.title }}</h4>
        <g-link
          v-for="item in group.list"
          :key="item.id"
          :to="item.path"
          class="result-group__item">
          <li @mousedown="go(item.path)"><p>{{ item.title }}</p></li>
        </g-link>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      searchTerm: '',
      focused: false,
    }
  },
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 1) return []
      var raw_result = this.$search.search({ query: searchTerm, limit: 10 })

      var result_list = {}
      for(let item of raw_result) {
        if(!result_list[item.catagory]) {
          result_list[item.catagory] = {
            "title": item.catagory,
            "list": []
          }
        }
        let result = {
          "id": item.id,
          "title": item.title,
          "path": item.path
        }
        result_list[item.catagory]["list"].push(result)
      }

      return {
        "results": result_list,
        "length": raw_result.length
      }
    },
    showResult() {
      // show results, if the input is focused and the search term is not empty.
      return this.focused && this.searchTerm.length > 0;
    }
  },
  methods: {
    go(path) {
      // do nothing if the clicked result is same to current position
      if(this.$route.path === path) return
      this.searchTerm = ''
      this.$router.push(path)
    }
  }
}
</script>