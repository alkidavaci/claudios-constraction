import profileImage from "../../assets/picture/kida1.jpg";
import './style.css'

function About() {
    return (
        <section>
            <div className="about-header">
                <h1 className="text-center">
                    About Me
                </h1>
            </div>
            <div className="p-4" >
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-2 p-5">
                        <img src={profileImage}  alt="profile"  className="profile-image rounded img-fluid"/>
                    </div>
                    <div className="col-md-10 lh-lg p-5">
                        <p className="about-text">I'm Alkida Vaci, an electronic engineering graduate from Albania currently living in New York City. I'm passionate about coding and I'm currently enrolled in a coding bootcamp to expand my knowledge and experience in the field.

                        My background in engineering has equipped me with solid mathematical and logical skills, which have been useful in tackling complex coding problems. In addition, my strong communication and teamwork skills make me an asset to any coding team.

                        My portfolio showcases my coding abilities and highlights my experience and skills in various projects such as web development and database management, demonstrating my versatility and expertise.

                        As an entry-level programmer, I'm excited to continue learning and growing in the field. With my technical knowledge, strong work ethic, and passion for coding, I'm confident in my ability to become a successful programmer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
