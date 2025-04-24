import { ProductCard } from '../../components/ProductCard/ProductCard'
import './Main.css'


export const Main = () => {

  const [products, setProducts] = useState([])

  const handleGetProducts = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setProducts(data.results)
  }

  return (
    <main className="main">
    <button onClick={handleGetProducts}>Traer productos</button>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          products.map(product => (
            <ProductCard key={product.id} product = {product} />
          ))
        }
      </section>
    </main>
  )
}
