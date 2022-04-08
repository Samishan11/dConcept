import React from 'react'
import './a.css'
const Contact = () => {
    return (
        <>
            <div style={{marginTop:"100px"}} className='container bg-light pb-5'>
                <div className='bg-secondary py-2 my-5 mx-5'>
                <h1 className='text-light text-center'>Keep in touch with us?</h1>
                </div>
                {/*  */}
                <div style={{ width: "50vw" }} className="container bg-white d-block mx-auto">
                    <form className="container validate-form">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">First Name</label>
                                    <input type="text" className="form-control input100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter firstname" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Last Name</label>
                                    <input type="text" className="form-control input100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter lastname" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputEmail1">Email*</label>
                            <input type="email" className="form-control input100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputEmail1">Message*</label>
                            <textarea class="form-control input100" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className='btn btn-outline-dark d-block mx-auto'>Submit</button>
                    </form>
                </div>
                {/*  */}
            </div>
        </>
    )
}

export default Contact