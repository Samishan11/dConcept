import * as React from "react";
import './admin.css'
import { Link } from "react-router-dom";
import { Admin, Resource, ListGuesser } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { UserList } from "../User";

const dataProvider = restProvider('http://localhost:3000');
const Adminpannel = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="admin" list={UserList} />
            <Resource name="User" list={ListGuesser} />
            <Resource name="Add Course" list={ListGuesser} />
            <Resource name="Add Blog" list={ListGuesser} />
            <Resource name="Add Feed" list={ListGuesser} />
        </Admin>
        // <>

        //     <div className="admin_panel">
        //         <div className="row col-md-12">
        //         <div style={{ minHeight: "100vh", marginTop:'60px' }} className="col-md-2 text-light shadow" >
        //                 <div className="sticky-top">
        //                     <ul class="list-group">
        //                     <li style={{border:'none'}} className="list-group-item ">
        //                             <Link activeClassName="c-active " className='admin-link' style={{ textDecoration: "none" }} to={''}>
        //                             <i className='fas text-dark fa-home mx-2'></i><span className="text-dark">Dashboard</span>
        //                             </Link>
        //                         </li>
        //                     </ul>
        //                     <hr className="text-dark" />
        //                     <ul class="list-group border">
        //                         <li style={{border:'none'}} className="list-group-item ">
        //                             <Link style={{ textDecoration: "none" }} to={''}>
        //                             <i className='fas text-dark fa-home mx-2'></i><span className="text-dark">Add Courses</span>
        //                             </Link>
        //                         </li>
        //                         <li style={{border:'none'}} className="list-group-item ">
        //                             <Link style={{ textDecoration: "none" }} to={''}>
        //                             <i className='fas text-dark fa-home mx-2'></i><span className="text-dark">Add Blog</span>
        //                             </Link>
        //                         </li>
        //                         <li style={{border:'none'}} className="list-group-item ">
        //                             <Link style={{ textDecoration: "none" }} to={''}>
        //                             <i className='fas text-dark fa-home mx-2'></i><span className="text-dark">Add Feed</span>
        //                             </Link>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}
export default Adminpannel;
