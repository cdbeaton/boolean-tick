Nova.booting((Vue, router, store) => {
    Vue.component('index-boolean-tick', require('./components/IndexField'))
    Vue.component('detail-boolean-tick', require('./components/DetailField'))
    Vue.component('form-boolean-tick', require('./components/FormField'))
})
