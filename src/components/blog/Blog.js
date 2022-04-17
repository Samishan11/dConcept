import './blog.css';
import React from 'react';
import img1 from '../images/img/img1.jpg'
import img2 from '../images/img/img2.jpg'
import img3 from '../images/img/img3.jpg'
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <>
            <div className="container-fluid padt">
                <div className="container col-md-10 my-3">
                    <div className="row">
                        <div className="col-md-9">
                            <p className="text text-muted h3 text-center">
                                Explore Our Blogs
                            </p>
                            <hr />
                            <div className="py-1 px-2">
                                {/* first blog content */}
                                <div className="whole-blog-content border">
                                    <div className="text-center my-1">
                                        <div className="d-flex justify-content-center flex-wrap">
                                            <a
                                                href="#"
                                                className="text-decoration-none me-3 ms-2 text-muted h5"
                                            >
                                                15 April 2022
                                            </a>
                                            <span className="breaker h4">|</span>
                                            <a
                                                href="#"
                                                className="text-decoration-none me-3 ms-2 text-muted h5"
                                            >
                                                Education
                                            </a>
                                            <span className="breaker h4">|</span>
                                            <a
                                                href="#"
                                                className="text-decoration-none me-3 ms-2 text-muted h5"
                                            >
                                                Comment
                                            </a>
                                        </div>
                                        <p className="text text-muted h3 mt-1">
                                            <a href="#" className="text-decoration-none text-muted">
                                                Study Django Crash Course
                                            </a>
                                        </p>
                                    </div>
                                    <div className="img-box">
                                        <img src={img1} className="blog-img" alt="" />
                                    </div>
                                    <p className="text text-muted my-3 mx-1">
                                        Fusce justo mauris, rhoncus eget sapien ut, pharetra gravida
                                        neque. Proin velit erat, vulputate vel pretium ut, eleifend
                                        eu eros. Phasellus sodales cursus lacus, eget rutrum ante
                                        pellentesque feugiat. Suspendisse varius turpis erat, quis
                                        tempus dui varius imperdiet. Nunc eget nisi eget justo
                                        efficitur placerat non ac metus. Fusce sed diam posuere nibh
                                        placerat volutpat in sit amet nunc. Morbi ut aliquam erat,
                                        non vulputate mi. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Cras porttitor lacus eu ex malesuada
                                        congue. Morbi at nisl sed odio venenatis pharetra nec et ex.
                                        In rutrum non nibh eu semper. Proin vel dapibus erat.
                                        Pellentesque mauris mauris, hendrerit lacinia semper non,
                                        vehicula in erat.
                                    </p>
                                    <div className="mx-auto text-center">
                                        <a href="#" className="btn btn-outline-primary">
                                            Continue Reading
                                        </a>
                                    </div>
                                </div>
                                <hr />
                                {/* second blog content */}
                                <div className="whole-blog-content mt-5">
                                    <div className="text-center my-3">
                                        <span className="text">
                                            <a
                                                href="#"
                                                className="text-decoration-none me-3 ms-2 text-dark h5"
                                            >
                                                15 April 2022
                                            </a>
                                        </span>
                                        <span className="breaker h4">|</span>
                                        <span className="text">
                                            <a
                                                href="#"
                                                className="text-decoration-none me-3 ms-2 text-dark h5"
                                            >
                                                Education
                                            </a>
                                        </span>
                                        <p className="text text-dark h1 mt-2">
                                            <a href="#" className="text-decoration-none text-warning">
                                                Study Django Crash Course
                                            </a>
                                        </p>
                                    </div>
                                    <div className="img-box">
                                        <img src="/images/1.jpg" className="blog-img" alt="" />
                                    </div>
                                    <p className="text text-muted my-3 mx-1">
                                        Fusce justo mauris, rhoncus eget sapien ut, pharetra gravida
                                        neque. Proin velit erat, vulputate vel pretium ut, eleifend
                                        eu eros. Phasellus sodales cursus lacus, eget rutrum ante
                                        pellentesque feugiat. Suspendisse varius turpis erat, quis
                                        tempus dui varius imperdiet. Nunc eget nisi eget justo
                                        efficitur placerat non ac metus. Fusce sed diam posuere nibh
                                        placerat volutpat in sit amet nunc. Morbi ut aliquam erat,
                                        non vulputate mi. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Cras porttitor lacus eu ex malesuada
                                        congue. Morbi at nisl sed odio venenatis pharetra nec et ex.
                                        In rutrum non nibh eu semper. Proin vel dapibus erat.
                                        Pellentesque mauris mauris, hendrerit lacinia semper non,
                                        vehicula in erat.
                                    </p>
                                    <div className="mx-auto text-center">
                                        <a href="#" className="btn btn-outline-primary">
                                            Continue Reading
                                        </a>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <p className="text text-muted h3 text-center">Also View here</p>
                            <hr />
                            <div className="p-1">
                                {/* first title here */}
                                <div className="first-title mb-5 pb-5">
                                    <div className="f-name mb-3">
                                        <span className="sideline"></span>
                                        <p className="text text-center h4">Recent Blogs</p>
                                        <span className="sideline"></span>
                                    </div>
                                    <div className="blogs my-2 d-flex justify-content-start mb-3">
                                        <div className="recent-blog-img">
                                            <a href="#" className="text-decoration-none">
                                                <img
                                                    src={img2}
                                                    className="recentBlogImg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="title-desc mt-2 mx-2">
                                            <a href="#" className="text-decoration-none">
                                                <p className="text h6 mb-0 titleBlog">
                                                    Study Djnago Crash Course
                                                </p>
                                            </a>
                                            <small className="text text-muted">15 April, 2022</small>
                                        </div>
                                    </div>
                                    {/* seperated from here */}
                                    <div className="blogs my-2 d-flex justify-content-start mb-3">
                                        <div className="recent-blog-img">
                                            <a href="#" className="text-decoration-none">
                                                <img
                                                    src="/images/app.jpg"
                                                    className="recentBlogImg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="title-desc mt-2 mx-2">
                                            <a href="#" className="text-decoration-none">
                                                <p className="text h6 mb-0 titleBlog">
                                                    Study MERN Stack Course
                                                </p>
                                            </a>
                                            <small className="text text-muted">20 April, 2022</small>
                                        </div>
                                    </div>
                                    {/* seperated from here */}
                                    <div className="blogs my-2 d-flex justify-content-start mb-3">
                                        <div className="recent-blog-img">
                                            <a href="#" className="text-decoration-none">
                                                <img
                                                    src="/images/1.jpg"
                                                    className="recentBlogImg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="title-desc mt-2 mx-2">
                                            <a href="#" className="text-decoration-none">
                                                <p className="text h6 mb-0 titleBlog">
                                                    Study MERN Stack Course
                                                </p>
                                            </a>
                                            <small className="text text-muted">20 April, 2022</small>
                                        </div>
                                    </div>
                                    {/* seperated from here */}
                                    <div className="blogs my-2 d-flex justify-content-start mb-3">
                                        <div className="recent-blog-img">
                                            <a href="#" className="text-decoration-none">
                                                <img
                                                    src="/images/engine.jpg"
                                                    className="recentBlogImg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="title-desc mt-2 mx-2">
                                            <a href="#" className="text-decoration-none">
                                                <p className="text h6 mb-0 titleBlog">
                                                    Study MERN Stack Course
                                                </p>
                                            </a>
                                            <small className="text text-muted">20 April, 2022</small>
                                        </div>
                                    </div>
                                </div>
                                {/* second title here */}
                                <div className="first-title mb-5 pb-5">
                                    <p className="text text-center h4 mb-3">Blog Catagories</p>
                                    <a href="#" className="text-decoration-none py-0">
                                        Recent Blog (05)
                                        {/* <span className="badge bg-dark">20</span> */}
                                    </a>
                                    <hr className="bg-muted" />
                                    <a href="#" className="text-decoration-none py-0">
                                        Education Blog [09]
                                    </a>
                                    <hr className="bg-muted" />
                                    <a href="#" className="text-decoration-none py-0">
                                        Travel Blog [15]
                                    </a>
                                    <hr className="bg-muted" />
                                    <a href="#" className="text-decoration-none py-0">
                                        Photography Blog [30]
                                    </a>
                                    <hr className="bg-muted" />
                                    <a href="#" className="text-decoration-none py-0">
                                        LifeStyle Blog [10]
                                    </a>
                                    <hr className="bg-muted" />
                                    <a href="#" className="text-decoration-none py-0">
                                        Work Blog [10]
                                    </a>
                                </div>
                                {/* third title here */}
                                <div className="first-title mb-5 pb-5">
                                    <p className="text text-center h4 mb-3">Advertisement</p>
                                    image is not working in this section.
                                    <div className="he">
                                        <img src={img2} className="adImg" alt="" />
                                    </div>
                                </div>
                                {/* fourth title here */}
                                <div className="first-title mb-5 pb-5">
                                    <p className="text text-center h4 mb-3">Tags</p>
                                    <div className="tags-here">
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Arts
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Travel
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Nature
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Beaches
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Mountains
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Blogs
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Aerial
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Adventure
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Life-style
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Education
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Books
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Blogs
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Aerial
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Adventure
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Life-style
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Education
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none border border-muted tagsItem px-1 me-3 mb-2"
                                        >
                                            Books
                                        </a>
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