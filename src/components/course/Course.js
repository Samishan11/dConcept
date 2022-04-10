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
                    <div style={{ minHeight: "92vh" }} className="col-md-2  text-light shadow" >
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
                    <div className="col-md-10">

                        <div className="row">
                            {/* <div className="col-md-3 my-4">
                                <div className="  shadow-sm bg-white">
                                    <div className="user-photo mb-3">
                                        <img src={img1} className="img-fluid" alt="" />
                                        <div className="s-icons">
                                            <a href="#">
                                                <i className="fab fa-github rounded-circle user-icon"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h6 className="text fw-bold px-2 text-dark py-3">
                                            They promised me to raise my sales by twice when we met
                                            and after one month they proved it easily.
                                        </h6>
                                    </div>
                                    <div className="action_section py-1 m-0 d-flex justify-content-evenly">
                                        <i className="fas fa-thumbs-up "></i>
                                        <i className="fas fa-comment rounded-circle "></i>
                                        <i className="fas fa-share rounded-circle "></i>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Course