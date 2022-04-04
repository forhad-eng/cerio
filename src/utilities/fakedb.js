const addToDb = productID => {
    let storedCart = {}
    const cart = localStorage.getItem('cerio-cart')
    if (cart) {
        storedCart = JSON.parse(cart)
    }
    if (productID in storedCart) {
        storedCart[productID] += 1
    } else {
        storedCart[productID] = 1
    }

    localStorage.setItem('cerio-cart', JSON.stringify(storedCart))
}

const getCart = () => {
    let storedCart = {}
    const cart = localStorage.getItem('cerio-cart')
    if (cart) {
        storedCart = JSON.parse(cart)
    }
    return storedCart
}

const removeItem = productID => {
    let storedCart = {}
    const cart = localStorage.getItem('cerio-cart')
    if (cart) {
        storedCart = JSON.parse(cart)
        if (productID in storedCart) {
            delete storedCart[productID]
            localStorage.setItem('cerio-cart', JSON.stringify(storedCart))
        }
    }
}

const clearCart = () => {
    localStorage.removeItem('cerio-cart')
}

export { addToDb, getCart, removeItem, clearCart }
