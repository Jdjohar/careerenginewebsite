import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

import course1 from '../assets/2d and 3d.jpg'
import course2 from '../assets/graphic.jpg'
import course3 from '../assets/mobileapp.jpg'
import course4 from '../assets/webdevelopment.jpg'
import course5 from '../assets/canvaVN.jpg'

function Courses() {
  return (
    <>
      <Helmet>
        <title>Career Engine Courses - Web Design, Mobile Apps, Animation, and More</title>
        <meta name="description" content="Explore Career Engine's comprehensive courses in Web Design, Mobile App Development, 2D and 3D Animation, and Graphic & Motion Design." />
        <meta name="keywords" content="web design, mobile apps, animation, graphic design, motion design, full stack development, flutter" />
      </Helmet>
      <div className="hero bgimg">
      <Header />
      <div className="homesection py-5">
            <div className='container banner'>
              <div className='w-700 m-auto text-center '>

                <h2 className="h2grad bg-transparent fs80 pt-3">
                  <span
                    style={{
                      backgroundImage: "linear-gradient(180deg, #2e56a7 0%, #bb6de5 100%)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    <span className=""> Our Courses</span> {/* Apply typewriter class only here */}
                  </span>
                </h2>


              

              
              </div>

            </div>

          </div>
      </div>
     <section className='courses py-5'>
      <div className='container py-5'>
      <div className='courseSection p-4 bg-white shadow-blue rounded-5' >
              <div className='headingsection'
                style={{
                  borderBottom: '1px solid #0000001a'
                }}
              >
                {/* <h2 style={{
                  backgroundImage: "linear-gradient(180deg, #2e56a7 0%, #bb6de5 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: 700

                }} className='text-gradient bg-transparent text-center'>Our Courses</h2>
                <p className='text-center text-grey'>Courses that help beginner to beginners become true unicorns.</p> */}
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
      </div>
     </section>
     <Footer />
    </>
  )
}

export default Courses