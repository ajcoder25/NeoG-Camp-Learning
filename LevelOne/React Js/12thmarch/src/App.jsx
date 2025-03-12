import './App.css';

const Blogs = ({ blog }) => {
  const totalPost = blog.reduce(
    (acc, curr) =>
      curr.category === 'Food' ? acc + curr.content.split(' ').length : acc,
    0
  );

  return (
    <div key={blog.id}>
      <h2>Total Word Count of content</h2>
      <p> {totalPost}</p>
    </div>
  );
};

const Laptop = ({ laptop }) => {
  const totalPrice = laptop.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2> Total Price of laptops</h2>
      <p> {totalPrice}</p>
    </div>
  );
};

const Cafes = ({ cafes }) => {
  const totalRating = cafes.reduce(
    (acc, curr) => (curr.type === 'cafe' ? acc + curr.rating : acc),
    0
  );
  const cafeLength = cafes.filter((cafe) => cafe.type === 'cafe').length;
  const averageRating = totalRating / cafeLength;

  return (
    <div>
      <h2>Average rating of Cafes</h2>
      <p>{averageRating.toFixed(2)}</p>
    </div>
  );
};

const Books = ({ book }) => {
  const bookTotal = book.reduce((acc, curr) => acc + curr.pages, 0);

  return (
    <div>
      <h2>Total Number of pages </h2>
      <p>{bookTotal}</p>
    </div>
  );
};

const Tweet = ({ Checktweet }) => {
  const totalLikesMorning = Checktweet.reduce(
    (acc, curr) => (curr.schedule === 'Morning Tweet' ? curr.likes + acc : acc),
    0
  );
  const totalLikesEvening = Checktweet.reduce(
    (acc, curr) => (curr.schedule === 'Evening Tweet' ? curr.likes + acc : acc),
    0
  );

  return (
    <div>
      <h2>Morning Tweets Like Count</h2>
      <p>{totalLikesMorning}</p>
      <h2>Evening Tweets Like Count</h2>
      <p>{totalLikesEvening}</p>
    </div>
  );
};

const Podcast = ({ podcastCheck }) => {

  let totalCount = podcastCheck.reduce(
    (acc, curr) =>
      curr.type === 'Verified' ? acc + curr.listeners : acc,
    0
  );

  return (
    <div>
      <h2>Total number of Listners</h2>
     <p> {totalCount}</p>
    </div>
  );
};

export default function App() {
  const blogPosts = [
    { id: 1, title: 'Blog Post1', content: 'Content1', category: 'Technology' },
    { id: 2, title: 'Blog Post2', content: 'Content 2', category: 'Food' },
    { id: 3, title: 'Blog Post3', content: 'Content3', category: 'Technology' },
    {
      id: 4,
      title: 'Blog Post 4',
      content: 'New content of food called Content 4',
      category: 'Food',
    },
  ];

  const laptops = [
    { id: 1, brand: 'Dell', price: 8999.99 },
    { id: 2, brand: 'HP', price: 7999.99 },
    { id: 3, brand: 'MacBook', price: 12999.99 },
  ];
  const cafesObj = [
    { id: 1, name: 'Coffee House', rating: 4.5, type: 'cafe' },
    { id: 2, name: 'Cafe Latte', rating: 4.2, type: 'cafe' },
    { id: 3, name: 'Espresso Bar', rating: 4.8, type: 'cafe' },
    { id: 3, name: 'Me and U', rating: 4.3, type: 'restaurant' },
  ];

  const books = [
    { id: 1, title: 'Book1', pages: 300 },
    { id: 2, title: 'Book2', pages: 250 },
    { id: 3, title: 'Book3', pages: 400 },
  ];

  const tweets = [
    { id: 1, content: 'Tweet1', likes: 20, schedule: 'Morning Tweet' },
    { id: 2, content: 'Tweet2', likes: 15, schedule: 'Evening Tweet' },
    { id: 3, content: 'Tweet3', likes: 30, schedule: 'Morning Tweet' },
    { id: 4, content: 'Tweet4', likes: 15, schedule: 'Evening Tweet' },
  ];

  const podcasts = [
    { id: 1, title: 'Tech Talk', listeners: 5000, type: 'Verified' },
    { id: 2, title: 'Science Insights', listeners: 1000, type: 'Unverified' },
    { id: 3, title: 'Comedy Hour', listeners: 7000, type: 'Verified' },
  ];
  return (
    <div>
      <Blogs blog={blogPosts} />
      <hr />
      <Laptop laptop={laptops} />
      <hr />
      <Cafes cafes={cafesObj} />
      <hr />
      <Books book={books} />
      <hr />
      <Tweet Checktweet={tweets} />
      <hr />
      <Podcast podcastCheck={podcasts} />
    </div>
  );
}
