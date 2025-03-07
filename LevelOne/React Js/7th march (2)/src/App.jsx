import './App.css';

// writing the heading

const Heading = () => {
  return <h1>React Playgroud</h1>;
};

const Greetings = () =>{
  return<h1>Hello, Alice Smith!</h1>
}


const  ExternalLink = () =>{
  const url = 'https://www.reactexamples.com' 

  return <a href = {url} target = '_blank' alt = 'not working'>Visit React Examples</a>
}

const Avatar = () =>{
  const img = 'https://placehold.co/600x400?text=Hello+World'

  return(
  <div>
    <img src = {img} alt = 'not working'/>
  </div>
       
  )
}

const UserDetails = () =>{
  const user = {
  name: 'Alice Smith',
  age: 28,
  email:'alice.smith@example.com',
  bio:"Passionate about React and building innovative web application"
}
return(

  <div>
    <h2>User Information</h2>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <p>Email: {user.email}</p>
    <p>BIO: {user.bio}</p>

   </div>
)

}



export default function App() {
  return (
    <div>
      <Heading />
      <Greetings/>
      <ExternalLink/>
      <Avatar/>
      <UserDetails/>
    </div>
  );
}
