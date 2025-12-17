import Banner from "./components/Banner"
import Container from "./components/Container"
import Sale from "./components/Sale"

function App() {

  return (
    <main>
        <Banner />
       <Container className="py-5 md:py-10">
         <Sale />
         {/* sale */}
         {/* New Arrivals */}
         {/* Best Sellers */}
         {/* Product of the Year */}
         {/* Specials Offers */}
        </Container>
    </main>
  )
}

export default App
