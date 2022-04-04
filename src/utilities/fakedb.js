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

const addToWish = productID => {
    let storedCart = []
    const cart = localStorage.getItem('cerio-wishlist')
    if (cart) {
        storedCart = [...JSON.parse(cart)]
        if (storedCart.indexOf(productID) === -1) {
            storedCart.push(productID)
        }
    } else {
        storedCart.push(productID)
    }
    localStorage.setItem('cerio-wishlist', JSON.stringify(storedCart))
}

const getWish = () => {
    let storedCart = []
    const cart = localStorage.getItem('cerio-wishlist')
    if (cart) {
        storedCart = [...JSON.parse(cart)]
    }
    return storedCart
}

export { addToDb, getCart, removeItem, clearCart, addToWish, getWish }
