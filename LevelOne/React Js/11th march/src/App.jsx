import './App.css';

// step 2nd Write the product list component

const ProductList = ({ products }) => {
  // now we use filterProduct 
  const filteredProducts = products.filter(product => product.price >= 20 && product.price <=50)


  // products array of the object pass as the props
 
  const productListing =filteredProducts.map((product) => (
    <div key = {product.id}>
      <h3>Name: {product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  ));

  return (
    <>
      <h2>Products</h2>
      {productListing}
    </>
  );
};


const Restaurants = ({restaruants}) =>{
  const filterRestaurants = restaruants.filter(restaruants => restaruants.cuisine ==='Italian')
   const restaurantListing = filterRestaurants.map(restaruants =>(
   
   <div key = {restaruants.id}>
     <h3>Name: {restaruants.name}</h3>
     <p>Cuisine: {restaruants.cuisine}</p>
  </div>
   ))

   return (
     <>
     <h2>Restaruants</h2>
     {restaurantListing}

     </>
   )
  
}

const Videos = ({videos}) =>{
  const filterVideos = videos.filter(videos => videos.views > 1000)
   
  const videosListing = filterVideos.map(videos=>(

    <div key = {videos.id}>
       <h3>Title : {videos.title}</h3>
       <p>Views: {videos.views}</p>

  </div>
  ))

  return(
    <>
    <h2>Videos</h2>
    {videosListing}

    </>
  )

     
}


export default function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  const restaruants = [
    { id: 1, name: 'Restaurant 1', cuisine: 'Italian' },
    { id: 2, name: 'Restaurant 2', cuisine: 'Mexican' },
    { id: 3, name: 'Restaurant 3', cuisine: 'Chinese' },
  ];

  const videos = [
    { id: 1, title: 'Video 1', views: 1000 },
    { id: 2, title: 'Video 2', views: 2000 },
    { id: 3, title: 'video 3', views: 3000 },
  ];

  return (
    <main>
      <ProductList products={products} />
      <hr/>
      < Restaurants restaruants = {restaruants}/>
      <hr/>
      < Videos videos = {videos} />

    </main>
  );
}
