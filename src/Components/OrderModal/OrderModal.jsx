import {React,} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../UI/modal/Modal";
import OrderForm from "./OrderForm/OrderForm";
import {setOrderOpen} from "../../redux/reducers/orderFormReducer";

const OrderModal = () => {
    const orderActive = useSelector((state) => state.orderForm.isOpen);
    const dispatch = useDispatch();

    const handlerSetIsOrder = () => {
        dispatch(setOrderOpen(false));
    };

    return (
        <Modal active={orderActive} setActive={handlerSetIsOrder} text={"Оформление заказа"}>
            <OrderForm active={orderActive} close={handlerSetIsOrder}/>
        </Modal>
    );
};

export default OrderModal;
