import { useState } from 'react';
import { personsImgs } from '../../utils/images';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";
import { navigationLinks } from '../../utils/data';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import Dropdown from '../../components/DropDown/DropDown';

const Sidebar = () => {
  const [activeLinkIdx] = useState();

  const { isAuth } = useContext(AuthContext);
  const client_data = JSON.parse(localStorage?.getItem('client_data'));
  const roles = client_data?.role;

  return (
    <div>
      {
        isAuth
          ? roles === 1
            ?
            <div className={`sidebar`}>
              <Dropdown></Dropdown>
              <nav className="navigation">
                <ul className="nav-list">
                  {
                    navigationLinks.map((navigationLink) => (
                      <li className="nav-item" key={navigationLink.id}>
                        <NavLink to={`/${navigationLink.route}`} className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : ''}`}>
                          <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                          <span className="nav-link-text">{navigationLink.title}</span>
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
            : null
          : null
      }
    </div>
  )
}

export default Sidebar
