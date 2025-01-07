import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import linked from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'
import behance from '../assets/behance.png'

function Alumni() {
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
                                    <span className=""> Our Alumni</span> {/* Apply typewriter class only here */}
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
                            <h2 style={{
                                backgroundImage: "linear-gradient(180deg, #2e56a7 0%, #bb6de5 100%)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                                fontWeight: 700

                            }} className='text-gradient bg-transparent text-center'>Graphic & Motion Design</h2>
                            {/* <p className='text-center text-grey'>Courses that help beginner to beginners become true unicorns.</p> */}
                        </div>

                        <div className='row pt-5'>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254089/WhatsApp-Image-2024-05-09-at-11.49.27-AM-1024x1024_nv4g3l.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Sep 2023 to March 2024</p>

                                        <div className='socialicons text-center py-2'>
                                            <img src={fb} style={{ width: '32px' }} />
                                            <img src={insta} className='ms-2' style={{ width: '32px' }} />
                                            <img src={linked} className='ms-2' style={{ width: '32px' }} />
                                            <img src={youtube} className='ms-2' style={{ width: '32px' }} />
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254090/WhatsApp-Image-2024-05-09-at-11.49.26-AM-1024x1024_dqrwgy.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Sep 2023 to March 2024</p>

                                        <div className='socialicons text-center py-2'>
                                            <img src={fb} style={{ width: '32px' }} />
                                            <img src={insta} className='ms-2' style={{ width: '32px' }} />
                                            <img src={linked} className='ms-2' style={{ width: '32px' }} />
                                            <img src={youtube} className='ms-2' style={{ width: '32px' }} />
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254090/WhatsApp-Image-2024-05-09-at-11.49.26-AM-2-1024x1024_r31gci.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Sep 2023 to March 2024</p>

                                        <div className='socialicons text-center py-2'>
                                            <img src={fb} style={{ width: '32px' }} />
                                            <img src={insta} className='ms-2' style={{ width: '32px' }} />
                                            <img src={linked} className='ms-2' style={{ width: '32px' }} />
                                            <img src={youtube} className='ms-2' style={{ width: '32px' }} />
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254090/puneet_sk7uvc.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Sep 2023 to March 2024</p>
                                        <p className='text-dark text-center mb-0 fw-bold'>Hired as an intern by JD Web Services</p>
                                        <p className='text-dark text-center  fw-bold'>July 2022 to Jan 2023</p>

                                        <div className='socialicons text-center py-2'>
                                            <a href="https://www.facebook.com/profile.php?id=100085319137383"><img src={fb} style={{ width: '32px' }} /> </a>
                                            {/* <a href=""><img src={insta} className='ms-2' style={{ width: '32px' }} /></a> */}
                                            <a href="https://www.linkedin.com/in/ieshpuneet-singh-69ba13266/"><img src={linked} className='ms-2' style={{ width: '32px' }} /></a>
                                            <a href="https://www.youtube.com/channel/UCwL6mppF0IRZdijHKpSzJYw"><img src={youtube} className='ms-2' style={{ width: '32px' }} /></a>
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254090/WhatsApp-Image-2023-11-15-at-10.19.56-AM-1024x1024_rdpv8r.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Feb 2023 to Sep 2023</p>
                                        <p className='text-dark text-center mb-0 fw-bold'>Hired as an intern by JD Web Services</p>
                                        <p className='text-dark text-center  fw-bold'>Sep 2023 - Present</p>

                                        <div className='socialicons text-center py-2'>
                                            {/* <a href=""><img src={fb} style={{ width: '32px' }} /> </a> */}
                                            <a href="https://www.instagram.com/urs__king_321/"><img src={insta} className='ms-2' style={{ width: '32px' }} /></a>
                                            {/* <a href=""><img src={linked} className='ms-2' style={{ width: '32px' }} /></a> */}
                                            <a href="https://www.behance.net/rajatkumar154"><img src={behance} className='ms-2' style={{ width: '32px' }} /></a>
                                            <a href="https://www.youtube.com/@itz_rajatinnocentgabroo4014"><img src={youtube} className='ms-2' style={{ width: '32px' }} /></a>
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254089/WhatsApp-Image-2023-11-15-at-10.19.54-AM-1-1024x1024_ql7eza.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Feb 2023 to Sep 2023</p>
                                       

                                        <div className='socialicons text-center py-2'>
                                            {/* <a href=""><img src={fb} style={{ width: '32px' }} /> </a> */}
                                            <a href="https://www.instagram.com/paryag_aneja/"><img src={insta} className='ms-2' style={{ width: '32px' }} /></a>
                                            {/* <a href=""><img src={linked} className='ms-2' style={{ width: '32px' }} /></a> */}
                                            <a href="https://www.behance.net/paryaganeja"><img src={behance} className='ms-2' style={{ width: '32px' }} /></a>
                                            <a href="https://youtube.com/@paryaganeja7119?si=2xpVf3E5OA4RnBmn"><img src={youtube} className='ms-2' style={{ width: '32px' }} /></a>
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254090/WhatsApp-Image-2023-11-15-at-10.19.54-AM-1024x1024_rt3duh.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Feb 2023 to Sep 2023</p>
                                     

                                        <div className='socialicons text-center py-2'>
                                            {/* <a href=""><img src={fb} style={{ width: '32px' }} /> </a> */}
                                            <a href="https://www.instagram.com/_ohi_turbanator/"><img src={insta} className='ms-2' style={{ width: '32px' }} /></a>
                                            {/* <a href=""><img src={linked} className='ms-2' style={{ width: '32px' }} /></a> */}
                                            <a href="https://www.behance.net/trendingsardari"><img src={behance} className='ms-2' style={{ width: '32px' }} /></a>
                                            <a href="https://youtu.be/CU5ineVvsds?si=xUt7NVadhGJpCv9h"><img src={youtube} className='ms-2' style={{ width: '32px' }} /></a>
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254089/WhatsApp-Image-2023-11-15-at-10.19.53-AM-1024x1024_dbxsya.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Feb 2023 to Sep 2023</p>
                                     

                                        <div className='socialicons text-center py-2'>
                                            {/* <a href=""><img src={fb} style={{ width: '32px' }} /> </a> */}
                                            <a href="https://www.instagram.com/13_kml_makkar/"><img src={insta} className='ms-2' style={{ width: '32px' }} /></a>
                                            {/* <a href=""><img src={linked} className='ms-2' style={{ width: '32px' }} /></a> */}
                                            <a href="https://www.behance.net/kamaljot"><img src={behance} className='ms-2' style={{ width: '32px' }} /></a>
                                            <a href="https://youtu.be/3DTHvVBGxoo?si=qnWU73gw97o2DNzM"><img src={youtube} className='ms-2' style={{ width: '32px' }} /></a>
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>






                        </div>
                    </div>
                    <div className='courseSection p-4 mt-5 bg-white shadow-blue rounded-5' >
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

                            }} className='text-gradient bg-transparent text-center'>Full Stack Development</h2>
                            {/* <p className='text-center text-grey'>Courses that help beginner to beginners become true unicorns.</p> */}
                        </div>

                        <div className='row pt-5'>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254089/WhatsApp-Image-2024-05-09-at-11.49.27-AM-1024x1024_nv4g3l.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Sep 2023 to March 2024</p>

                                        <div className='socialicons text-center py-2'>
                                            <img src={fb} style={{ width: '32px' }} />
                                            <img src={insta} className='ms-2' style={{ width: '32px' }} />
                                            <img src={linked} className='ms-2' style={{ width: '32px' }} />
                                            <img src={youtube} className='ms-2' style={{ width: '32px' }} />
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254090/WhatsApp-Image-2024-05-09-at-11.49.26-AM-1024x1024_dqrwgy.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Sep 2023 to March 2024</p>

                                        <div className='socialicons text-center py-2'>
                                            <img src={fb} style={{ width: '32px' }} />
                                            <img src={insta} className='ms-2' style={{ width: '32px' }} />
                                            <img src={linked} className='ms-2' style={{ width: '32px' }} />
                                            <img src={youtube} className='ms-2' style={{ width: '32px' }} />
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254090/WhatsApp-Image-2024-05-09-at-11.49.26-AM-2-1024x1024_r31gci.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Sep 2023 to March 2024</p>

                                        <div className='socialicons text-center py-2'>
                                            <img src={fb} style={{ width: '32px' }} />
                                            <img src={insta} className='ms-2' style={{ width: '32px' }} />
                                            <img src={linked} className='ms-2' style={{ width: '32px' }} />
                                            <img src={youtube} className='ms-2' style={{ width: '32px' }} />
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254090/puneet_sk7uvc.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Sep 2023 to March 2024</p>
                                        <p className='text-dark text-center mb-0 fw-bold'>Hired as an intern by JD Web Services</p>
                                        <p className='text-dark text-center  fw-bold'>July 2022 to Jan 2023</p>

                                        <div className='socialicons text-center py-2'>
                                            <a href="https://www.facebook.com/profile.php?id=100085319137383"><img src={fb} style={{ width: '32px' }} /> </a>
                                            {/* <a href=""><img src={insta} className='ms-2' style={{ width: '32px' }} /></a> */}
                                            <a href="https://www.linkedin.com/in/ieshpuneet-singh-69ba13266/"><img src={linked} className='ms-2' style={{ width: '32px' }} /></a>
                                            <a href="https://www.youtube.com/channel/UCwL6mppF0IRZdijHKpSzJYw"><img src={youtube} className='ms-2' style={{ width: '32px' }} /></a>
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254090/WhatsApp-Image-2023-11-15-at-10.19.56-AM-1024x1024_rdpv8r.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Feb 2023 to Sep 2023</p>
                                        <p className='text-dark text-center mb-0 fw-bold'>Hired as an intern by JD Web Services</p>
                                        <p className='text-dark text-center  fw-bold'>Sep 2023 - Present</p>

                                        <div className='socialicons text-center py-2'>
                                            {/* <a href=""><img src={fb} style={{ width: '32px' }} /> </a> */}
                                            <a href="https://www.instagram.com/urs__king_321/"><img src={insta} className='ms-2' style={{ width: '32px' }} /></a>
                                            {/* <a href=""><img src={linked} className='ms-2' style={{ width: '32px' }} /></a> */}
                                            <a href="https://www.behance.net/rajatkumar154"><img src={behance} className='ms-2' style={{ width: '32px' }} /></a>
                                            <a href="https://www.youtube.com/@itz_rajatinnocentgabroo4014"><img src={youtube} className='ms-2' style={{ width: '32px' }} /></a>
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254089/WhatsApp-Image-2023-11-15-at-10.19.54-AM-1-1024x1024_ql7eza.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Feb 2023 to Sep 2023</p>
                                       

                                        <div className='socialicons text-center py-2'>
                                            {/* <a href=""><img src={fb} style={{ width: '32px' }} /> </a> */}
                                            <a href="https://www.instagram.com/paryag_aneja/"><img src={insta} className='ms-2' style={{ width: '32px' }} /></a>
                                            {/* <a href=""><img src={linked} className='ms-2' style={{ width: '32px' }} /></a> */}
                                            <a href="https://www.behance.net/paryaganeja"><img src={behance} className='ms-2' style={{ width: '32px' }} /></a>
                                            <a href="https://youtube.com/@paryaganeja7119?si=2xpVf3E5OA4RnBmn"><img src={youtube} className='ms-2' style={{ width: '32px' }} /></a>
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254090/WhatsApp-Image-2023-11-15-at-10.19.54-AM-1024x1024_rt3duh.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Feb 2023 to Sep 2023</p>
                                     

                                        <div className='socialicons text-center py-2'>
                                            {/* <a href=""><img src={fb} style={{ width: '32px' }} /> </a> */}
                                            <a href="https://www.instagram.com/_ohi_turbanator/"><img src={insta} className='ms-2' style={{ width: '32px' }} /></a>
                                            {/* <a href=""><img src={linked} className='ms-2' style={{ width: '32px' }} /></a> */}
                                            <a href="https://www.behance.net/trendingsardari"><img src={behance} className='ms-2' style={{ width: '32px' }} /></a>
                                            <a href="https://youtu.be/CU5ineVvsds?si=xUt7NVadhGJpCv9h"><img src={youtube} className='ms-2' style={{ width: '32px' }} /></a>
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="alumni-card p-3">
                                    <div class="course-banner1">
                                        <img src="https://res.cloudinary.com/dxwge5g8f/image/upload/v1736254089/WhatsApp-Image-2023-11-15-at-10.19.53-AM-1024x1024_dbxsya.jpg" className='w-100' alt="Course Banner" />
                                    </div>

                                    <div class="content text-white ">


                                        <p className='text-dark text-center pt-4 fw-bold'>Feb 2023 to Sep 2023</p>
                                     

                                        <div className='socialicons text-center py-2'>
                                            {/* <a href=""><img src={fb} style={{ width: '32px' }} /> </a> */}
                                            <a href="https://www.instagram.com/13_kml_makkar/"><img src={insta} className='ms-2' style={{ width: '32px' }} /></a>
                                            {/* <a href=""><img src={linked} className='ms-2' style={{ width: '32px' }} /></a> */}
                                            <a href="https://www.behance.net/kamaljot"><img src={behance} className='ms-2' style={{ width: '32px' }} /></a>
                                            <a href="https://youtu.be/3DTHvVBGxoo?si=qnWU73gw97o2DNzM"><img src={youtube} className='ms-2' style={{ width: '32px' }} /></a>
                                        </div>

                                        {/* <button class="btn enroll-btn w-100 py-3 rounded-3">
                        Explore More
                      </button> */}
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

export default Alumni