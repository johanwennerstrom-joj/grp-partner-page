import React from "react"
import "./index.scss"
import UKaidlogo from "./ukaidlogo.png"
import SWElogo from "./SWElogo.png"

const Footer = () => {
    return (
        <>
            <div className="footer__main">
                <hr />
                <div className="footer__logos">
                    <a
                        href="https://www.usaid.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://res.cloudinary.com/mojojawn/image/upload/v1588247702/grp_partners/Horizontal_RGB_294_tret23.png"
                            height="65"
                            width="130"
                            alt="US Aid Logo"
                        />
                    </a>

                    <a
                        href="https://www.sida.se/English/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={SWElogo}
                            height="58"
                            width="135"
                            alt="Sida Logo"
                        />
                    </a>

                    <a
                        href="https://www.zurich.com/en/sustainability/investing-in-communities/z-zurich-foundation"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://res.cloudinary.com/mojojawn/image/upload/v1587994491/grp_partners/Zurich_stac_R_rgb_tbdhmr.png"
                            height="58"
                            width="94"
                            alt="Zurich Foundation Logo"
                        />
                    </a>
                    <a
                        href="https://www.gov.uk/government/organisations/department-for-international-development"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={UKaidlogo}
                            height="65"
                            width="72"
                            alt="UK aid Logo"
                        />
                    </a>
                </div>
                <div className="footer__contact">
                    <a
                        href="http://www.globalresiliencepartnership.org/privacy/"
                        target="_blank"
                        rel="noopener noreferrer">Privacy Policy</a>

                    <a
                        href="mailto:info@globalresiliencepartnership.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        info@globalresiliencepartnership.org</a>
                </div>
            </div>
        </>
    )
}

export default Footer
