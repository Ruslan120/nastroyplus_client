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
            const response = await OrderService.createOrder();
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
        setFocus("email");
    }, [active]);

    return (
        <form className={s["order-form"]} onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
                register={register("email", {
                    required: "Обязательное поле",
                    pattern: {
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                        message: "Введите корректный email",
                    },
                })}

                error={errors.email}
                placeholder="email"
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
                placeholder="phone"
            />
            <div className={s["order-form__footer"]}>
                <CustomBtn>Оформить заказ</CustomBtn>
            </div>
        </form>
    );
};

export default OrderForm;
