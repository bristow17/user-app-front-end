import axios from 'axios'
import React, { useState } from 'react'

const UserRegistration = () => {
    const [data, setdata] = useState(

        {
            "name": "",
            "dob": "",
            "blood": "",
            "mobile": "",
            "address": "",
            "pin": "",
            "district": "",
            "place": "",
            "email": "",
            "username": "",
            "pass": "",
            "cpass": ""


        }
    )

    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readvalue = () => {

        if (data.pass != data.cpass) {

            alert("Password doesn't match!!!!")
            
        } else {
        axios.post("http://localhost:8080/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Added Successfully");
                } else {
                    alert(response.data);
                }

            }
        ).catch(
            (error) => {
                alert("error");
            }
        )
    }}


    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <lable className="label form-label">Name</lable>
                                <input type="text" className="input form-control" name='name' value={data.name} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="label form-label">Email</label>
                                <input type="text" className="input form-control" name='email' value={data.email} onChange={inputhandler} />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <lable className="label form-label">Pincode</lable>
                                <input type="text" className="input form-control" name='pin' value={data.pin} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="label form-label">Blood Group</label>
                                <select name="district" id="" className="form-control" value={data.blood} onChange={inputhandler}>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB+">AB+</option>
                                    <option value="O+">O+</option>
                                    <option value="o-">o-</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <lable className="label form-label">Place</lable>
                                <input type="text" className="input form-control" name='place' value={data.place} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="label form-label">District</label>
                                <select name="blood" id="" className="form-control" value={data.district} onChange={inputhandler}>
                                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                    <option value="Kollam">Kollam</option>
                                    <option value="Pathanamthitta">Pathanamthitta</option>
                                    <option value="Alappuzha">Alappuzha</option>
                                    <option value="Kottayam">Kottayam</option>
                                    <option value="Idukki">Idukki</option>
                                    <option value="Ernakulam">Ernakulam</option>
                                    <option value="Thrissur">Thrissur</option>
                                    <option value="Palakkad">Palakkad</option>
                                    <option value="Malappuram">Malappuram</option>
                                    <option value="Kozhikode">Kozhikode</option>
                                    <option value="Wayanad">Wayanad</option>
                                    <option value="Kannur">Kannur</option>
                                    <option value="Kasaragod">Kasaragod</option>
                                </select>

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="label form-label">Mobile</label>
                                <input type="text" className="input form-control" name='mobile' value={data.mobile} onChange={inputhandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="label form-label">dob</label>
                                <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputhandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <lable className="label form-label">Address</lable>
                                <textarea name="address" id="" className="form-control" value={data.address} onChange={inputhandler}></textarea>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <lable className="label form-label">Username</lable>
                                <input type="text" className="input form-control" name='username' value={data.username} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <lable className="label form-label">Password</lable>
                                <input type="text" className="input form-control" name='pass' value={data.pass} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <lable className="label form-label">Confirm Password</lable>
                                <input type="text" className="input form-control" name='cpass' value={data.cpass} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-primary" onClick={readvalue}>REGISTER</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    )
}


export default UserRegistration