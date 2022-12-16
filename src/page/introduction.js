import Footer from "../layout/js/footer";
import Header from "../layout/js/header";
import NavbarMain from "../layout/js/navbarMain";
import NavbarSub from "../layout/js/navbarSub";
import '../layout/css/footer.css';
import '../layout/css/header.css';
import '../layout/css/navbarMain.css';
import '../layout/css/navbarSub.css';
export default function Introduction () {
    return(
        <div className="introduction">
            <div className="leftMenu">
                <NavbarSub/>
                <NavbarMain/>
            </div>
            <div className="rightContainer">
                <Header/>
                <Footer/>
            </div>
        </div>
    )
}