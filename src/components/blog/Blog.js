import React from 'react';
import logo from '../images/logo/dconcept.png';
import './blog.css';
const Blog = () => {
    return (
        <>
            <div className="contianer" style={{marginTop:"100px"}}>
                <div className="row col-12 col-md-12">
                    <div  style={{minHeight:"100vh"}} className="col-md-2 position-fixed text-light shadow" >
                        <img src={logo} className="img img-fluid" alt="" />
                        <ul class="list-group">
                            <li class="list-group-item"><h4 className='text-center cursor-pointer'><strong>Recent Blog</strong></h4></li>
                            <li class="list-group-item"><h4 className='text-center cursor-pointer'><strong>Block Chain</strong></h4></li>
                            <li class="list-group-item"><h4 className='text-center cursor-pointer'><strong>Recent Blog</strong></h4></li>
                            <li class="list-group-item"><h4 className='text-center cursor-pointer'><strong>Recent Blog</strong></h4></li>
                        </ul>
                        <div style={{width:'200px'}} className="social my-5 bg-primary py-2 d-flex justify-content-center">
                            <i className='fab text-white h4 mx-2 fa-facebook'></i>
                            <i className='fab text-white h4 mx-2 fa-instagram'></i>
                            <i className='fab text-white h4 mx-2 fa-twitter'></i>
                            <i className='fab text-white h4 mx-2 fa-youtube'></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;