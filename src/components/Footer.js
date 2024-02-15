
import { pageLinks,socialLinks } from "../data";

const Footer =() =>{
    const currentYear =new Date().getFullYear();
    return (
        <div>    
            <footer className="section footer">
            <ul className="footer-links">
             {pageLinks.map((link)=>{
                const {id, href, text } =link
                return(
                <li key={id}>
                <a href={href} className="footer-link">{text}</a>
                </li>
                )
             })}
            </ul>
            <ul className="footer-icons">
             {socialLinks.map((slink)=>{
                const {id, href, icon} = slink;
                return(
                <li key={id}>
                <a href={href} target="_blank" className="footer-icon"> <i className={icon}> </i> </a>
                </li>
                )
             })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved <br/>
                {currentYear}
            </p>
            </footer>
     </div>
    );
}

export default Footer;