import products from "../../data/data"
import OneProduct from "../OneProduct/OneProduct"

import styles from './ProductList.module.css'

const ProductList = () => {
    
    return(
        <div className={styles.list}>
            <OneProduct products={products}/>
        </div>
    )
}

export default ProductList