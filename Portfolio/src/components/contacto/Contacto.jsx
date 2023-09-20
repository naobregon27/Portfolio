import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../contacto/Contact.css";
import { Tooltip } from "react-tooltip";

import GMailIcon from "../../assets/gmail.svg";
import GmailIconColor from "../../assets/gmailColor.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import linkedinIconColor from "../../assets/linkedinColor.svg";
import GithubIcon from "../../assets/github.svg";
import GithubIconColor from "../../assets/githubColor.svg"
 



function Contact() {
     const [isHovered1, setIsHovered1] = useState(true);
     const [isHovered2, setIsHovered2] = useState(true);
     const [isHovered3, setIsHovered3] = useState(true);

     const handleHoveredGmail = () => {
         setIsHovered1(!isHovered1);
     };

    const handleHoveredLinkedin = () => {
        setIsHovered2(!isHovered2);
    };

    const handleHoveredGithub = () => {
        setIsHovered3(!isHovered3);
    };


    const handleGmail = () => {
        const gmailAdress = "na.obregon27@gmail.com";
        navigator.clipboard.writeText(gmailAdress)
        toast.success(`copied correctly`);
    };

    const handleNavigatorLinkedin = () => {
        setTimeout(
            () =>
                window.open(
                    "https://www.linkedin.com/in/nahuel-obregon-3b458a268/"
                ),
            3000
        );
        toast.loading(`Redirecting to my LinkedIn profile`);
    };

    const handleNavigatorGitHub = () => {
        setTimeout(
            () => window.open("https://github.com/naobregon27", "_blank"),
            3000
        );
        toast.loading(`Redirecting to my GitHub profile`);
    };

    //Form config

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_b7n43bw",
                "template_n8tr8kg",
                e.target,
                "yI_Gk0dv4tv7Adjw3"
            )
            .then(
                response => console.log(response)
            )
            .catch(
                error => console.log(error)
            )

    };

    //    const [name, setName] = useState("");

    //    const handleInputName = (event) => {
    //       setName(event.target.value);
    //    };

    //    const [email, setEmail] = useState("");

    //    const handleInputEmail = (event) => {
    //       setEmail(event.target.value);
    //    };

    //    const [message, setMessage] = useState("");

    //    const handleMessage = (event) => {
    //       setMessage(event.target.value);
    //    };




    return (
        <div className="ContenedorCv">
            <section id="contact">
                <h2 className="titu">Puedes Contactarme por:</h2>

                <div className="Icon_Contact">
                    {isHovered1 ? (
                        <img
                            className="gmail"
                            onMouseEnter={handleHoveredGmail}
                            src={GMailIcon}
                            alt=""
                        />
                    ) : (
                        <img
                            className="gmail_color"
                            data-tooltip-id="my-tooltip-gmail"
                            data-tooltip-content="Click to copy my email address."
                            onMouseLeave={handleHoveredGmail}
                            onClick={handleGmail}
                            src={GmailIconColor}
                            alt=""
                        />
                    )}
                    <Tooltip id="my-tooltip-gmail" />


                  {isHovered2 ? (
                        <img
                            className="linkedin"
                            onMouseEnter={handleHoveredLinkedin}
                            src={linkedinIcon}
                            alt=""
                        />
                    ) : (
                        <img
                            className="linkedin_color"
                            data-tooltip-id="my-tooltip-linkedin"
                            data-tooltip-content="go to my LinkedIn."
                            onMouseLeave={handleHoveredLinkedin}
                            onClick={handleNavigatorLinkedin}
                            src={linkedinIconColor}
                            alt=""
                        />
                    )}
                    <Tooltip id="my-tooltip-linkedin" />

                    {isHovered3 ? (
                        <img
                            className="github"
                            onMouseEnter={handleHoveredGithub}
                            src={GithubIcon}
                            alt=""
                        />
                    ) : (
                        <img
                            className="github_color"
                            data-tooltip-id="my-tooltip-github"
                            data-tooltip-content="Go to my GitHub."
                            onMouseLeave={handleHoveredGithub}
                            onClick={handleNavigatorGitHub}
                            src={GithubIconColor}
                            alt=""
                        />
                    )}
                    <Tooltip id="my-tooltip-github" />

                </div>

                <div>
                    <form className='form-mail' ref={form} onSubmit={sendEmail}>

                        <label htmlFor="">
                            Nombre:
                        </label>
                        <input type="text"
                            name="user_name" />
                       <br />

                        <label htmlFor="">Mail:</label>
                        <input type="email"
                            name="user_email" />
                       <br />

                        <label htmlFor="">message</label>
                        <textarea name="message" id="" cols="25" rows="6"></textarea><br />
                        <br />

                        <button
                            className=""
                            type="submit"
                            value="Send">
                            send
                        </button>


                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;