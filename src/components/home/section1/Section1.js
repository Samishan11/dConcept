import React from 'react'
import logo from '../../images/logo/dconcept.png';
const Section1 = () => {
    return (
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
    )
}

export default Section1