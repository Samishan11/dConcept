import React from 'react'
import video from '../videos/Sea - 4006.mp4'
import { Link } from 'react-router-dom'
const Detail = () => {
    return (
        <>
            <div className="container-fluid pad">
                <div className="container col-md-11 bg-light">
                    <div className="row pt-3 border">
                        <div className="col-md-9">
                            <div className="p-1">
                                <div className="video-title d-flex justify-content-start">
                                    <h5 className="text text-dark me-2">1.</h5>
                                    <span className="text text-dark h5">
                                        Django Introduction Video
                                    </span>
                                </div>
                                <video width={"100%"} height={"auto"} controls>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="pt-1 pb-1 px-0 mt-3 rightbar border">
                                <h5 className="text text-dark ms-1 mb-0 pb-0">
                                    Course Content
                                </h5>
                                <hr className="col-md-6 bg-muted mt-0 pt-0 ms-1" />
                                <div className="video-clips">
                                    {/* first accordion or Introduction part*/}
                                    {/* accordion start here */}
                                    <div className="accordion p-0" id="accordionExample">
                                        {/*  */}
                                        <div className="accordion-item">
                                            {/* first one start here */}
                                            <h2 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Beginning Module
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                {/* no1 */}
                                                <div className="accordion-body pb-0 d-flex justify-content-between">
                                                    <a href="#" className="text-decoration-none">
                                                        <div className="video-title d-flex justify-content-start">
                                                            <h6 className="text text-dark me-2">1.</h6>
                                                            <span className="text text-dark h6">
                                                                Django Introduction Video
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <div className="title-details dropdown">
                                                        <i className="fa fa-ellipsis-v" type="button"></i>
                                                    </div>
                                                </div>
                                                {/* no1 */}
                                                {/* no2 */}
                                                <div className="accordion-body pb-0 d-flex justify-content-between">
                                                    <a href="#" className="text-decoration-none">
                                                        <div className="video-title d-flex justify-content-start">
                                                            <h6 className="text text-dark me-2">2.</h6>
                                                            <span className="text text-dark h6">
                                                                Django Setup Video
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <div className="title-details dropdown">
                                                        <i className="fa fa-ellipsis-v" type="button"></i>
                                                    </div>
                                                </div>
                                                {/* no2 */}
                                                {/* no3 */}
                                                <div className="accordion-body pb-0 d-flex justify-content-between">
                                                    <a href="#" className="text-decoration-none">
                                                        <div className="video-title d-flex justify-content-start">
                                                            <h6 className="text text-dark me-2">3.</h6>
                                                            <span className="text text-dark h6">
                                                                Django First Project
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <div className="title-details dropdown">
                                                        <i className="fa fa-ellipsis-v" type="button"></i>
                                                    </div>
                                                </div>
                                                {/* no3 */}
                                                {/* no4 */}
                                                <div className="accordion-body pb-0 d-flex justify-content-between">
                                                    <a href="#" className="text-decoration-none">
                                                        <div className="video-title d-flex justify-content-start">
                                                            <h6 className="text text-dark me-2">4.</h6>
                                                            <span className="text text-dark h6">
                                                                Django Second Project
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <div className="title-details dropdown">
                                                        <i className="fa fa-ellipsis-v" type="button"></i>
                                                    </div>
                                                </div>
                                                {/* no4 */}
                                                {/* no5 */}
                                                <div className="accordion-body pb-0 d-flex justify-content-between">
                                                    <a href="#" className="text-decoration-none">
                                                        <div className="video-title d-flex justify-content-start">
                                                            <h6 className="text text-dark me-2">5.</h6>
                                                            <span className="text text-dark h6">
                                                                Django Third Project
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <div className="title-details dropdown">
                                                        <i className="fa fa-ellipsis-v" type="button"></i>
                                                    </div>
                                                </div>
                                                {/* no5 */}
                                                {/* no6 */}
                                                <div className="accordion-body pb-0 d-flex justify-content-between">
                                                    <a href="#" className="text-decoration-none">
                                                        <div className="video-title d-flex justify-content-start">
                                                            <h6 className="text text-dark me-2">6.</h6>
                                                            <span className="text text-dark h6">
                                                                Django Fourth Project
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <div className="title-details dropdown">
                                                        <i className="fa fa-ellipsis-v" type="button"></i>
                                                    </div>
                                                </div>
                                                {/* no6 */}
                                                {/* no7 */}
                                                <div className="accordion-body pb-0 d-flex justify-content-between">
                                                    <a href="#" className="text-decoration-none">
                                                        <div className="video-title d-flex justify-content-start">
                                                            <h6 className="text text-dark me-2">7.</h6>
                                                            <span className="text text-dark h6">
                                                                Django Fifth Project
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <div className="title-details dropdown">
                                                        <i className="fa fa-ellipsis-v" type="button"></i>
                                                    </div>
                                                </div>
                                                {/* no7 */}
                                                {/* no8 */}
                                                <div className="accordion-body pb-0 d-flex justify-content-between">
                                                    <a href="#" className="text-decoration-none">
                                                        <div className="video-title d-flex justify-content-start">
                                                            <h6 className="text text-dark me-2">8.</h6>
                                                            <span className="text text-dark h6">
                                                                Django Fifth Project
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <div className="title-details dropdown">
                                                        <i className="fa fa-ellipsis-v" type="button"></i>
                                                    </div>
                                                </div>
                                                {/* no8 */}
                                            </div>
                                            {/* first one end here here */}
                                        </div>
                                        {/*  */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="true"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Django Setup
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body d-flex justify-content-between">
                                                    <a href="#" className="text-decoration-none">
                                                        <div className="video-title d-flex justify-content-start">
                                                            <h6 className="text text-dark me-2">1.</h6>
                                                            <span className="text text-dark h6">
                                                                Django Introduction Video
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <div className="title-details dropdown">
                                                        <i className="fa fa-ellipsis-v" type="button"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="true"
                                                    aria-controls="collapseThree"
                                                >
                                                    First Django Project
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body d-flex justify-content-between">
                                                    <a href="#" className="text-decoration-none">
                                                        <div className="video-title d-flex justify-content-start">
                                                            <h6 className="text text-dark me-2">1.</h6>
                                                            <span className="text text-dark h6">
                                                                Django Introduction Video
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <div className="title-details dropdown">
                                                        <i className="fa fa-ellipsis-v" type="button"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  */}
                                    </div>
                                    {/* accordion end here */}
                                </div>
                            </div>
                        </div>
                        {/* <hr /> */}
                    </div>
                    <div className="container">
                        <ul className='d-flex'>
                            <Link className='nav-link' to=''>Content</Link>
                            <Link className='nav-link' to=''>Feedback</Link>
                            <Link className='nav-link' to=''>Feedback</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail