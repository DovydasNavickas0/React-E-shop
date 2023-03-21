import styles from './OneProduct.module.css'

const OneProduct = (props) => {

    return(
        <div className={styles.container}>
            {
                props.products.map((item, index) => (
                    <div key={index} className={styles.singleProduct}>
                        <div className={styles.namePrice}>
                            <h2 className={styles.productName}>{item.name}</h2>
                            <h2 className={styles.productPrice}>{item.price} $</h2>
                        </div>
                        <img src={item.imageUrl} alt="product_image" className={styles.productImage}></img>
                        <p className={styles.productDescription}>{item.description}</p>
                        <div className={styles.btnDiv}>
                            <button className={styles.addBtn}>add me</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default OneProduct