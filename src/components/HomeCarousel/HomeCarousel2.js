import 'pure-react-carousel/dist/react-carousel.es.css';

import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';

const HomeCarousel2 = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            isPlaying={true}
        >
            <Slider>
                <Slide index={0}> <img
                    src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674700058/BandParadeNYC_v1cnja.webp"
                    alt=""
                    className="sliderimg"
                /></Slide>
                <Slide index={1}>   <img
                    src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674700059/BandParade2_sn83kd.webp"
                    alt=""
                    className="sliderimg"
                /></Slide>
                <Slide index={2}>  <img
                    src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674700058/BandFormation_ftintj.webp"
                    alt=""
                    className="sliderimg"
                /></Slide>



            </Slider>

        </CarouselProvider>
    )
}
export default HomeCarousel2