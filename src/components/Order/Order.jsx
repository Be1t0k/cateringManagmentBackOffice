import "./Order.css";
import Savings from "../Savings/Savings";

const Order = ({ order }) => {

    return (
        <div>
            <Savings basket={order}/>
        </div>
    )
}

export default Order