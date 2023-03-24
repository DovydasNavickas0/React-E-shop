import products from "../../data/data"

import styles from './Homepage.module.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Homepage = () => {

    //console.log(products)
    
    return(
        <Carousel autoPlay interval="5000" showThumbs={false} className={styles.carousel}>
            {products.map((item, index) => (
                <div key={index} className={styles.container}>
                    <img className={styles.image} src={item.imageUrl} alt='product' />
                        <h3 className={styles.title}>{item.name}</h3>
                </div>
            ))}
        </Carousel>
    )
}

export default Homepage