
import styles from './CheckoutCart.module.css'

import { useState } from 'react'

const CheckoutCart = ({Productcart, IncreaseQuantity, DecreaseQuantity, RemoveBtn}) => {

    let Cart = Productcart

    const [Fix, setFix] = useState(true)

    //RESET
    const ResetBtn = () => {
        Cart.splice(0, Cart.length)
        console.log(Productcart)
        setFix(false)
    }

    //da price math machine
    const PriceCalculator = (index) =>{

        console.log('calculating price')

        return Cart[index].price * Cart[index].quantity
    }

    //da sum math machine
    const SumCalculation = () => {

        console.log('calculating sum')

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
                                    <td><button onClick={()=>{RemoveBtn(item)}}>Remove</button></td>
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