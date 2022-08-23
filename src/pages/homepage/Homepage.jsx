import './homepage.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from 'react-router-dom'





function Homepage() {


    return (
      <div className="homepage">
        <Header />
        {/* <div className="divide-header"></div> */}
        <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
          infinite
          fadeOutAnimation={true}
        >
          <img
            className="sliderimg"
            src={
              "data:image/jpeg;base64,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"
            }
            alt="solution"
          />
          <img
            className="sliderimg"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbuja9uAm7dSHk34bD2sKM6KO0iuXb5y4IQ&usqp=CAU"
            }
            alt="De solution"
          />
          <img
            className="sliderimg"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUegpVKBdYCxSUKij6qgOXzEsHmduZqUIbCg&usqp=CAU"
            }
            alt="solution"
          />
          <img
            className="sliderimg"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCS6Bj6VDr6lpijENjnKSPEjfvcqFsZscx1Q&usqp=CAU"
            }
            alt="solution"
          />
          <img
            className="sliderimg"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35J9fGr5fCy2Vahiqwmjyuh2bmXAsRkHAaQ&usqp=CAU"
            }
            alt=""
          />
          {/* <img className='sliderimg' src={PF + '/gilbert.jpg'} alt="" />
            <img className='sliderimg' src={PF + '/onyedika.jpg'} alt="" />
            <img className='sliderimg' src={PF + '/ifeoma.jpg'} alt="" /> */}
        </AliceCarousel>
        <div className="welcome" data-aos="zoom-in-right">
          <h1 className="welcome-head">Welcome To Solution Academy School</h1>
          <div className="s-h"></div>
          <p data-aos="fade-up">
            "Every great dream begins with a dreamer. Always remember, you have
            within you the strength, the patience, and the passion to reach for
            the stars to change the world. The future belongs to those who
            believe in the beauty of their dreams"
          </p>
        </div>
        <div className="welcome" data-aos="zoom-in-right">
          <h1 className="welcome-head">BRIEF TOUR</h1>
          <div className="s-h"></div>
        </div>
        <div className="image-voice">
          <div className="single-image-voice" data-aos="fade-right">
            <div className="single-content">
              <Link to="/welcome">Read More</Link>
              <p>
                You are most welcome to Solution Academy. We are Purpose driven
                to serve you better...
              </p>
              <h1>From The Principal</h1>
            </div>
          </div>
          <div className="single-image-voice" data-aos="fade-right">
            <div className="single-content">
              <Link to="/vision">Read More</Link>
              <p>To raise a nation full of standards and morale against...</p>
              <h1>OUR VISION</h1>
            </div>
          </div>
          <div className="single-image-voice" data-aos="fade-right">
            <div className="single-content">
              <Link to="/mission">Read More</Link>
              <p>To raise daily a resilient discipline livestyle...</p>
              <h1>OUR MISSION</h1>
            </div>
          </div>
          <div className="single-image-voice" data-aos="fade-right">
            <div className="single-content">
              <Link to="/anthem">Read More</Link>
              <p>One of the greatest thing that happened...</p>
              <h1>OUR ANTHEM</h1>
            </div>
          </div>
          <div className="single-image-voice" data-aos="fade-right">
            <div className="single-content">
              <Link to="/standard">Read More</Link>
              <p>
                Every organisation that is headed aright have standards and we
                are not...
              </p>
              <h1>OUR STANDARDS</h1>
            </div>
          </div>
          <div className="single-image-voice" data-aos="fade-right">
            <div className="single-content">
              <Link to="/prefects">Read More</Link>
              <p>Our Prefects are good looking and well responsible.</p>
              <h1>Meet Our Prefects</h1>
            </div>
          </div>
        </div>
        <div className="welcome" data-aos="zoom-in-right">
          <h1 className="welcome-head">SCHOOL CLUBS</h1>
          <div className="s-h"></div>
        </div>
        <div className="image-voice">
          <div className="single-image-voice" data-aos="fade-left">
            <div className="single-content">
              <Link to="/clubs">Read More</Link>
              <p>
                Even thought you have seen enough in construction and
                Engineering field? Check this club out.
              </p>
              <h1>Engineering Club</h1>
            </div>
          </div>
          <div className="single-image-voice" data-aos="fade-left">
            <div className="single-content">
              <Link to="/clubs">Read More</Link>
              <p>How priceless to have a well improved vocabulary.</p>
              <h1>Debate and Literary</h1>
            </div>
          </div>
          <div className="single-image-voice" data-aos="fade-left">
            <div className="single-content">
              <Link to="/clubs">Read More</Link>
              <p>Singing is a talent as much as it can be developed too.</p>
              <h1>Solution VOices</h1>
            </div>
          </div>
          <div className="single-image-voice" data-aos="fade-left">
            <div className="single-content">
              <Link to="/clubs">Read More</Link>
              <p>
                Nothing beats our well in-form dancing group. Check it out now.
              </p>
              <h1>Solution Dancing Club</h1>
            </div>
          </div>
          <div className="single-image-voice" data-aos="fade-left">
            <div className="single-content">
              <Link to="/clubs">Read More</Link>
              <p>
                This is the center of Home Responsibility. Home dishes are
                taught and served Hot here.
              </p>
              <h1>Vocational Club</h1>
            </div>
          </div>
          <div className="single-image-voice" data-aos="fade-left">
            <div className="single-content">
              <Link to="/clubs">Read More</Link>
              <p>
                The generations of AI. We Know just how much the world depends
                on Computer that is why we are committed to this course.
              </p>
              <h1>Computer Club</h1>
            </div>
          </div>
        </div>
        <div className="welcome" data-aos="zoom-in-right">
          <h1 className="welcome-head">RATINGS AND RECOGNITIONS</h1>
          <div className="s-h"></div>
        </div>
        <div className="recommendations">
          <div className="recommendation" data-aos="zoom-in-up">
            <p>
              "Solution is the best School by far in Awka North as far as
              quality is concerned"
            </p>
            <small>Enyi Mgbakwu.</small>
          </div>
          <div className="recommendation" data-aos="zoom-in-up">
            <p>
              "Solution is the best School by far in Awka North as far as
              quality is concerned"
            </p>
            <small>Ngozi Osiala.</small>
          </div>
          <div className="recommendation" data-aos="zoom-in-up">
            <p>
              "Solution is the best School by far in Awka North as far as
              quality is concerned"
            </p>
            <small>Mr/Mrs Osonwa Chidiebere</small>
          </div>
          <div className="recommendation" data-aos="zoom-in-up">
            <p>
              "Solution is the best School by far in Awka North as far as
              quality is concerned"
            </p>
            <small>Chief Ezenugolu Maduka.</small>
          </div>
          <div className="recommendation" data-aos="zoom-in-up">
            <p>
              "Solution is the best School by far in Awka North as far as
              quality is concerned"
            </p>
            <small>Barr. Onukwube.</small>
          </div>
          <div className="recommendation" data-aos="zoom-in-up">
            <p>
              "Solution is the best School by far in Awka North as far as
              quality is concerned"
            </p>
            <small>Prof. Sabinus Melikam.</small>
          </div>
        </div>
        <div className="welcome" data-aos="zoom-in-right">
          <h1 className="welcome-head">WE CAN HELP YOU!</h1>
          <div className="s-h"></div>
        </div>
        <div className="recommendations">
          <div className="recommendation" data-aos="zoom-in-right">
            <div className="recommendation help">
              <div className="recommendation-img img1"></div>
              <Link to="/enquiry">Private Message us</Link>
            </div>
          </div>
          <div className="recommendation" data-aos="zoom-in-right">
            <div className="recommendation help">
              <div className="recommendation-img img1"></div>
              <Link to="#">APPLY HERE</Link>
            </div>
          </div>

          <div className="recommendation" data-aos="zoom-in-right">
            <div className="recommendation help">
              <div className="recommendation-img img3"></div>
              <Link to="#">EXTRAS</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Homepage
