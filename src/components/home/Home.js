import './home.css'
import img1 from '../images/img/img1.jpg'
import img2 from '../images/img/img2.jpg'
import img3 from '../images/img/img3.jpg'
import logo from '../images/logo/dconcept.png';
import { Carousel } from '3d-react-carousal';
import Contact from '../contact/Contact';

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
                <div className="container my-5">
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
                </div>
            </div>
            {/*  */}

        </>
    )
}

export default Home;