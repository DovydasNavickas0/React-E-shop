
import styles from './CheckoutCart.module.css'

import { useState } from 'react'

const CheckoutCart = ({Productcart, IncreaseQuantity, DecreaseQuantity}) => {

    let Cart = Productcart

    const [Fix, setFix] = useState(true)

    //RESET
    const ResetBtn = () => {
        Cart.splice(0, Cart.length)
        console.log(Productcart)
        setFix(false)
    }

    //Deletes stuff
    const RemoveBtn = (index) => {
        console.log(index)
        Cart.splice(index, 1)
        console.log(Cart)
    }

    //da price math machine
    const PriceCalculator = (index) =>{
        console.log(Cart[index])

        console.log(Cart[index].price)
        console.log(Cart[index].quantity)

        let price = Cart[index].price * Cart[index].quantity

        console.log(price)

        return price
    }

    //price calculator but for sum
    const SumCalculation = () => {

        console.log('calculating')

        return Cart.reduce((sum, {price, quantity})=>
        sum + price*quantity, 0).toFixed(2)
    }

    return(
        <main className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th className={styles.tableprice}>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Fix && Cart.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td> <button onClick={()=>{DecreaseQuantity(item)}}>-</button> {item.quantity} <button onClick={()=>{IncreaseQuantity(item)}}>+</button> </td>
                                    <td>{PriceCalculator(index)}</td>
                                    <td><button onClick={()=>{RemoveBtn(index)}}>Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={styles.BtnFunctions}>
                <p>Your total {SumCalculation()}$</p>
                <button onClick={ResetBtn}>pay</button>
                <button onClick={ResetBtn}>reset</button>
            </div>
        </main>
    )
}

export default CheckoutCart