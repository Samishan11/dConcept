import React from 'react'
import img1 from '../images/img/img1.jpg'
import img2 from '../images/img/img2.jpg'
import img3 from '../images/img/img3.jpg'
import logo from '../images/logo/dconcept.png';
import { Link } from 'react-router-dom';
import lamp from '../images/img/lamp.png';
import book from '../images/img/book.png';
import './course.css'
const Course = () => {
    return (
        <>
            <div className=" course_section">
                <div className="row col-12 col-md-12">
                    <div style={{ minHeight: "100vh" }} className="col-md-2 text-light shadow" >
                        <div className="sticky-top">
                            <img src={logo} className="img img-fluid" alt="" />
                            <hr className='bg-dark mt-2 d-block m-0 p-0' />
                            <ul class="list-group">
                                <Link style={{ textDecoration: "none" }} to={''}><li class=" li list-group-item"><i className='fas fa-user mx-2'></i><span>Django Course</span></li></Link>
                                <Link style={{ textDecoration: "none" }} to={''}><li class=" li list-group-item"><i className='fas fa-user mx-2'></i><span>Django Course</span></li></Link>
                                <Link style={{ textDecoration: "none" }} to={''}><li class=" li list-group-item"><i className='fas fa-user mx-2'></i><span>Django Course</span></li></Link>
                                <Link style={{ textDecoration: "none" }} to={''}><li class=" li list-group-item"><i className='fas fa-user mx-2'></i><span>Django Course</span></li></Link>
                                <Link style={{ textDecoration: "none" }} to={''}><li class=" li list-group-item"><i className='fas fa-user mx-2'></i><span>Django Course</span></li></Link>
                            </ul>
                            <div className="social_div primaryColor pt-1">
                                <i className='fab text-white h5 mx-2 fa-facebook'></i>
                                <i className='fab text-white h5 mx-2 fa-instagram'></i>
                                <i className='fab text-white h5 mx-2 fa-twitter'></i>
                                <i className='fab text-white h5 mx-2 fa-youtube'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="container bg-light">
                            <div className="input-group py-3">
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Search Courses..."
                                />
                                <button className="btn btn-primary py-2">
                                    <i className="fa fa-search"></i> &nbsp; Search
                                </button>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-2">
                                    <a href="#" className="text-decoration-none">
                                        <div className="p-0 border shadow-sm m-2 bg-white">
                                            <div className="course-img mb-5">
                                                <img src={img1} className="course-pic" alt="" />
                                                <h6 className="text rounded py-1 px-2 premium-next">
                                                    Rs. 1200
                                                </h6>
                                                <h6 className="text rounded py-1 px-2 premium-price">
                                                    Paid <span><i className="fa fa-star"></i></span>
                                                </h6>
                                                <div className="course-details d-flex flex-wrap bg-white shadow-sm border justify-content-around rounded mx-md-3 mx-sm-2 mx-2">
                                                    <div className="course-type mx-2 my-2 text-center">
                                                        <i className="fa fa-clock c-icons"></i>
                                                        <h6 className="text text-dark course-title">5 Hours</h6>
                                                    </div>
                                                    <div className="course-type mx-2 my-2 text-center">
                                                        <i className="fa fa-language c-icons"></i>
                                                        <h6 className="text text-dark course-title">English</h6>
                                                    </div>
                                                    <div className="course-type mx-2 my-2 text-center">
                                                        <i className="fa fa-user-graduate c-icons"></i>
                                                        <h6 className="text text-dark course-title">
                                                            1258 Enrolled
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mx-3 mb-3">
                                                <p style={{fontSize:'16px'}} className="text text-dark course-title mb-2">
                                                    Django Crash Course
                                                </p>
                                                <hr />
                                                <div className="d-flex flex-wrap mb-2 justify-content-center">
                                                    <small className="text text-white bg-dark rounded-pill px-2 me-2 mb-2">
                                                        Python
                                                    </small>
                                                    <small className="text text-white bg-dark rounded-pill px-2 me-2 mb-2">
                                                        Django
                                                    </small>
                                                    <small className="text text-white bg-dark rounded-pill px-2 me-2 mb-2">
                                                        HTML
                                                    </small>
                                                    <small className="text text-white bg-dark rounded-pill px-2 me-2 mb-2">
                                                        CSS
                                                    </small>
                                                    <small className="text text-white bg-dark rounded-pill px-2 me-2 mb-2">
                                                        JS
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Course