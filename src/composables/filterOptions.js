import { reactive } from "@vue/reactivity"

const showFilter = reactive({
    showPrice: false,
    showBrand: false,
    showSize: false,
    showFilter: false,
})

const methods = {
    togglePrice: () => {
        showFilter.showPrice = !showFilter.showPrice
    },
    toggleBrand: () => {
        showFilter.showBrand = !showFilter.showBrand
    },
    toggleSize: () => {
        showFilter.showSize = !showFilter.showSize
    },
    toggleFilter: () => {
        showFilter.showFilter = !showFilter.showFilter
    },
}

export default {
    showFilter, methods,
}