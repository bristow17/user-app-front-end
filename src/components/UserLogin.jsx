import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

    const [data, setdata] = useState(

        {
           
            "username": "",
            "pass": ""


        }
    )

    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readvalue=()=>{
        console.log(data)
    }

    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <lable className="label form-label">Username</lable>
                                <input type="text" className="input form-control" name='username' value={data.username} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <lable className="label form-label">Password</lable>
                                <input type="text" className="input form-control" name='pass' value={data.pass} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-primary" onClick={readvalue}>LOGIN</button>


                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<br></br><br></br>
                         <center>   <Link class="nav-link" to="/register">new user? sign up here!</Link></center>
                                </div>


                        </div>


                    </div>
                </div>
            </div>




        </div>
    )
}

export default UserLogin