import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

import course1 from '../../public/2d and 3d.jpg'
import course2 from '../../public/graphic.jpg'
import course3 from '../../public/mobileapp.jpg'
import course4 from '../../public/webdevelopment.jpg'
import course5 from '../../public/canvaVN.jpg'
import about from '../../public/about.gif'

function Home() {
  return (
    <>
      <Helmet>
        <title>Career Engine - Learn Professional, Digital Skills & Become Job Ready</title>
        <meta name="description" content="Revolutionize your education with Career Engine's innovative learning platform. Learn professional, digital skills and become job ready." />
        <meta name="keywords" content="career engine, professional skills, digital skills, job ready, online courses" />
      </Helmet>
      <main>
        <section className="hero bgimg">
          <Header />

          <div className="homesection py-5">
            <div className='container banner'>
              <div className='w-700 m-auto text-center '>

                <h2 className="h2grad bg-transparent fs80 pt-5">
                  <span
                    style={{
                      backgroundImage: "linear-gradient(180deg, #2e56a7 0%, #bb6de5 100%)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Boost Your Skills For
                    <span className=""> Greater Success.</span> {/* Apply typewriter class only here */}
                  </span>
                </h2>


                <p className='text-grey'>
                  <span>Industry Experts | 70+ Students Trained | 4 Professional Courses</span>
                  <br />A dedicated team delivering impactful learning experiences that drive professional success!
                </p>

                <div className='buttondiv py-3'>
                  <a href='#' className='btn btn-dark me-3'>Meet Our Teachers</a>
                  <a href='#' className='btn btn-dark'>Check Alumni</a>
                </div>
              </div>

            </div>

          </div>


        </section>


        <section className='courses py-5'>
          <div className="container py-5">

            <div className='courseSection p-4 bg-white shadow-blue rounded-5' >
              <div className='headingsection'
                style={{
                  borderBottom: '1px solid #0000001a'
                }}
              >
                <h2 style={{
                  backgroundImage: "linear-gradient(180deg, #2e56a7 0%, #bb6de5 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: 700

                }} className='text-gradient bg-transparent text-center'>Our Courses</h2>
                <p className='text-center text-grey'>Courses that help beginner to beginners become true unicorns.</p>
              </div>

              <div className='row pt-5'>
                <div class="col-md-4">
                  <div class="course-card p-3">
                    <div class="course-banner">
                      <img src={course1} alt="Course Banner" />
                    </div>

                    <div class="content text-white ">


                      <h2 className='text-dark text-center fw-bold'>2D and 3D Animation Course</h2>

                      <div class="course-stats justify-content-center d-flex gap-4 mb-4">
                        <div class="d-flex align-items-center  text-dark gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                          </svg>
                          <span class=" text-dark stats-number">7</span> Months
                        </div>
                        <div class="d-flex align-items-center  text-dark gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                          </svg>
                          Online / Offline Class
                        </div>
                      </div>

                      <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="course-card p-3">
                    <div class="course-banner">
                      <img src={course2} alt="Course Banner" />
                    </div>

                    <div class="content text-white ">


                      <h2 className='text-dark text-center fw-bold'>Graphic & Motion Design</h2>

                      <div class="course-stats justify-content-center d-flex gap-4 mb-4">
                        <div class="d-flex align-items-center  text-dark gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                          </svg>
                          <span class=" text-dark stats-number">7</span> Months
                        </div>
                        <div class="d-flex align-items-center  text-dark gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                          </svg>
                          Online / Offline Class
                        </div>
                      </div>

                      <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="course-card p-3">
                    <div class="course-banner">
                      <img src={course4} alt="Course Banner" />
                    </div>

                    <div class="content text-white ">


                      <h2 className='text-dark text-center fw-bold'>Learn Full Stack Development​</h2>

                      <div class="course-stats justify-content-center d-flex gap-4 mb-4">
                        <div class="d-flex align-items-center  text-dark gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                          </svg>
                          <span class=" text-dark stats-number">7</span> Months
                        </div>
                        <div class="d-flex align-items-center  text-dark gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                          </svg>
                          Online / Offline Class
                        </div>
                      </div>

                      <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="course-card p-3">
                    <div class="course-banner">
                      <img src={course3} alt="Course Banner" />
                    </div>

                    <div class="content text-white ">


                      <h2 className='text-dark text-center fw-bold'>Flutter App Development</h2>

                      <div class="course-stats justify-content-center d-flex gap-4 mb-4">
                        <div class="d-flex align-items-center  text-dark gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                          </svg>
                          <span class=" text-dark stats-number">6</span> Months
                        </div>
                        <div class="d-flex align-items-center  text-dark gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                          </svg>
                          Online / Offline Class
                        </div>
                      </div>

                      <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="course-card p-3">
                    <div class="course-banner">
                      <img src={course5} alt="Course Banner" />
                    </div>

                    <div class="content text-white ">


                      <h2 className='text-dark text-center fw-bold'>Basic Canva & VN Editor </h2>

                      <div class="course-stats justify-content-center d-flex gap-4 mb-4">
                        <div class="d-flex align-items-center  text-dark gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                          </svg>
                          <span class=" text-dark stats-number">15</span> Days
                        </div>
                        <div class="d-flex align-items-center  text-dark gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                          </svg>
                          Online / Offline Class
                        </div>
                      </div>

                      <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div className='courseSection mt-5 p-4 bg-white shadow-blue rounded-5' >
              <div className='headingsection pb-3'
                style={{
                  borderBottom: '1px solid #0000001a'
                }}
              >
                <p className='text-center text-grey mb-0'>Who We Are?</p>
                <h2 style={{
                  backgroundImage: "linear-gradient(180deg, #2e56a7 0%, #bb6de5 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: 700

                }} className='text-gradient bg-transparent text-center'>Empowering Futures!</h2>

              </div>

              <div className='row pt-5 '>
                <div className='col-md-6'>
                  <div className='imgclass'>
                    <img src={about} className='w-75 m-auto d-block' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='content'>
                    <div class="feature-item">
                      <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </div>
                      <h4 class="">Driven by Excellence</h4>
                      <p class="text-grey">
                        At Career Engine, we go the extra mile to provide industry-relevant training that transforms lives. Our commitment to quality content and personalized guidance opens doors to new opportunities for learners worldwide.
                      </p>
                    </div>
                    <div class="feature-item">
                      <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </div>
                      <h4 class="">What Makes Us Unique</h4>
                      <p class="text-grey">
                        We’re not just about courses; we’re about experiences. With interactive live sessions, expert mentorship, and hands-on workshops, we ensure you gain practical skills, clarity, and confidence to excel in your career.
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <div className='courseSection mt-5 p-4 bg-white shadow-blue rounded-5' >
              <div className='headingsection pb-3'
                style={{
                  borderBottom: '1px solid #0000001a'
                }}
              >
                <p className='text-center text-grey mb-0'>Career Engine Vs Others</p>
                <h2 style={{
                  backgroundImage: "linear-gradient(180deg, #2e56a7 0%, #bb6de5 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: 700

                }} className='text-gradient bg-transparent text-center'>Why Career Engine</h2>

                <p className='text-center text-grey mb-0'>We Are Special!</p>
              </div>

              <div class="comparison-section">
                <div class="container">

                  <div class="row g-4">
                    {/* Learnmize Column  */}
                    <div class="col-md-6">
                      <div class="comparison-card learnmize-card">
                        <div class="d-flex justify-content-center  align-items-center mb-4">
                          <span class="badge popupdesign bg-pink px-3 py-2 rounded-pill">
                            ⭐ LEARNMIZE
                          </span>
                        </div>

                        <div class="comparison-item">
                          <div class="icon-circle learnmize-icon">✓</div>
                          <div>Our staff has executed multiple domestic and overseas projects which can be seen at www.jdwebservices.com/</div>
                        </div>

                        <div class="comparison-item">
                          <div class="icon-circle learnmize-icon">✓</div>
                          <div>2 hours of hands-on learning each day, Monday to Friday. Much of this learning will be hands-on and project-based.</div>
                        </div>

                        <div class="comparison-item">
                          <div class="icon-circle learnmize-icon">✓</div>
                          <div>You will pay just Rs 2,500 per month for 7 months of 2 hours of training each day</div>
                        </div>

                        <div class="comparison-item">
                          <div class="icon-circle learnmize-icon">✓</div>
                          <div>Class size is capped at a maximum of 15 students</div>
                        </div>
                        <div class="comparison-item">
                          <div class="icon-circle learnmize-icon">✓</div>
                          <div>We will help you develop & showcase your projects and portfolio items to potential employers by assisting you in creating a robust & rich resume</div>
                        </div>
                        <div class="comparison-item">
                          <div class="icon-circle learnmize-icon">✓</div>
                          <div>If there are any severe circumstances due to which we cannot conduct classes, like an electricity outage, floods, holidays etc., we will deliver extra classes at no charge (of course).</div>
                        </div>
                        <div class="comparison-item">
                          <div class="icon-circle learnmize-icon">✓</div>
                          <div>If you are an in-person student at our Sri Muktsar Sahib location or are a student of one of our partner centres, we will consider granting scholarships to you.</div>
                        </div>
                      </div>
                    </div>

                    {/* Fake Gurus Column  */}
                    <div class="col-md-6">
                      <div class="comparison-card fake-gurus-card">
                        <div class="d-flex justify-content-center align-items-center mb-4">
                          <span class="badge fake-card bg-secondary px-3 py-2 rounded-pill">
                            🤑 FAKE GURUS
                          </span>
                        </div>

                        <div class="comparison-item">
                          <div class="icon-circle fake-guru-icon">✕</div>
                          <div>Most teachers are theoretical teachers and have never executed any projects for domestic or overseas clients</div>
                        </div>

                        <div class="comparison-item">
                          <div class="icon-circle fake-guru-icon">✕</div>
                          <div>Mostly 1 hour of theoretical knowledge with limited project or porfolio development</div>
                        </div>

                        <div class="comparison-item">
                          <div class="icon-circle fake-guru-icon">✕</div>
                          <div>Most computer centres will charge you Rs 1,500 to Rs 2,000 per hour for the theoretical sessions</div>
                        </div>

                        <div class="comparison-item">
                          <div class="icon-circle fake-guru-icon">✕</div>
                          <div>Unlimited</div>
                        </div>
                        <div class="comparison-item">
                          <div class="icon-circle fake-guru-icon">✕</div>
                          <div>No resume or portfolio work is provided.</div>
                        </div>
                        <div class="comparison-item">
                          <div class="icon-circle fake-guru-icon">✕</div>
                          <div>No extra classes are offered.</div>
                        </div>
                        <div class="comparison-item">
                          <div class="icon-circle fake-guru-icon">✕</div>
                          <div>No scholarships are available.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='courseSection mt-5 p-4 bg-white shadow-blue rounded-5' >
              <div className='headingsection pb-3'
                style={{
                  borderBottom: '1px solid #0000001a'
                }}
              >
                <p className='text-center text-grey mb-0'>What They Said!</p>
                <h2 style={{
                  backgroundImage: "linear-gradient(180deg, #2e56a7 0%, #bb6de5 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: 700

                }} className='text-gradient bg-transparent text-center'>Student Testimonials</h2>


              </div>

              <div className='row pt-5 '>
                <div className='col-md-4'>
                  <div className='review'>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0YIIf4jyYVA?si=QNicBPDpPh0-oH-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='review'>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/1r3E7swvzzs?si=RRerxe-vNja0yMOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='review'>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/3FpvvbIumu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  </div>
                </div>
              </div>


            </div>


          </div>
        </section>


        


      </main>

      <Footer />
    </>
  )
}

export default Home