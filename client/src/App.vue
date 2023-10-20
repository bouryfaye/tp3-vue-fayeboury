<template>
<div>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#">Ma boutique</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item"><router-link class="nav-link active" aria-current="page" to="/">Accueil</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/about">A propos de nous</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/new-product">Ajouter un produit</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Header-->
    <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Produits Destockage</h1>
                <p class="lead fw-normal text-white-50 mb-0">Venez magasiner...</p>
            </div>
        </div>
    </header>
  <router-view
  :products = "products"
  :addInv = "addInventory"
  :removeInv = "removeInventory"
  :remove = "removeItem"
  :updateInv = "updateInventory"
  />
  </div>
</template>

<script>
// import product from '@/product.json'
import ProductDataService from '@/services/ProductDataService.js'
export default {
  data () {
    return {
      products: [],
      cart: {}
    }
  },
  methods: {
    removeItem (name) {
      delete this.cart[name]
    },
    addInventory (data) {
      this.products.push(data)
    },
    removeInventory (index) {
      this.products.splice(index, 1)
    },
    updateInventory (index, data) {
      this.products[index].name = data.name
      this.products[index].photo = data.photo
      this.products[index].price = data.price
      this.products[index].description = data.description
      this.products[index].type = data.type
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0) // reduce permet de faire de l'auto-incrémentation(acc=valeur accumulée/curr=valeur courante)
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.products = response.data
        console.log(response.data)
      })
  }
}
</script>
