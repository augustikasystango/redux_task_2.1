import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'The first book I ever wrote'
  },
  {
    id: 'p2',
    price: 12,
    title: 'Adventures in Coding',
    description: 'A journey through the world of programming'
  },
  {
    id: 'p3',
    price: 9,
    title: 'The Art of Cooking',
    description: 'Delicious recipes from around the globe'
  },
  {
    id: 'p4',
    price: 15,
    title: 'Mystery of the Lost Island',
    description: 'An exciting tale of adventure and suspense'
  },
  {
    id: 'p5',
    price: 8,
    title: 'Mindfulness for Beginners',
    description: 'A guide to living in the present moment'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
     { DUMMY_PRODUCTS.map((product)=>(<ProductItem
        key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
