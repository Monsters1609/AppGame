import { Link } from "react-router-dom";
import { TfiBarChart } from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";
import { CgUserList } from "react-icons/cg";
import { GiPriceTag } from "react-icons/gi";
import { RiFileList3Line } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiBookReader } from "react-icons/bi";
import { closeMenuMain } from "../../handle/handle";
export default function NavbarMain () {
    return(
        <div className="navbarMain">
            <div className="headerNavMain">
                <div className='Logo'>
                    <Link to='/' className="linkHome">
                        <img src="https://cdn-mnweb.miniworldgame.com/wp-content/uploads/2019/07/logo-1.png" alt="Logo App MiniWorld"/>
                    </Link>
                    <div className='LogoTitle'>𝓪𝓹𝓹 <br/> 𝓶𝓲𝓷𝓲𝔀𝓸𝓻𝓵𝓭</div>
                </div>
                <div className="btnCloseNavbarMain" onClick={closeMenuMain}>
                    <i className="bi bi-x-diamond-fill"></i>
                </div>
            </div>
            <hr className='hr1'/>
            <div className='NavListMain'>
                <table className="listMenuMain">
                    <tbody>
                        <tr className="trMenuMain">
                            <td className="tdMenuMain">
                                <Link to="/" className="itemMain">
                                    <i className="bi bi-house-door"></i> Home
                                </Link>
                                <div className='underlined'></div>
                            </td>
                        </tr>
                        <tr className="trMenuMain">
                            <td className="tdMenuMain">
                                <Link to="/TableUserInformation" className="itemMain">
                                    <CgUserList/> Table User Information
                                </Link>
                                <div className='underlined'></div>
                            </td>
                        </tr>
                        <tr className="trMenuMain">
                            <td className="tdMenuMain">
                                <Link to="/TablePrice" className="itemMain">
                                    <GiPriceTag/> Table Price
                                </Link>
                                <div className='underlined'></div>
                            </td>
                        </tr>
                        <tr className="trMenuMain">
                            <td className="tdMenuMain">
                                <Link to="/ListStatistical" className="itemMain">
                                    <RiFileList3Line/> List Statistical
                                </Link>
                                <div className='underlined'></div>
                            </td>
                        </tr>
                        <tr className="trMenuMain">
                            <td className="tdMenuMain">
                                <Link to="/Securities" className="itemMain">
                                    <TfiBarChart/> Securities
                                </Link>
                                <div className='underlined'></div>
                            </td>
                        </tr>
                        <tr className="trMenuMain">
                            <td className="tdMenuMain">
                                <Link to="/Chart" className="itemMain">
                                    <VscGraphLine/> Chart
                                </Link>
                                <div className='underlined'></div>
                            </td>
                        </tr>
                        <tr className="trMenuMain">
                            <td className="tdMenuMain">
                                <Link to="/Introduction" className="itemMain">
                                    <BiBookReader/> Introduction
                                </Link>
                                <div className='underlined'></div>
                            </td>
                        </tr>
                        <tr className="trMenuMain">
                            <td className="tdMenuMain">
                                <Link to="/Setting" className="itemMain">
                                    <AiTwotoneSetting/> Setting
                                </Link>
                                <div className='underlined'></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}