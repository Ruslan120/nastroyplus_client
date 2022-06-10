import {React, useEffect} from "react";
import s from "./SearchForm.module.scss";
import CustomInput from "../../UI/custom-input/Custom-input";
import {useForm} from "react-hook-form";
import CustomBtn from "../../UI/custom-btn/Custom-btn";
import {useNavigate} from "react-router-dom";

const SearchForm = ({active, close, ...props}) => {
    const navigate = useNavigate();
    const {
        register,
        getValues,
        setFocus,
        resetField,
        handleSubmit
    } = useForm({mode: "onSubmit"});
    const onSearch = () => {
        const mobileSearch = getValues().mobileSearch;
        if(mobileSearch != "" && mobileSearch != undefined){
            navigate(`/search/${mobileSearch}`)
            resetField('mobileSearch');
        }
        close();
    };

    useEffect(() => {
        setFocus("mobileSearch");
    }, [active]);

    return (
        <form className={s["search-form"]} onSubmit={handleSubmit(onSearch)}>
            <CustomInput
                register={register("mobileSearch", {
                })}
                placeholder="поле для поиска"
            />
            <div className={s["search-form__footer"]}>
                <CustomBtn>Найти</CustomBtn>
            </div>
        </form>
    );
};

export default SearchForm;
