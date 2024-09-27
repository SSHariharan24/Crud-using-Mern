import  { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from 'axios'

export const User = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err)
    )
  })

  const handleDelete =  (id) => {
    axios.delete("http://localhost:4000/deleteUser/"+id)
    .then(res => {
      console.log(res)
      window.location.reload()})
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
      <Link to="/create" className="btn btn-success btn-sm">
          Add +
        </Link>
         <table className='table'>
          <thead>
            <tr>
              
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user)=>{
               return <tr>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>
                  <Link to={`/update/${user._id}`} className="btn btn-success btn-sm">Update</Link>
                    <button className="btn btn-danger btn-sm"
                    onClick={(e) => handleDelete(user._id) }>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
         </table>
      </div>
      </div>
  )
}
export default User

