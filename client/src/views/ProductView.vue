<template>
    <div class="food">
      <section class="py-5">
          <div class="container px-4 px-lg-5 my-5">
              <div class="row gx-4 gx-lg-5 align-items-center">
                  <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" :src="require(`@/assets/img/600/${product.photo}`)" :alt="product.name" /></div>
                  <div class="col-md-6">
                      <div class="small mb-1">Code: {{ product.id }}</div>
                      <h1 class="display-5 fw-bolder">{{ product.name }}</h1>
                      <div class="fs-5 mb-5">
                          <span class="text-decoration-line-through"></span>
                          <span>$ {{ product.price.toFixed(2) }} CAD</span>
                      </div>
                      <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quis inventore quas vero, sequi laudantium eveniet amet eum reiciendis nulla iste.Repellendus laboriosam, minus fuga quis corrupti quibusdam cumque placeat.</p><hr class="my-4">
                      <div class="d-flex">
                        <RouterLink :to="{name: 'edit-product', params: {id: product.id}}" class="btn btn-outline-success mt-10">Edit Product</RouterLink>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
</template>
<script>

export default {
  props: ['products'],
  computed: {
    product () {
      const product = this.products.find((p) => {
        return p.name === this.$route.params.id
      })
      return product
    },
    productIndex () {
      const index = this.products.findIndex((p) => {
        return p.name === this.$route.params.id
      })
      return index
    }
  }
}
</script>
