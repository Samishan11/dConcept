import './home.css'
import img1 from '../images/img/img1.jpg'
import img2 from '../images/img/img2.jpg'
import img3 from '../images/img/img3.jpg'
import logo from '../images/logo/dconcept.png';
import { Carousel } from '3d-react-carousal';

const Home = () => {
    var slides = [
        <img style={{ height: '70vh', objectFit: 'cover', width: '100%' }} src={img1} alt="1" />,
        <img style={{ height: '70vh', objectFit: 'cover', width: '100%' }} src={img2} alt="2" />,
        <img style={{ height: '70vh', objectFit: 'cover', width: '100%' }} src={img3} alt="3" />,
        <img style={{ height: '70vh', objectFit: 'cover', width: '100%' }} src={img1} alt="4" />,
        <img style={{ height: '70vh', objectFit: 'cover', width: '100%' }} src={img2} alt="5" />,
        <img style={{ height: '70vh', objectFit: 'cover', width: '100%' }} src={img3} alt="6" />,
        <img style={{ height: '70vh', objectFit: 'cover', width: '100%' }} src={img1} alt="7" />]

    return (
        <>
            <Carousel className='container p-0 m-0' slides={slides} autoplay={true} interval={1500} />

            {/*  */}
            <div className='container bg-light my-5'>
                <div className='primaryColor py-2 my-5 mx-5'>
                    <h1 className='text-light text-center'>Who we are?</h1>
                </div>
                <div className='row  mx-5'>
                    <div className='text col-12 col-md-6 col-sm-12'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium accusamus iure adipisci. Facere minus fugiat enim, cupiditate omnis dignissimos quisquam obcaecati repellendus dolore? Similique quasi, distinctio quidem autem dignissimos eligendi iure voluptatibus neque magnam nisi illum, sunt voluptatum ducimus dolor fugit minima consequuntur molestiae sed ea tenetur necessitatibus accusantium? Quia!</p>
                    </div>
                    <div className='img col-12 col-md-6 col-sm-12'>
                        <img src={logo} className="img img-fluid" alt="" />
                    </div>
                </div>
            </div>

            {/*  */}
            <div className='container bg-light my-5'>
                <div className='primaryColor py-2 my-5 mx-5'>
                    <h1 className='text-light text-center'>What we do?</h1>
                </div>
                <div className='row  mx-5'>
                    <div className='img col-12 col-md-6 col-sm-12'>
                        <img src="https://13p13n407tzq3x5jwg1daxox-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/internet-marketing-company-01.jpg" style={{ height: '60vh', objectFit: 'cover', width: '80%' }} className="img img-fluid" alt="" />
                    </div>
                    <div className='text col-12 col-md-6 col-sm-12'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium accusamus iure adipisci. Facere minus fugiat enim, cupiditate omnis dignissimos quisquam obcaecati repellendus dolore? Similique quasi, distinctio quidem autem dignissimos eligendi iure voluptatibus neque magnam nisi illum, sunt voluptatum ducimus dolor fugit minima consequuntur molestiae sed ea tenetur necessitatibus accusantium? Quia!</p>
                        <div style={{ height: '30px' }} className='progress my-3'>
                            <div className="progress-bar" role="progressbar" style={{ width: '97%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                <div className="text d-flex justify-content-between  my-auto">
                                    <span className='my-auto mx-2 h6 '><i className='fab fa-instagram text-danger mx-2'></i>INSTAGRAM</span>
                                    <span className='my-auto h6 mx-2'>97%</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '30px' }} className='progress my-3'>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                <div className="text d-flex justify-content-between  my-auto">
                                    <span className='my-auto mx-2 h6 '><i className='fab text-white mx-2 fa-facebook'></i>FACEBOOK</span>
                                    <span className='my-auto h6 mx-2'>80%</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '30px' }} className='progress my-3'>
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '55%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                <div className="text d-flex justify-content-between  my-auto">
                                    <span className='my-auto mx-2 h6 '><i className='fab fa-twitter text-primary mx-2'></i>Twitter</span>
                                    <span className='my-auto h6 mx-2'>55%</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '30px' }} className='progress my-3'>
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                <div className="text d-flex justify-content-between  my-auto">
                                    <span className='my-auto mx-2 h6 '><i className='fab  fa-youtube text-white mx-2'></i>Youtube</span>
                                    <span className='my-auto h6 mx-2'>30%</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* cards */}
                <div className="section_work bg-light">
                    <div className="section_box">
                        <div className="box  bg-white">
                            <i className="fas fa-camera" />
                            <div data-tilt data-tilt-max={50} data-tilt-speed={400} data-tilt-perspective={500} className="info_box my-5">
                                <h4>Photography</h4>
                            </div>
                        </div>
                        <div className="box  bg-white">
                            <i className="fab fa-python" />
                            <div className="info_box  my-5">
                                <h4>Software Developer</h4>
                            </div>
                        </div>
                        <div className="box  bg-white">
                            <i className="fas fa-mobile" />
                            <div className="info_box my-5">
                                <h4>App Development</h4>

                            </div>
                        </div>
                        <div className="box  bg-white">
                            <i class="fas fa-browser"></i>
                            <div className="info_box my-5">
                                <h4>Web Development</h4>

                            </div>
                        </div>
                        <div className="box  bg-white">
                            <i className="fas fa-camera" />
                            <div data-tilt data-tilt-max={50} data-tilt-speed={400} data-tilt-perspective={500} className="info_box my-5">
                                <h4>Photography</h4>
                            </div>
                        </div>
                        <div className="box  bg-white">
                            <i className="fab fa-python" />
                            <div className="info_box  my-5">
                                <h4>Software Developer</h4>
                            </div>
                        </div>
                        <div className="box  bg-white">
                            <i className="fas fa-mobile" />
                            <div className="info_box my-5">
                                <h4>App Development</h4>

                            </div>
                        </div>
                        <div className="box  bg-white">
                            <i class="fas fa-browser"></i>
                            <div className="info_box my-5">
                                <h4>Web Development</h4>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/*  */}
            <div className='container pb-1 bg-light my-5'>
                <div className='primaryColor py-2 my-3 mx-5'>
                    <h1 className='text-light text-center'>How we analysis the product?</h1>
                </div>
                {/*  */}
                <div className='row mx-5'>
                    <div className='img col-12 col-md-12 col-sm-12'>
                        <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q3/Project-Management-blog-header.png" className="img img-fluid" alt="" />
                    </div>
                </div>
                <div class="accordion mx-5 my-2" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h6>STEP 1</h6>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h3 className='my-2'>Seeking Problem</h3>
                                <span className='' style={{ fontSize: '18px' }}>
                                    We seek for problems first. We try to find all problems that are not bringing customers and engagements as you expected.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h6>STEP 2</h6>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h6>STEP 3</h6>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us */}
            <div className='container bg-light my-5 pb-2'>
                <div className='primaryColor py-2 my-5 mx-5'>
                    <h1 className='text-light text-center'>Why choose us?</h1>
                </div>
                {/* <div className="container my-5">
                    <div className=" mb-2-8 mb-lg-6">
                        <span>We are a team of young, creative and enthusiastic peoples who do have skills and
                            knowledge on related field. We provide services on the lowest mininum cost comparatively.</span>
                    </div>
                    <h2 style={{ fontFamily : "Roboto"}} className="display-18 my-3 display-md-16 display-lg-14 font-weight-700"> 
                    <strong>Some of our designs and works:</strong>
                    </h2>
                    <div className="row align-items-center bg-white py-2 ">
                        <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
                            <div className="pr-md-3">
                                <div className="text-center text-sm-right mb-2-9">
                                    <div className="mb-4">
                                    <img width={100} height={100} style={{objectFit:'cover'}} src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="..." className="rounded-circle" />
                                    </div>
                                    <h4 className="sub-info">Social Media</h4>
                                    <p className="display-30 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde nobis eum corporis.</p>
                                </div>
                                <div className="text-center text-sm-right">
                                    <div className="mb-4">
                                        <img width={100} height={100} style={{objectFit:'cover'}} src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="..." className="rounded-circle" />
                                    </div>
                                    <h4 className="sub-info">Social Media</h4>
                                    <p className="display-30 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde nobis eum corporis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="why-choose-center-image">
                            <img width={400} height={400} style={{objectFit:'cover'}} src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="..." className="rounded-circle" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="pl-md-3">
                                <div className="text-center text-sm-left mb-2-9">
                                    <div className="mb-4">
                                    <img width={100} height={100} style={{objectFit:'cover'}} src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="..." className="rounded-circle" />
                                    </div>
                                    <h4 className="sub-info">Social Media</h4>
                                    <p className="display-30 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde nobis eum corporis.</p>
                                </div>
                                <div className="text-center text-sm-left">
                                    <div className="mb-4">
                                    <img width={100} height={100} style={{objectFit:'cover'}} src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="..." className="rounded-circle" />
                                    </div>
                                    <h4 className="sub-info">Social Media</h4>
                                    <p className="display-30 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde nobis eum corporis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="mx-3">
                    <p className="text text-dark choices pb-1 mx-5">
                        We are a team of young, creative and enthusiastic peoples who do
                        have skills and knowledge on related field. We provide services
                        on the lowest mininum cost comparatively.
                    </p>
                    <div className="options row pt-3 mx-3">
                        <div className="col-md-4 mb-4">
                            <div className="p-1 border py-4 px-3 bg-white shadow-sm">
                                <div className="d-flex justify-content-start">
                                    <div className="me-2">
                                        <i className="fas fa-pen-nib choice rounded-circle p-2 text-primary me-2"></i>
                                    </div>
                                    <div>
                                        <h6 className="text text-dark">
                                            Graphics & Logo Design
                                        </h6>
                                        <p className="text text-dark">
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Ea, laboriosam?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="p-1 border py-4 px-3 bg-white shadow-sm">
                                <div className="d-flex justify-content-start">
                                    <div className="me-2">
                                        <i className="fa fa-cog choice rounded-circle p-2 text-primary me-2"></i>
                                    </div>
                                    <div>
                                        <h6 className="text text-dark">Account Management</h6>
                                        <p className="text text-dark">
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Ea, laboriosam?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="p-1 border py-4 px-3 bg-white shadow-sm">
                                <div className="d-flex justify-content-start">
                                    <div className="me-2">
                                        <i className="fas fa-camera choice rounded-circle p-2 text-primary me-2"></i>
                                    </div>
                                    <div>
                                        <h6 className="text text-dark">
                                            Social Media Marketing
                                        </h6>
                                        <p className="text text-dark">
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Ea, laboriosam?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="p-1 border py-4 px-3 bg-white shadow-sm">
                                <div className="d-flex justify-content-start">
                                    <div className="me-2">
                                        <i className="fas fa-camera choice rounded-circle p-2 text-primary me-2"></i>
                                    </div>
                                    <div>
                                        <h6 className="text text-dark">Product Photography</h6>
                                        <p className="text text-dark">
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Ea, laboriosam?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="p-1 border py-4 px-3 bg-white shadow-sm">
                                <div className="d-flex justify-content-start">
                                    <div className="me-2">
                                        <i className="fa fa-life-ring choice rounded-circle p-2 text-primary me-2"></i>
                                    </div>
                                    <div>
                                        <h6 className="text text-dark">
                                            Website Design & Deploy
                                        </h6>
                                        <p className="text text-dark">
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Ea, laboriosam?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="p-1 border py-4 px-3 bg-white shadow-sm">
                                <div className="d-flex justify-content-start">
                                    <div className="me-2">
                                        <i className="fa fa-pencil-square choice rounded-circle p-2 text-primary me-2"></i>
                                    </div>
                                    <div>
                                        <h6 className="text text-dark">Content Writing</h6>
                                        <p className="text text-dark">
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Ea, laboriosam?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
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
        </>
    )
}

export default Home;