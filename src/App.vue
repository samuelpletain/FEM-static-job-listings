<script setup>
  import json from "./assets/data.json"
  import Card from "./components/Card.vue"
  import { reactive, computed } from 'vue'
  import Filter from './components/Filter.vue'

  let data = reactive(json)
  const filter = reactive([])

  const tags = computed(() => {
    const keys = filterByTags()
    return data.filter(obj => keys.includes(obj.id))
  })

  function addTag(tag) {
    if (!filter.includes(tag)) {
      filter.push(tag)
    }
  }

  function filterByTags() {
    let tags = []
    const res = []
    json.forEach(obj => {
      let tmp = []
      tmp.push(obj.role)
      tmp.push(obj.level)
      tmp = tmp.concat(obj.languages)
      tmp = tmp.concat(obj.tools)
      tags.push({
        ["tags"] : tmp,
        ["id"] : obj.id 
      })
    })
    filter.forEach(tag => {
      tags = tags.filter((obj) => obj.tags.includes(tag))
    })
    tags.forEach((tag) => {
        res.push(tag.id)
    })
    return res
  }

  function removeTag(tag) {
    const index = filter.indexOf(tag)
    filter.splice(index, 1)
  }

  function clearFilters() {
    while (filter.length > 0) {
      filter.pop()
   }
  }
</script>

<template>
  <div class="wrapper">
    <Filter :tags="filter" @clear="clearFilters" @removable="removeTag"/>
    <Card v-for="item in tags" :id="item.id" :company="item.company" :logo="item.logo" :new="item.new" :featured="item.featured" :position="item.position" :role="item.role" :level="item.level" :postedAt="item.postedAt" :contract="item.contract" :location="item.location" :languages="item.languages" :tools="item.tools" @tag-clicked="addTag"/>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: grid;
    gap: 2.5rem;
    padding: 156px 1.5rem 1.5rem;
    background: $neutral-100;
    &::before {
      content: '';
      display: block;
      background: $primary url("/images/bg-header-mobile.svg") center no-repeat;
      background-size: cover;
      width: 100%;
      height: 156px;
      position: absolute;
      top: 0;
      left: 0;
    }
    & .filter {
      transform: translateY(-1.9rem);
      margin-bottom: -1rem;
    }
  }

  @include breakpoint {
    .wrapper {
      max-width: 1100px;
      margin: auto;
      &::before {
        background-image: url("/images/bg-header-desktop.svg");
      }
    }
  }
</style>