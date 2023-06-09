import React, { useState, useEffect, } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../User.css";
import UserForm from "./AddUsers";
import RowDetails from "../components/RowDetails";
import RowDetail from "../components/RowDetailsemployees";

const UserList = () => {
    const [users, setusers] = useState([]);
    
  
    const [form, setForm] = useState({});
   
    const [editing, setEditing] = useState(false);
const [selectedUser, setSelectedUser] = useState(null);





    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const handleCancelEdit = () => {
        setSelectedUser(null);
        setEditing(false);
        };


    /* delete */
    const OnDelete = (id__) => {
        if (window.confirm("are you sure to delete this user")) {

            axios.delete(`/api/users/${id__}`)



        }
    }
    /* find all Users */
    useEffect(async () => {
        await axios.get("/api/users").then((res) => {
            setusers(res.data);
        });
        <UserForm />
    });
    return (
    
        <div className="user-list-container">
        <h1> List des utilisateurs</h1>
        <button className="btn btn-primary" onClick={() => setEditing(true)}>
        Add User
        </button>
        {editing && (
        <div className="edit-form-container">
        <h2>{selectedUser ? 'Edit User' : 'Add User'}</h2>
        <UserForm
       
        onCancel={handleCancelEdit}
       />
       </div>
        )}
        
  
         
       
        
        
    <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Lastname</th>
              <th scope="col">Firstname</th>
              <th scope="col">Age</th>
              <th scope="col">Adress</th>
              <th scope="col">Phone</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ Email, Lastname, Firstname, Age, Adress,Phone,Role,_id }) => (
              <RowDetail
                Email={Email}
                Lastname={Lastname}
                Firstname={Firstname}
                Age={Age}
                Adress={Adress}
                Phone={Phone}
               Role={Role}
                Id={_id}
                OnDelete={OnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
                </div>
    )
}



export default UserList;
