module.exports = app => {
    const product = require ('../controllers/product.controller.js')

    const router = require('express').Router()

    router.get('/', product.findAll)

    router.post('/', function(req, res){
        product.create
      })

    router.get('/:id', product.findByPk)
    
    router.delete('/:id', product.delete)

    router.put('/:id', product.update)

    app.use('/api/product', router)
}