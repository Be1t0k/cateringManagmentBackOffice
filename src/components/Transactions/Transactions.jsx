import "./Transactions.css";
import { iconsImgs } from "../../utils/images";
import { NavLink } from "react-router-dom";

const Transactions = ({suppliers}) => {
  return (
    <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Все поставщики</h3>
            <NavLink to={'/addstaff'} className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </NavLink>
        </div>

        <div className="grid-content">
            <div className="grid-items">
                {
                    suppliers.map((supplier) => (
                        <div className="grid-item" key = { supplier?.id }>
                            <div className="grid-item-l">
                                <div className="avatar img-fit-cover">
                                    <img src={ supplier?.image } alt="" />
                                </div>
                                <p className="text"> {supplier?.name} <span> {supplier?.phone}</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-scarlet">{ supplier?.email }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Transactions
