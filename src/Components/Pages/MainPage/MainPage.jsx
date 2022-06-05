import React from 'react';
import s from "./MainPage.module.scss";
import InterestingProducts from "./InterestingProducts/InterestingProducts";
import Slider from "./InterestingProducts/Slider";
import { BASE_URL } from '../../../utils/consts';

const pictureData = [{name: "Picture1", img: `${BASE_URL}/images/8119996d-9f22-47b1-8da8-189952ac1615-nastroyplus-banner.jpg`},
    {name: "Picture1", img: "https://img2.goodfon.ru/original/2560x1024/f/53/tools-installation-floor.jpg"},
    {name: "Picture1", img: "https://stroy-kontinent96.ru/wp-content/uploads/2019/03/slide2-1-1024x410.jpg"}]
const MainPage = () => {
    return (
        <div className={s["main"]}>
                <Slider pictureData={pictureData}/>
                <InterestingProducts/>
        </div>
    );
};

export default MainPage;