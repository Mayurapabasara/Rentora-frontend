export function loadCart() {

    let cartString = localStorage.getItem("cart")  // "[item1],[item2]"

    if(cartString == null){
        localStorage.setItem("cart","[]")
        cartString = "[]"
    }

    const cart = JSON.parse(cartString)

    return cart;
}

export function addToCart(product, quantity) {

    let cart = loadCart()

    // user cart ekt item ekk add krddi danatamath eka cart eke thiynvd kiyl check kirima sidu karai
    const existingItemIndex = cart.findIndex(
        (item)=>{
            return item.productId == product.productId
        }
    )

    if(existingItemIndex === -1){

        if(quantity < 1){
            console.log("Quantity must be at least 1")
            return;
        }

        const cartItem = {
            productId: product.productId,
            name: product.name,
            price: product.price,
            labelledPrice: product.labelledPrice,
            quantity: quantity,
            image: product.images?.[0] || product.image
        }
        cart.push(cartItem)

    }else{

        const existingItem = cart[existingItemIndex]

        const newQuantity = existingItem.quantity + quantity

        if(newQuantity < 1){
            cart = cart.filter(item => item.productId !== product.productd)
        }else {
            existingItem.quantity = newQuantity
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}

export function getTotal(){
    const cart = loadCart()
    let total = 0

    cart.forEach((item) => {
        total += item.price * item.quantity
    })

    return total;
}

export function getCartCount(){
    const cart = loadCart()

    let count = 0

    cart.forEach((item) => {
        count +=item.quantity || 0
    })

    return count
}