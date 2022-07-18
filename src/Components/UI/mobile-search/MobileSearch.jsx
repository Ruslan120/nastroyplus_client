import React from 'react';
import s from "./MobileSearch.module.scss"
import {useDispatch} from "react-redux";
import {setIsSearch} from "../../../redux/reducers/searchFormReducer";

const MobileSearch = () => {
    const dispatch = useDispatch();
    const openSearch = () => {
        dispatch(setIsSearch(true));
    }
    return (
        <div className={s["mobile-search"]}>
            <div className={s["mobile-search__btn"]}>

            </div>
            <div className={s["mobile-search__input"]}>
                <div className={s["mobile-search__btn"]}>
                    <i onClick={openSearch} className={"material-icons"}>search</i>
                </div>
            </div>
        </div>
    );
};

export default MobileSearch;