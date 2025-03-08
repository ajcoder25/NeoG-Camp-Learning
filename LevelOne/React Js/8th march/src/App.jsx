
import './App.css'

const Header = () =>{
  return(
    <header>
     <h1>Welcome to our Company</h1>
     <nav>
       <li>
         <a href = "/">Home</a>

        </li>

      </nav>
    </header>
  )

}
const EmployeeDetails = ({employee}) =>{

  return(
       <div>
         <h2>Employee Details</h2>
         <p>Name: {employee.name}</p>
         <p>Position: {employee.position}</p>
         <p>Department: {employee.department}</p>
         <p>Email: {employee.email}</p>



      </div>
  )

}


const Footer = () =>{
  return(
      <footer>
        <p>&copy; 2024 Company Name. All right reserved.</p>

      </footer>
  )
}



export default function App(){
  const employee = {
    id : 1,
    name: "John Doe",
    position: "Software Developer",
    department: "Engineering",
    email: "john@gmail.com"
  }

  return(
  <>
    <Header/>
     <main>
        <EmployeeDetails employee = {employee}/>

    </main>
     <Footer/>

</>
  )
}
