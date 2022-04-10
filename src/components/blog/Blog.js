import './blog.css';
import React from 'react';
import logo from '../images/logo/dconcept.png';
import lamp from '../images/img/lamp.png';
import book from '../images/img/book.png';
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <>
            <div className="blog_section" style={{ marginTop: "60px" }}>
                <div className="row col-12 col-md-12">
                    <div style={{ minHeight: "92vh" }} className="col-md-2  text-light shadow" >
                        <img src={logo} className="img img-fluid" alt="" />
                        <hr className='bg-dark mt-2 d-block m-0 p-0' />
                        <ul class="list-group">
                            <Link style={{ textDecoration: "none" }} to={''}><li class=" li list-group-item"><i className='fas fa-user mx-2'></i><span>Recent Blog</span></li></Link>
                            <Link style={{ textDecoration: "none" }} to={''}><li class=" li list-group-item"><i className='fas fa-user mx-2'></i><span>Recent Blog</span></li></Link>
                            <Link style={{ textDecoration: "none" }} to={''}><li class=" li list-group-item"><i className='fas fa-user mx-2'></i><span>Recent Blog</span></li></Link>
                            <Link style={{ textDecoration: "none" }} to={''}><li class=" li list-group-item"><i className='fas fa-user mx-2'></i><span>Recent Blog</span></li></Link>
                            <Link style={{ textDecoration: "none" }} to={''}><li class=" li list-group-item"><i className='fas fa-user mx-2'></i><span>Recent Blog</span></li></Link>
                        </ul>
                        <div className="social_div primaryColor pt-1">
                            <i className='fab text-white h5 mx-2 fa-facebook'></i>
                            <i className='fab text-white h5 mx-2 fa-instagram'></i>
                            <i className='fab text-white h5 mx-2 fa-twitter'></i>
                            <i className='fab text-white h5 mx-2 fa-youtube'></i>
                        </div>
                    </div>
                    <div className="col-md-10 all-courses">
                        <div className="row mt-3">
                            <div className="col-md-4 card-courses ">
                                <div className="card mt-4 bgOrange ">
                                    <div className="title  m-3">
                                        <span className='course-title'>COURSE</span>
                                    </div>
                                    <div className="sub-title px-5">
                                        <span className='sub-title-courser'>Earn While You Learn</span>
                                    </div>
                                    <div className="div mx-5 my-2">
                                        <span className='lnc-text'>10 Lessons | 3 Books</span>
                                    </div>
                                    <div className="img_course mx-4">
                                        <img src={lamp} width={90} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4  card-courses ">
                                <div className="card mt-4 primaryColor ">
                                    <div className="title  m-3">
                                        <span className='course-title'>COURSE</span>
                                    </div>
                                    <div className="sub-title px-5">
                                        <span className='sub-title-courser'>Django</span>
                                        <p style={{fontSize:'11px', fontWeight:'normal'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    </div>
                                    <div className="div mx-5">
                                        <span className='lnc-text'>10 Lessons | 3 Books</span>
                                    </div>
                                    <div className="img_course mx-4">
                                        <img src={book} width={90} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4  card-courses ">
                                <div className="card mt-4 bgPink ">
                                    <div className="title  m-3">
                                        <span className='course-title'>COURSE</span>
                                    </div>
                                    <div className="sub-title px-5">
                                        <span className='sub-title-courser'>Earn While You Learn</span>
                                    </div>
                                    <div className="div mx-5 my-2">
                                        <span className='lnc-text'>10 Lessons | 3 Books</span>
                                    </div>
                                    <div className="img_course mx-4">
                                        <img src={lamp} width={90} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4  card-courses ">
                                <div className="card mt-4 bgPink ">
                                    <div className="title  m-3">
                                        <span className='course-title'>COURSE</span>
                                    </div>
                                    <div className="sub-title px-5">
                                        <span className='sub-title-courser'>Earn While You Learn</span>
                                    </div>
                                    <div className="div mx-5 my-2">
                                        <span className='lnc-text'>10 Lessons | 3 Books</span>
                                    </div>
                                    <div className="img_course mx-4">
                                        <img src={lamp} width={90} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-courses ">
                                <div className="card mt-4 bgOrange ">
                                    <div className="title  m-3">
                                        <span className='course-title'>COURSE</span>
                                    </div>
                                    <div className="sub-title px-5">
                                        <span className='sub-title-courser'>Earn While You Learn</span>
                                    </div>
                                    <div className="div mx-5 my-2">
                                        <span className='lnc-text'>10 Lessons | 3 Books</span>
                                    </div>
                                    <div className="img_course mx-4">
                                        <img src={lamp} width={90} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4  card-courses ">
                                <div className="card mt-4 primaryColor ">
                                    <div className="title  m-3">
                                        <span className='course-title'>COURSE</span>
                                    </div>
                                    <div className="sub-title px-5">
                                        <span className='sub-title-courser'>Django</span>
                                        <p style={{fontSize:'11px', fontWeight:'normal'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    </div>
                                    <div className="div mx-5">
                                        <span className='lnc-text'>10 Lessons | 3 Books</span>
                                    </div>
                                    <div className="img_course mx-4">
                                        <img src={book} width={90} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;