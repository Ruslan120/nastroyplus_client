import { React,} from "react";
import { useDispatch, useSelector } from "react-redux";
import {setOrderForm} from "../../redux/actions";
import Modal from "../UI/modal/Modal";
import OrderForm from "./OrderForm/OrderForm";
const OrderModal = () => {
  const orderActive = useSelector((state) => state.orderForm.isOpen);
  const dispatch = useDispatch();

  const handlerSetIsLogin = () => {
    dispatch(setOrderForm(false));
  };

  return (
    <Modal active={orderActive} setActive={handlerSetIsLogin} text={"Оформление заказа"}>
      <OrderForm active={orderActive} close={handlerSetIsLogin}/>
    </Modal>
  );
};

export default OrderModal;
