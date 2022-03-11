import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductOptions from '../ProductOptions/ProductOptions';


const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

 

  const getPrice = () => {
    return(props.basePrice + currentSize.additionalPrice)
  }

  const summary = e =>{
    e.preventDefault();

    return (
      console.log('Summary'),
      console.log('================'),
      console.log('Name: ', props.title),
      console.log('Price: ', getPrice()),
      console.log('Size: ', currentSize.name),
      console.log('Color: ', currentColor)
    )
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOptions 
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        sizes={props.sizes}
        colors={props.colors}
        summary={summary}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;