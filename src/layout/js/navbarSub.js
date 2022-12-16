import { Link } from "react-router-dom";
import { TfiBarChart } from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";
import { CgUserList } from "react-icons/cg";
import { GiPriceTag } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { RiFileList3Line } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiBookReader } from "react-icons/bi";
import { openMenuMain } from "../../handle/handle";
export default function NavbarSub () {
    return(
        <div className="navbarSub">
            <div className='headerNavSub'>
                <div className="Logo">
                    <Link to='/' className="linkHome">
                        <img src="https://cdn-mnweb.miniworldgame.com/wp-content/uploads/2019/07/logo-1.png" alt="Logo App MiniWorld"/>
                    </Link>  
                </div>
                <div className='btnOpenNavbarMain' onClick={openMenuMain}><RxDashboard/></div>
            </div>
            <div className='NavListSub'>
                <table className="listMenuSub">
                    <tbody>
                        <tr className="trMenuSub">
                            <td className="tdMenuSub">
                                <Link to="/" className="itemSub">
                                    <i className="bi bi-house-door"></i>
                                </Link>
                            </td>
                        </tr>
                        <tr className="trMenuSub">
                            <td className="tdMenuSub">
                                <Link to="/TableUserInformation" className="itemSub">
                                    <CgUserList/>
                                </Link>
                            </td>
                        </tr>
                        <tr className="trMenuSub">
                            <td className="tdMenuSub">
                                <Link to="/TablePrice" className="itemSub">
                                    <GiPriceTag/>
                                </Link>
                            </td>
                        </tr>
                        <tr className="trMenuSub">
                            <td className="tdMenuSub">
                                <Link to="/ListStatistical" className="itemSub">
                                    <RiFileList3Line/>
                                </Link>
                            </td>
                        </tr>
                        <tr className="trMenuSub">
                            <td className="tdMenuSub">
                                <Link to="/Securities" className="itemSub">
                                    <TfiBarChart/>
                                </Link>
                            </td>
                        </tr>
                        <tr className="trMenuSub">
                            <td className="tdMenuSub">
                                <Link to="/Chart" className="itemSub">
                                    <VscGraphLine/>
                                </Link>
                            </td>
                        </tr>
                        <tr className="trMenuSub">
                            <td className="tdMenuSub">
                                <Link to="/Introduction" className="itemSub">
                                    <BiBookReader/>
                                </Link>
                            </td>
                        </tr>
                        <tr className="trMenuSub">
                            <td className="tdMenuSub">
                                <Link to="/Setting" className="itemSub">
                                    <AiTwotoneSetting/>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}