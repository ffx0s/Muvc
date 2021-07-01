<template>
  <PullRefresh
    v-model="loading"
    @refresh="refresh"
    :failed="failed"
    waveColor="#f0eff5"
  >
    <transition-group class="app__items" tag="ul" :name="transitionName">
      <Card tag="li" v-for="item in items" :key="item.id" :item="item" />
    </transition-group>
  </PullRefresh>
</template>

<script>
import Card from 'lvan/card/c3'
import PullRefresh from 'lvan/pullRefresh'
import { getProducts } from '../../api/product'

export default {
  components: {
    Card,
    PullRefresh
  },
  data() {
    return {
      items: [],
      loading: true,
      failed: false,
      transitionName: ''
    }
  },
  methods: {
    fetchData() {
      return getProducts()
        .then(data => {
          this.items = data.map(item => ({
            id: item.id,
            date: item.created_at.split('T')[0],
            name: item.user.name,
            content: item.alt_description,
            image: item.urls.thumb
          }))
        })
        .catch(this.failure)
    },
    async refresh(done) {
      this.failed = false
      this.transitionName = this.items.length ? '' : 'item'
      await this.fetchData()
      done()
    },
    failure() {
      this.failed = true
    }
  }
}
</script>
