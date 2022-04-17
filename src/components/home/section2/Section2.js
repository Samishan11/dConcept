import React from 'react'

const Section2 = () => {
    return (
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
    )
}

export default Section2