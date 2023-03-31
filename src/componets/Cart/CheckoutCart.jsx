
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
                        <th className={styles.rownumber}>#</th>
                        <th className={styles.productname}>Product Name</th>
                        <th className={styles.productquantity}>Quantity</th>
                        <th className={styles.tableprice}>Price</th>
                        <th className={styles.tablebtn}>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Fix && Cart.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        <p className={styles.centertext}>{index+1}</p>
                                    </td>
                                    <td>{item.name}</td>
                                    <td> 
                                        <button className={styles.quantitybtn} onClick={()=>{DecreaseQuantity(item)}}>-</button> 
                                        {item.quantity} 
                                        <button className={styles.quantitybtn} onClick={()=>{IncreaseQuantity(item)}}>+</button> 
                                    </td>
                                    <td>
                                        <p className={styles.centertext}>{PriceCalculator(index)}$</p>
                                    </td>
                                    <td className={styles.tdremove}><button className={styles.removebtnCSS} onClick={()=>{RemoveBtn(item)}}>Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={styles.BtnFunctions}>
                <p className={styles.totalP} >Your total {SumCalculation()}$</p>
                <button className={styles.paybtnCSS} onClick={ResetBtn}>pay</button>
                <button className={styles.resetbtnCSS} onClick={ResetBtn}>reset</button>
            </div>
        </main>
    )
}

export default CheckoutCart