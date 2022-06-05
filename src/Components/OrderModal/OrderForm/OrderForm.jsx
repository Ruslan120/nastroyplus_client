import {React, useEffect} from "react";
import s from "./OrderForm.module.scss";
import CustomInput from "../../UI/custom-input/Custom-input";
import {useForm} from "react-hook-form";
import CustomBtn from "../../UI/custom-btn/Custom-btn";
import {useDispatch} from "react-redux";
import {addToastTime, getBaskets} from "../../../redux/actions";
import OrderService from "../../../services/OrderService";

const OrderForm = ({active, close, ...props}) => {
    console.log(props)
    const {
        register,
        handleSubmit,
        setFocus,
        reset,
        formState: {errors,},
    } = useForm({mode: "onSubmit"});
    const dispatch = useDispatch();
    const onSubmit = async (data) => {
        try {
            console.log(data);
            const response = await OrderService.createOrder(data.address, data.phone);
            dispatch(addToastTime("success", `Заказ на сумму: ${response.data.totalPrice} зарегистрирован`));
        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));

        } finally {
            dispatch(getBaskets());
            close();
            reset();
        }
    };
    useEffect(() => {
        setFocus("address");
    }, [active]);

    return (
        <form className={s["order-form"]} onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
                register={register("address", {
                    required: "Обязательное поле",
                })}
                error={errors.address}
                placeholder="Адресс доставки"
            />
            <CustomInput
                register={register("phone", {
                    required: "Обязательное поле",
                    pattern: {
                        value: /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/,
                        message: "Некорректный номер телефона",
                    }
                })}

                error={errors.phone}
                placeholder="Телефон"
            />
            <div className={s["order-form__footer"]}>
                <CustomBtn>Оформить заказ</CustomBtn>
            </div>
        </form>
    );
};

export default OrderForm;
