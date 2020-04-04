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
        @input="query = $event.target.value"
        @change="query = $event.target.value"
      />
      <font-awesome-icon icon="search" class="search-icon feather feather-search"/>
    </label>
    
    <div v-if="showResult && this.focused" class="header-search__result">
      <div v-if="searchResults.length === 0" class="result-group">
        No results for <span style="font-weight: 600">{{ query }}</span>.
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
      searchTerm: '',
      focused: false,
      query: '',
    }
  },
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 1) return []
      var raw_result = this.$search.search({ query: searchTerm, limit: 5 })

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
      // show results, if the input is focused and the query is not empty.
      return this.focused && this.query.length > 0;
    }
  },
}
</script>