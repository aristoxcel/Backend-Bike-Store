# Bike Store


Product
Order


product{
    name
    brand
    price(number)
    category
    description
    quantity
    inStock(boolean)
}


order {
    email
    product -> ref
    quantity
    totalPrice
}