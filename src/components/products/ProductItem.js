export default function ProductItem({ product }) {
    return (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
      </div>
    );
  }
  