import Logo from '../assets/logoGibli.png';
import {useNavigate} from "react-router-dom";
import Profil from '../assets/unnamed.jpg';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-blue p-md-3">
        <div className="container">
            <a onClick={()=> navigate('/')} style={{cursor:"pointer"}}><img src={Logo} width="150px" className="navbar-brand pb-4"/></a>
            <div>
              <img src={Profil} width='60px' className="rounded-circle border border-3 border-blue mt-1"/>
            </div>
        </div>
    </nav>   
  );
}

export default Navbar;

