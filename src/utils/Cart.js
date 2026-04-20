export function loadCart() {

    let cartString = localStorage.getItem("cart")  // "[item1],[item2]"

    if(cartString == null){
        localStorage.setItem("cart","[]")
        cartString = "[]"
    }

    const cart = JSON.parse(cartString)

    return cart;
}

export function addToCart(porduct, quantity) {
    let cart = loadCart()

    // user cart ekt item ekk add krddi danatamath eka cart eke thiynvd kiyl check kirima sidu karai
    const existingItemIndex = cart.findindex(
        (item)=>{
            return item.productID == product.productID
        }
    )

    if(existingitemindex == -1){

        if(quantity<1){
            console.log("Quantity must be at least 1")
            return;
        }

        const cartItem = {
            productID: product.productID,
            name: product.name,
            price: product.price,
            labelledPrice: product.lablledPrice,
            quantity: quantity,
            image: product.image[0]
        }
        cart.push(cartItem)

    }else{

        const existingItem = cart[existingItemIndex]

        const newQuantity = existingItem.quantity + quantity

        if(new Quantity < 1){
            cart = cart.filter(

            )
        }else {
            existingItem.quantity = newQuantity
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}