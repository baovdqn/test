import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";

const Pricing = () => {
    return (
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="pricing">
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
                        Mục 2
                    </h3>
                    <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
                        Dưới này là nội dung mục 2
                    </p>
                    <p>Chỗ này chèn ảnh</p>
                </div>
                <div className="flex flex-col w-full my-16">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
                        Mục 2.1
                    </h3>
                    <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
                        Nội dung mục 2.1
                    </p>
                    <div className="py-12 w-full px-8 mt-16">
                        {/* <Maps className="w-full h-auto" /> */}
                        <div class="carousel w-full">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img
                                    src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
                                    className="w-full"
                                />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a href="#slide2" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img
                                    src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
                                    className="w-full"
                                />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a href="#slide3" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img
                                    src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
                                    className="w-full"
                                />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a href="#slide4" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img
                                    src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
                                    className="w-full"
                                />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a href="#slide1" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap">
            <img
              src="/assets/Icon/amazon.png"
              className="h-14 w-auto mt-4 lg:mt-2"
              alt=""
            />
            <img
              src="/assets/Icon/netflix.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/reddit.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/discord.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/spotify.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt=""
            />
          </div> */}
                </div>
                <div className="flex flex-col w-full my-16" id="testimoni">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                        Mục 3: Trích dẫn lời nói của 1 số người
                    </h3>
                    <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
                        Nội dung mục 3
                    </p>
                    <div className="w-full flex flex-col py-12">
                        <Testimoni />
                    </div>
                    <div className="relative w-full mt-16">
                        <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                    Lời kêu gọi tiếp <br /> Chưa nghĩ ra nội dung
                                </h5>
                                <p>Lorem</p>
                            </div>
                            <ButtonPrimary>Help now</ButtonPrimary>
                        </div>
                        <div
                            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                            style={{ filter: "blur(114px)" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
