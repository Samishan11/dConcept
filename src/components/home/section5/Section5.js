import img1 from '../../images/img/img1.jpg'
import img2 from '../../images/img/img2.jpg'
import img3 from '../../images/img/img3.jpg'
export const Section5 = () => {
    return (
        <div className='container bg-light pb-4 my-5'>
            <div className='primaryColor py-2 my-5 mx-5'>
                <h1 className='text-light text-center'>What they say?</h1>
            </div>
            <div className="row mx-5">
                <div className="col-md-4">
                    <div className="p-1 border shadow-sm bg-white">
                        <div className="user-photo mb-3">
                            <img src={img1} className="img-fluid" alt="" />
                            <div className="s-icons d-flex justify-content-evenly mx-2">
                                <a href="#">
                                    <i className="fab fa-facebook rounded-circle user-icon p-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram rounded-circle user-icon p-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube rounded-circle user-icon p-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-github rounded-circle user-icon p-1"></i>
                                </a>
                            </div>
                        </div>
                        <div className="details">
                            <h5 className="text px-2 text-dark pt-3 pb-0 mb-0">
                                <strong> Gokarna Adhikari</strong>
                            </h5>
                            <span className="text px-2 text-muted pt-0 mt-0">
                                FullStack Developer
                            </span>
                            <p className="text px-2 text-dark pt-3">
                                They do have all the knowledge on how thing works. They
                                helped me to grow my account so fast.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-1 border shadow-sm bg-white">
                        <div className="user-photo mb-3">
                            <img src={img2} className="img-fluid" alt="" />
                            <div className="s-icons d-flex justify-content-evenly mx-2">
                                <a href="#">
                                    <i className="fab fa-facebook rounded-circle user-icon p-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram rounded-circle user-icon p-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube rounded-circle user-icon p-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-github rounded-circle user-icon p-1"></i>
                                </a>
                            </div>
                        </div>
                        <div className="details">
                            <h5 className="text px-2 text-dark pt-3 pb-0 mb-0">
                                <strong> Samishan Thapa Chhetri</strong>
                            </h5>
                            <span className="text px-2 text-muted pt-0 mt-0">
                                Web Developer
                            </span>
                            <p className="text px-2 text-dark pt-3">
                                I've worked with other digital marketing teams too but i
                                find these guys so easy and punctuate.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-1 border shadow-sm bg-white">
                        <div className="user-photo mb-3">
                            <img src={img3} className="img-fluid" alt="" />
                            <div className="s-icons d-flex justify-content-evenly mx-2">
                                <a href="#">
                                    <i className="fab fa-facebook rounded-circle user-icon p-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram rounded-circle user-icon p-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube rounded-circle user-icon p-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-github rounded-circle user-icon p-1"></i>
                                </a>
                            </div>
                        </div>
                        <div className="details">
                            <h5 className="text text-dark pt-3 pb-0 mb-0">
                                <strong className='px-2'>Manoram Baudel</strong>
                            </h5>
                            <span className="text px-2 text-muted pt-0 mt-0">
                                Android Developer
                            </span>
                            <p className="text px-2 text-dark pt-3">
                                They promised me to raise my sales by twice when we met
                                and after one month they proved it easily.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}