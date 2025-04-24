
export const ProductCard = ({key, product}) => {
const {id, title, price, description, category, image, rating} = product;

  return (
    <div className="product-card" key={key}>
        <h1>{title}</h1>
        <img src={image} alt={title} className="product-image"/>
        <h3>{price}</h3>
        <h3>{description}</h3>
        <h3>{category}</h3>
        <div className="rating">
            <h3>Rating: {rating.rate}</h3>
            <h3>Count: {rating.count}</h3>
        </div>
    </div>
  )
}
