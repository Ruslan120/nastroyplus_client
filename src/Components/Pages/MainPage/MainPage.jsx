import React from 'react';
import "./MainPage.scss";
import InterestingProducts from "./InterestingProducts/InterestingProducts";
import Slider from "./InterestingProducts/Slider";

const pictureData = [{name: "Picture1", img: "https://remontv1click.com/image/cache/catalog/demo/banners/228720399_17930956__91_1-1140x380-1140x380.jpg"},
    {name: "Picture1", img: "https://img2.goodfon.ru/original/2560x1024/f/53/tools-installation-floor.jpg"},
    {name: "Picture1", img: "https://stroy-kontinent96.ru/wp-content/uploads/2019/03/slide2-1-1024x410.jpg"},
    {name: "Picture1", img: "https://remontv1click.com/image/cache/catalog/demo/banners/228720399_17930956__91_1-1140x380-1140x380.jpg"}]
const MainPage = () => {
    return (
        <div className="main">
            <div className="main__content">
                <Slider pictureData={pictureData}/>
                <InterestingProducts/>
            </div>
        </div>
    );
};

export default MainPage;