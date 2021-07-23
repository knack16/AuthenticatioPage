import React,{useState,useContext,useEffect} from 'react'
import AuthContext from '../context/authContext'
import {Link} from 'react-router-dom'

const SignUp=(props)=>{
    const{ registerUser,userAuth,setError,clearError} = useContext(AuthContext)
     useEffect(()=>{
         if(userAuth){
             props.history.push('/')
         }
     },[userAuth,props.history])

    const [user ,setUser] = useState({name:'',email:'',phone:'',city:'',state:'',country:'',password:'',password2:''})
    const {name,email,phone,city,state,country,password,password2} = user

    const handleChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
        clearError()
    }

    const submit = e =>{
        e.preventDefault()
        if(password !== password2){
            setError({ msg:"password don't match"})

        }else{
           registerUser({name,email,password,phone,city,state,country})
           clearError()
        }
    }


        return (
            <form onSubmit={submit} className="m-auto">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" name="name" value={name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
                </div>
                

                <div className="form-group">
                    <label>Phone</label>
                    <input type="number" className="form-control" placeholder="Enter phone" name="phone" value={phone} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter City" name="city" value={city} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" placeholder="Enter State" name="state" value={state} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" placeholder="Enter Country" name="country" value={country} onChange={handleChange}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="confirm password" name="password2" value={password2} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button> 
                <p className="forgot-password text-right">
                    Already registered <Link to='/login'>Login</Link>
                </p>
            </form>
        )
    }

    export default SignUp

