    import React from 'react'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faCalendar, faPhone, faLocationArrow, faLocation } from '@fortawesome/free-solid-svg-icons';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
    import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import "./Profile.css";

    const Profile = () => {
    return (
        <>
            <div className="profile-card">
                <div className="profile-image">
                    <img src="https://placehold.co/400" alt="Profile" />
                </div>
                <div className="profile-name">
                    <p>Arpit Garg</p>
                </div>
                <div className="profile-job">
                    <p>Student</p>
                </div>
                <hr />
                <div className="profile-info">
                    <div className="info-card">
                        <div className="info-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="info-right">
                            <p className='info-heading'>EMAIL</p>
                            <p className='info-content'>arpit2005.garg@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="info-right">
                            <p className='info-heading'>PHONE</p>
                            <p className='info-content'>+91 98772-16578</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">
                            <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <div className="info-right">
                            <p className='info-heading'>D.O.B</p>
                            <p className='info-content'>October 23, 2005</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">
                            <FontAwesomeIcon icon={faLocation} />
                        </div>
                        <div className="info-right">
                            <p className='info-heading'>LOCATION</p>
                            <p className='info-content'>Punjab, India</p>
                        </div>
                    </div>
                </div>
                <div className="profile-social">
                    <div className="social-icon">
                        <a href="https://github.com/arpitcs">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://linkedin.com/in/arpit-garg-be23">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
    }

    export default Profile