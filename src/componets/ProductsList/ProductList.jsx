import products from "../../data/data"
import OneProduct from "../OneProduct/OneProduct"

import styles from './ProductList.module.css'

const ProductList = ({addtocart}) => {
    
    return(
        <div className={styles.list}>
            <OneProduct products={products} addtocart={addtocart}/>
        </div>
    )
}

export default ProductList