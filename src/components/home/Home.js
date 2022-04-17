import './home.css'
import img1 from '../images/img/img1.jpg'
import img2 from '../images/img/img2.jpg'
import img3 from '../images/img/img3.jpg'
import logo from '../images/logo/dconcept.png';
import { Carousel } from '3d-react-carousal';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
import { Section3 } from './section3/Section3';
import { Section4 } from './section4/Section4';
import { Section5 } from './section5/Section5';

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
            <Section1></Section1>
            {/*  */}
            <Section2></Section2>
            {/*  */}
            <Section3></Section3>
            {/* why choose us */}
            <Section4></Section4>
            {/*  */}
            <Section5></Section5>
        </>
    )
}

export default Home;