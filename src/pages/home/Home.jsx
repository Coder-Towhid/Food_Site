

import Navbar from "../../components/navbar/Navbar";
import heroImage from '../../assets/images/hero-food.jpg';
import tabsImage from '../../assets/images/tabs-image.jpg';
import Salad from '../../assets/images/salad.png';
import pizza from '../../assets/images/pizza.png';
import burger from '../../assets/images/burger.jpg';
import fries from '../../assets/images/fries.jpg';
import chicken from '../../assets/images/chicken.jpg';
import profile from '../../assets/images/profile.png'
import "./home.css";
import Tabs from "../../components/Tabs/tabs";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import FormComponent from "../../components/form/form";



const Home = () => {
    return (


        <div className="homeContent ">



            <div class=" h-screen hero bg-center  w-full">
                <Navbar />


                <div class="redPrimary h-screen absolute bg-auto inset-0 bg-black opacity-90"></div>
                <div class="relative max-w-5xl px-6 mx-auto z-10 text-white  lg:flex md:flex h-full  items-center block ">
                    <div className="flex-1 lg:h-2/5 md:h-2/5 pb-4" >
                        <div className="lg:absolute md:absolute z-10 left-3.5">
                            <div>
                                <h1 className="text-4xl leading-normal lg:leading-normal md:leading-normal md:text-5xl lg:text-6xl  uppercase py-4 lg:p-4 md:p-4  header-text">Taste the authentic <br />
                                    Saudi cuisine</h1>
                            </div>
                            <div>
                                <p className="py-4 lg:p-4 md:p-4  w-[70%]">
                                    Among the best Saudi chefs in the world, serving you something beyond flavor.
                                </p>
                            </div>
                            <div className="py-4 lg:p-4 md:p-4 ">
                                <button className="text-black text-sm uppercase px-6 py-2 font-bold bg-tableyellow">
                                    Explore menu
                                </button>

                            </div>


                        </div>

                    </div>
                    <div className=" flex-1 lg:h-3/5 md:h-3/5 ">
                        <div className="relative w-full h-full ">
                            <img class="transform h-full scale-x-[-1] object-cover" src={heroImage} alt="" />

                            <div className="star">
                                <svg className="absolute top-[-18px] lg:top-[-36px] z-[-1] right-0 lg:right-[-30px] z-10 text-white" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.4995 24.5914C24.4995 24.5914 27.6425 29.8451 33.8558 32.8899C40.069 35.9356 47 35.6189 47 35.6189C47 35.6189 43.858 30.3643 37.6448 27.3195C31.4315 24.2747 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.5914C24.4995 24.5914 17.5685 24.2747 11.3552 27.3195C5.142 30.3643 2 35.6189 2 35.6189C2 35.6189 8.93101 35.9356 15.1442 32.8899C21.3575 29.8451 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.4086C24.4995 24.4086 21.3575 19.1549 15.1442 16.1101C8.93101 13.0644 2 13.3819 2 13.3819C2 13.3819 5.142 18.6357 11.3552 21.6813C17.5685 24.7261 24.4995 24.4086 24.4995 24.4086ZM24.4995 24.4086C24.4995 24.4086 31.4315 24.7261 37.6448 21.6813C43.858 18.6357 47 13.3819 47 13.3819C47 13.3819 40.069 13.0644 33.8558 16.1101C27.6425 19.1549 24.4995 24.4086 24.4995 24.4086ZM28.2885 35.9725C28.2885 42.0629 24.4995 47 24.4995 47C24.4995 47 20.7105 42.0629 20.7105 35.9725C20.7105 29.882 24.4995 24.9441 24.4995 24.9441C24.4995 24.9441 28.2885 29.882 28.2885 35.9725ZM20.7105 13.0275C20.7105 6.93793 24.4995 2 24.4995 2C24.4995 2 28.2885 6.93793 28.2885 13.0275C28.2885 19.118 24.4995 24.055 24.4995 24.055C24.4995 24.055 20.7105 19.118 20.7105 13.0275Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                </svg>
                            </div>

                            <div className="offer ">
                                <div className="absolute lg:right-[-34px] right-[15px] lg:bottom-0 bottom-[10px] w-full flex justify-center items-center h-20 max-w-20 lg:h-24 lg:max-w-24 offer-box rounded-[50%] shadow">



                                    <p className=" border-red-600 border-2 uppercase text-sm lg:text-lg font-bold text-black p-2 lg:p-3 border rounded-[50%] border-dashed">
                                        Today <br /> offer
                                    </p>


                                </div>

                            </div>

                        </div>




                    </div>


                </div>




            </div>

            <div className="relative overflow-hidden">
                <div className="  max-w-5xl py-16 px-6 mx-auto ">
                    <div className="lg:flex md:flex  gap-[5%]">
                        <div className="flex-1 py-3">
                            <img src={tabsImage} alt="" className="h-full" />
                        </div>
                        <div className="flex-1 py-3">
                            <Tabs />

                        </div>


                    </div>
                    <div className="features md:flex lg:flex py-8 md:py-10 lg:py-12 justify-between ">
                        <div className="flex gap-4 py-4">
                            <div className="rounded-[50%] shadow-xl p-3">
                                <svg width="28" height="28" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.13 7.46181L19.4684 1.13015C18.755 0.736812 17.905 0.503479 17 0.503479C16.0984 0.503479 15.25 0.733479 14.5117 1.14015L14.5384 1.12681L2.86836 7.46515C1.36002 8.29015 0.351689 9.85848 0.335022 11.6635V24.3351C0.351689 26.1435 1.36336 27.7135 2.84669 28.5251L2.87169 28.5385L14.5334 34.8685C15.2217 35.2468 16.0417 35.4735 16.9134 35.4835H16.9167C16.9467 35.4851 16.9717 35.5001 17.0017 35.5001C17.0317 35.5001 17.0534 35.4851 17.0817 35.4835C17.955 35.4751 18.775 35.2485 19.49 34.8568L19.4634 34.8701L31.1367 28.5318C32.6434 27.7068 33.65 26.1401 33.6684 24.3368V11.6618C33.65 9.85348 32.64 8.28348 31.1567 7.47348L31.1317 7.46015L31.13 7.46181ZM16.135 4.05348C16.385 3.91515 16.6834 3.83515 17 3.83515C17.32 3.83515 17.62 3.91681 17.88 4.06181L17.87 4.05681L28.15 9.63848L24.1317 11.9635L13.1884 5.65181L16.135 4.05348ZM17 16.0901L5.84836 9.63848L9.75336 7.51848L20.8034 13.8901L17 16.0901ZM4.46836 25.6135C3.99836 25.3668 3.68169 24.8885 3.66669 24.3351V12.2285L15.3334 18.9785V31.5118L4.46836 25.6135ZM29.5384 25.6085L18.6684 31.5101V18.9768L30.335 12.2268V24.3301C30.3217 24.8835 30.0067 25.3618 29.5467 25.6035L29.5384 25.6068V25.6085Z" fill="#BD1F17" />
                                </svg>
                            </div>

                            <div>
                                <h2 className="font-bold text-lg">fast delivery</h2>
                                <span className="text-sm">Within 30 minutes</span>
                            </div>

                        </div>
                        <div className="flex gap-4 py-4">
                            <div className="rounded-[50%] shadow-xl  p-3">
                                <svg width="28" height="28" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.00333 28.5034C5.15833 28.7368 5.31666 28.9751 5.47833 29.2234C5.83333 29.8618 6.50499 30.2851 7.27499 30.2851C7.40833 30.2851 7.53833 30.2718 7.66499 30.2484L7.65166 30.2501C8.59166 30.1301 9.54499 30.0118 10.4867 29.9184C10.7217 30.0634 10.9517 30.2134 11.1817 30.3634L11.34 30.4668C10.8922 31.8445 10.4489 33.2201 10.01 34.5934L7.67833 32.7284L7.52333 32.6501C7.19166 32.4784 6.79833 32.3784 6.38333 32.3784C6.28499 32.3784 6.18833 32.3834 6.09333 32.3951L6.10499 32.3934L3.70999 32.5301L5.00333 28.5034ZM4.31499 25.1968L1.38999 34.3068C1.46555 34.3112 1.54055 34.3134 1.61499 34.3134C1.68944 34.3134 1.76444 34.3112 1.83999 34.3068L6.25333 34.0568C6.29166 34.0501 6.33499 34.0468 6.37999 34.0468C6.52333 34.0468 6.65666 34.0818 6.77666 34.1418L6.77166 34.1401L10.7667 37.3318H11V36.9634C11.735 34.6568 12.4717 32.3668 13.2233 30.0584C13.3067 29.8084 13.2567 29.6901 13.0233 29.5568C12.3883 29.1718 11.7867 28.7534 11.1517 28.3701C10.9967 28.2851 10.81 28.2351 10.6133 28.2351L10.55 28.2368C9.49666 28.3368 8.42666 28.4701 7.37333 28.6051C7.34333 28.6134 7.30999 28.6184 7.27333 28.6184C7.11666 28.6184 6.98166 28.5251 6.92166 28.3918L6.91999 28.3901C6.31833 27.4534 5.74999 26.6684 5.24833 25.7818C5.05333 25.4518 4.70999 25.2284 4.31499 25.1968ZM23.0617 28.4851L24.3583 32.5318L21.9433 32.4018C21.81 32.3734 21.6567 32.3568 21.5 32.3568C21.2217 32.3568 20.955 32.4084 20.71 32.5034L20.725 32.4984L20.4733 32.5934L18.055 34.5601C18.0117 34.419 17.9672 34.2773 17.9217 34.1351L17.6383 33.2451C17.345 32.3218 17.05 31.3934 16.75 30.4701C17.0333 30.2918 17.3233 30.1034 17.625 29.9034L20.4217 30.2518C20.5333 30.2734 20.6633 30.2868 20.795 30.2868C21.5733 30.2868 22.25 29.8534 22.5967 29.2151L22.6017 29.2051C22.7517 28.9618 22.9033 28.7234 23.0583 28.4851H23.0617ZM23.7567 25.1968C23.3583 25.2334 23.02 25.4568 22.8233 25.7768L22.82 25.7818C22.235 26.7184 21.6833 27.5201 21.1483 28.3901C21.0867 28.5268 20.9533 28.6201 20.7967 28.6201C20.7617 28.6201 20.7267 28.6151 20.695 28.6068H20.6983L17.605 28.2218C17.56 28.2134 17.5067 28.2101 17.4533 28.2101C17.2333 28.2101 17.03 28.2834 16.8667 28.4068L16.8683 28.4051C16.2667 28.8068 15.665 29.1901 15.0467 29.5584C14.9967 29.5768 14.955 29.6051 14.92 29.6401C14.8567 29.7034 14.8183 29.7918 14.8183 29.8884C14.8183 29.9518 14.835 30.0118 14.865 30.0618L14.8633 30.0601C15.365 31.5818 15.85 33.1201 16.335 34.6401C16.62 35.5434 16.8867 36.4451 17.1533 37.3318H17.2867L21.3167 34.0568C21.3717 34.0351 21.435 34.0234 21.5 34.0234C21.565 34.0234 21.63 34.0351 21.6867 34.0584L21.6833 34.0568L26.6817 34.3234L23.7567 25.1968ZM11.0517 25.9818L8.40999 26.3001C8.37833 26.3101 8.33999 26.3151 8.30166 26.3151C8.13833 26.3151 7.99833 26.2134 7.94333 26.0684L7.94166 26.0651C7.50666 25.3468 7.07166 24.6268 6.62166 23.9251C6.48833 23.7384 6.30666 23.5934 6.09499 23.5101L6.08666 23.5068C5.30166 23.2051 4.41499 22.9384 3.67999 22.6718C3.62499 22.6634 3.57499 22.6434 3.52999 22.6168L3.53166 22.6184C3.42333 22.5501 3.35166 22.4301 3.35166 22.2934C3.35166 22.2618 3.35499 22.2318 3.36166 22.2034V22.2068C3.30999 21.2068 3.20999 20.2818 3.05833 19.3718L3.07833 19.5151C3.03833 19.3784 2.96999 19.2601 2.87833 19.1634C2.25999 18.5284 1.62499 17.9101 0.989993 17.2918C0.891659 17.2251 0.82666 17.1134 0.82666 16.9868C0.82666 16.9218 0.843326 16.8584 0.874993 16.8051L0.873327 16.8068C1.17333 15.9868 1.47499 15.1351 1.75999 14.3501C1.78333 14.2668 1.79666 14.1718 1.79666 14.0751C1.79666 13.9784 1.78333 13.8818 1.75833 13.7918L1.75999 13.7984C1.47499 12.9801 1.17499 12.1268 0.873327 11.3401C0.84666 11.2868 0.829993 11.2251 0.829993 11.1584C0.829993 11.0284 0.89166 10.9118 0.988326 10.8384L2.81166 9.1151C2.97833 8.9601 3.08666 8.74177 3.09499 8.49843C3.09499 7.6451 3.27833 6.8251 3.36333 5.92177C3.36333 5.9201 3.36333 5.91843 3.36333 5.91677C3.36333 5.7501 3.48499 5.61177 3.64499 5.58677C4.47999 5.30177 5.31833 5.0351 6.12166 4.73343C6.31333 4.6451 6.47166 4.51343 6.58833 4.35177L6.58999 4.34843C7.05833 3.6301 7.50999 2.9101 7.94499 2.1751C8.01333 2.02177 8.16666 1.91677 8.34166 1.91677C8.37333 1.91677 8.40333 1.9201 8.43166 1.92677H8.42833C9.26499 2.04343 10.1 2.1601 10.9533 2.22677C11.0083 2.23843 11.0717 2.24343 11.1383 2.24343C11.2967 2.24343 11.445 2.20677 11.5783 2.1401L11.5733 2.14343C12.325 1.70843 13.045 1.2401 13.7633 0.7551C13.825 0.7001 13.9067 0.6651 13.9967 0.6651C14.0867 0.6651 14.1683 0.698433 14.2317 0.7551C14.9833 1.2401 15.72 1.7251 16.4717 2.17677C16.5983 2.25343 16.7517 2.29843 16.915 2.29843C16.9467 2.29843 16.98 2.29677 17.01 2.29343H17.0067C17.8767 2.2101 18.6783 2.09343 19.615 1.9751C19.6383 1.9701 19.6667 1.96677 19.6933 1.96677C19.845 1.96677 19.975 2.05843 20.0317 2.1901L20.0333 2.19177C20.485 2.94343 20.9367 3.69677 21.42 4.43177C21.5233 4.5801 21.665 4.6951 21.8317 4.76343L21.8383 4.7651C22.6583 5.06677 23.51 5.3501 24.3133 5.61843C24.4933 5.64343 24.6317 5.79677 24.6317 5.98343C24.6317 5.9901 24.6317 5.99677 24.6317 6.0051C24.7205 6.90732 24.8205 7.80843 24.9317 8.71177C24.965 8.86343 25.0417 8.9951 25.1483 9.09677C25.7667 9.73177 26.4017 10.3501 27.0367 10.9684C27.1233 11.0301 27.1783 11.1284 27.1783 11.2418C27.1783 11.3018 27.1633 11.3568 27.135 11.4051L27.1367 11.4034C26.8367 12.2234 26.535 13.0751 26.25 13.8618C26.2217 13.9518 26.2067 14.0551 26.2067 14.1634C26.2067 14.2718 26.2233 14.3751 26.2517 14.4718L26.25 14.4651C26.5167 15.2834 26.8183 16.1368 27.12 16.9051C27.1517 16.9584 27.1717 17.0234 27.1717 17.0918C27.1717 17.2134 27.1117 17.3218 27.0217 17.3884C26.3867 17.9901 25.7833 18.5918 25.1817 19.2101C25.045 19.3584 24.95 19.5468 24.915 19.7551L24.9133 19.7618C24.7967 20.6318 24.7133 21.4334 24.63 22.3701C24.6233 22.5501 24.4883 22.6968 24.315 22.7218C23.495 23.0068 22.6417 23.2734 21.8383 23.5734C21.6683 23.6484 21.5283 23.7634 21.4217 23.9051L21.42 23.9084C20.9517 24.6434 20.4833 25.3968 20.05 26.1484C19.9817 26.2784 19.8483 26.3651 19.695 26.3651C19.655 26.3651 19.6167 26.3584 19.58 26.3484H19.5833C18.7367 26.2262 17.8839 26.1262 17.025 26.0484C17.0083 26.0468 16.99 26.0468 16.9717 26.0468C16.77 26.0468 16.58 26.1034 16.4183 26.2001L16.4233 26.1968C15.6883 26.6318 14.9683 27.0984 14.25 27.5834C14.185 27.6368 14.1 27.6701 14.0083 27.6701C13.9167 27.6701 13.8317 27.6368 13.765 27.5834L11.5583 26.1651C11.4283 26.1034 11.2683 26.0418 11.1033 25.9901L11.0733 25.9818H11.0517ZM4.69999 14.0968C4.69999 14.1018 4.69999 14.1068 4.69999 14.1134C4.69999 19.2468 8.86166 23.4084 13.995 23.4084C19.1283 23.4084 23.29 19.2468 23.29 14.1134C23.29 8.9801 19.1283 4.81843 13.995 4.81843C10.1533 4.81843 6.85499 7.1501 5.43999 10.4751L5.41666 10.5351C4.96666 11.5868 4.70333 12.8101 4.70166 14.0934V14.0951L4.69999 14.0968ZM14.0117 6.9751V8.64177C17.03 8.64677 19.475 11.0951 19.475 14.1134C19.475 17.1351 17.025 19.5851 14.0033 19.5851C14 19.5851 13.9967 19.5851 13.995 19.5851C10.9767 19.5801 8.53166 17.1318 8.53166 14.1134C8.53166 11.1068 10.9583 8.6651 13.96 8.64177H13.9617L14.0117 6.9751ZM14.0117 6.9751H13.945C10.0317 6.99343 6.86666 10.1701 6.86666 14.0868C6.86666 18.0134 10.05 21.1984 13.9783 21.1984C17.9067 21.1984 21.09 18.0151 21.09 14.0868C21.09 10.1718 17.925 6.9951 14.0133 6.9751H14.0117Z" fill="#BD1F17" />
                                </svg>


                            </div>

                            <div>
                                <h2 className="font-bold text-lg">absolute dining</h2>
                                <span className="text-sm">Best buffet restaurant</span>
                            </div>

                        </div>

                        <div className="flex gap-4 py-4">
                            <div className="rounded-[50%] shadow-xl p-3">
                                <svg width="28" height="28" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.36 7.03677L25.4717 1.70344C24.8583 0.870102 23.8817 0.333435 22.7783 0.333435H7.22333C6.12 0.333435 5.14333 0.868435 4.53666 1.69344L4.53 1.70344L0.641663 7.03677C0.241663 7.5801 0.00166321 8.26177 0.00166321 9.0001V27.6668C0.00166321 27.6751 0.00166321 27.6868 0.00166321 27.6968C0.00166321 30.9784 2.65 33.6418 5.925 33.6668H24.075C27.3533 33.6418 30.0017 30.9784 30.0017 27.6968C30.0017 27.6868 30.0017 27.6751 30.0017 27.6651V9.0001C30.0017 8.26177 29.7617 7.5801 29.355 7.02677L29.3617 7.03677H29.36ZM7.22166 3.66677H22.7767L25.2067 7.0001H4.79L7.22166 3.66677ZM26.6667 27.6668C26.6667 27.6768 26.6667 27.6901 26.6667 27.7034C26.6667 29.1434 25.51 30.3118 24.0767 30.3334H5.92666C4.49 30.3118 3.33333 29.1434 3.33333 27.7034C3.33333 27.6901 3.33333 27.6784 3.33333 27.6651V10.3334H26.6667V27.6668ZM7.5 14.0834C7.5 13.1634 8.24666 12.4168 9.16666 12.4168C10.0867 12.4168 10.8333 13.1634 10.8333 14.0834C10.8333 16.3851 12.6983 18.2501 15 18.2501C17.3017 18.2501 19.1667 16.3851 19.1667 14.0834C19.1667 13.1634 19.9133 12.4168 20.8333 12.4168C21.7533 12.4168 22.5 13.1634 22.5 14.0834C22.5 18.2251 19.1417 21.5834 15 21.5834C10.8583 21.5834 7.5 18.2251 7.5 14.0834Z" fill="#BD1F17" />
                                </svg>

                            </div>

                            <div>
                                <h2 className="font-bold text-lg">pickup delivery</h2>
                                <span className="text-sm">Grab your food order</span>
                            </div>

                        </div>


                    </div>

                    <div className="hidden  bottom-[100px]  lg:right-[-180px] lg:block absolute">
                        <img className="w-[270px] h-[270px] rotate-[-15deg] " src={Salad} alt="" />
                    </div>
                </div>
            </div>

            <div className="food-items relative overflow-hidden">
                <div className="max-w-5xl py-16 px-6 mx-auto ">
                    <div>
                        <span className="food-item-subheader text-red-600 font-bold py-2">Crispy, Every Bite Taste</span>
                        <h2 className="text-4xl uppercase font-bold py-2">Popular food items</h2>
                    </div>
                    <div className="carousel py-10">
                        <CarouselComponent slidesToShow={4} autoplay={false} >
                            <div >
                                <div className="py-6 px-4 flex flex-col gap-4  items-center bg-white">

                                    <img className="max-h-44 max-w-36" src={burger} alt="Slide 1" />
                                    <hr class="w-[20%] border-2 border-red-600 rounded-md" />
                                    <h3 className="uppercase font-bold">Vegetables Burger</h3>
                                    <span className="text-gray-500 text-center text-sm">Barbecue Italian cuisine pizza</span>
                                </div>

                            </div>
                            <div > <div className=" py-6 px-4 flex flex-col gap-4  items-center bg-white"><img className="max-h-24 max-w-36" src={pizza} alt="Slide 2" />
                                <hr class="w-[20%] border-2 border-red-600 rounded-md" />
                                <h3 className="uppercase font-bold">Spacial Pizza </h3>
                                <span className="text-gray-500 text-center text-sm">Barbecue Italian cuisine pizza</span>

                            </div>

                            </div>
                            <div >
                                <div className="py-6 px-4 flex flex-col gap-4 items-center bg-white"><img className="max-h-44 max-w-36" src={fries} alt="Slide 3" />
                                    <hr class="w-[20%] border-2 border-red-600 rounded-md" />
                                    <h3 className="uppercase font-bold">Spacial French fries </h3>
                                    <span className="text-gray-500 text-center text-sm">Barbecue Italian cuisine pizza</span>
                                </div>
                            </div>
                            <div >
                                <div className="py-6 px-4 flex flex-col gap-4  items-center bg-white"><img className="max-h-44 max-w-36" src={chicken} alt="Slide 4" />
                                    <hr class="w-[20%] border-2 border-red-600 rounded-md" />
                                    <h3 className="uppercase font-bold">Cuisine Chicken</h3>
                                    <span className="text-gray-500 text-center text-sm">Barbecue Italian cuisine pizza</span>
                                </div>
                            </div>

                        </CarouselComponent>

                    </div>
                </div>
                <div className="hidden  bottom-[100px]  lg:left-[-180px] lg:block absolute">
                    <img className="w-[270px] h-[270px] rotate-[-55deg] " src={Salad} alt="" />
                </div>

            </div >


            <div className="table-booking bg-cover ">
                <div className="max-w-5xl py-16 px-6 mx-auto ">
                    <div className="lg:max-w-md md:max-w-md w-full">
                        <div className="py-4">
                            <span className="food-item-subheader text-red-600 font-bold py-2">Book Now</span>
                            <h2 className="text-4xl uppercase font-bold py-2 text-white">Book Your Table</h2>
                            <span className="block text-gray-400 max-w-lg">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</span>
                        </div>

                        <FormComponent />
                    </div>


                </div>


            </div>


            <div className="relative overflow-hidden">
                <div className="max-w-5xl py-16 px-6 mx-auto ">
                    <div>
                        <span className="food-item-subheader text-red-600 font-bold py-2">Crispy, Every Bite Taste</span>
                        <h2 className="text-4xl uppercase font-bold py-2">What Some of my Customers Say</h2>
                    </div>
                    <div className="carousel py-10">

                        <CarouselComponent slidesToShow={1} mdShow={1} autoplay={false} >
                            <div >
                                <div className="flex">
                                    <div className="flex-[40%] bg-tableyellow p-12 ">
                                        <div className="flex flex-col gap-20 border-b-2  border-gray-800">
                                            <div>
                                                <span className="comment"></span>
                                                <p >You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly,
                                                    juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                            </div>


                                            <div className=" py-2 flex justify-between items-center">
                                                <div>
                                                    <p>Khalid Al Dawsry</p>
                                                    <span>Jeddah, Saudi</span>
                                                </div>
                                                <div className="relative">
                                                    <div className="comment-profile-image">
                                                        <img className="w-[40px] h-[40px] rounded-[50%] object-cover" src={profile} alt="" />
                                                    </div>

                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                    <div className="flex-[60%]">


                                        <div className="video-wrapper h-full">
                                            <iframe
                                                className="w-full h-full"
                                                src="https://www.youtube.com/embed/FeNH01zxkwA?si=fij1Y0Z5K-iDmC9B"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen>
                                            </iframe>
                                        </div>

                                    </div>
                                </div>

                                <svg width="40" height="78" viewBox="0 0 40 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7943 77.4766L23.3448 61.5335L39.1592 54.9292L32.6086 38.9862L39.1592 23.042L23.3448 16.4377L16.7943 0.494644L0.108093 7.46306V38.6221L0.108144 39.2361L0.108093 39.8652V70.5082L16.7943 77.4766ZM1.85178 36.8641V8.63771L15.8506 2.79156L21.6491 16.9042L1.85178 36.8641ZM22.8821 18.1473L36.8809 23.9934L31.0824 38.1072H3.08475L22.8821 18.1473ZM3.08586 39.8652H31.0824L36.8809 53.9778L22.8821 59.8239L3.08586 39.8652ZM21.6491 61.067L15.8506 75.1796L1.85178 69.3335V41.1071L21.6491 61.067Z" fill="#243054" />
                                    <path d="M27.3183 28.7669C27.3183 30.1194 26.2299 31.2156 24.8885 31.2156C23.5481 31.2156 22.4598 30.1194 22.4598 28.7669C22.4598 27.4145 23.5481 26.3183 24.8885 26.3183C26.2299 26.3183 27.3183 27.4145 27.3183 28.7669Z" fill="#243054" />
                                    <path d="M13.5512 14.0744C13.5512 15.4269 12.464 16.5242 11.1225 16.5242C9.78109 16.5242 8.69385 15.4269 8.69385 14.0744C8.69385 12.722 9.78109 11.6258 11.1225 11.6258C12.464 11.6258 13.5512 12.722 13.5512 14.0744Z" fill="#243054" />
                                    <path d="M13.5512 62.3497C13.5512 63.7022 12.464 64.7983 11.1225 64.7983C9.78109 64.7983 8.69385 63.7022 8.69385 62.3497C8.69385 60.9972 9.78109 59.9011 11.1225 59.9011C12.464 59.9011 13.5512 60.9972 13.5512 62.3497Z" fill="#243054" />
                                    <path d="M27.3183 48.357C27.3183 49.7095 26.2299 50.8057 24.8885 50.8057C23.5481 50.8057 22.4598 49.7095 22.4598 48.357C22.4598 47.0046 23.5481 45.9084 24.8885 45.9084C26.2299 45.9084 27.3183 47.0046 27.3183 48.357Z" fill="#243054" />
                                </svg>



                            </div>
                            <div >
                                <svg width="40" height="78" viewBox="0 0 40 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7943 77.4766L23.3448 61.5335L39.1592 54.9292L32.6086 38.9862L39.1592 23.042L23.3448 16.4377L16.7943 0.494644L0.108093 7.46306V38.6221L0.108144 39.2361L0.108093 39.8652V70.5082L16.7943 77.4766ZM1.85178 36.8641V8.63771L15.8506 2.79156L21.6491 16.9042L1.85178 36.8641ZM22.8821 18.1473L36.8809 23.9934L31.0824 38.1072H3.08475L22.8821 18.1473ZM3.08586 39.8652H31.0824L36.8809 53.9778L22.8821 59.8239L3.08586 39.8652ZM21.6491 61.067L15.8506 75.1796L1.85178 69.3335V41.1071L21.6491 61.067Z" fill="#243054" />
                                    <path d="M27.3183 28.7669C27.3183 30.1194 26.2299 31.2156 24.8885 31.2156C23.5481 31.2156 22.4598 30.1194 22.4598 28.7669C22.4598 27.4145 23.5481 26.3183 24.8885 26.3183C26.2299 26.3183 27.3183 27.4145 27.3183 28.7669Z" fill="#243054" />
                                    <path d="M13.5512 14.0744C13.5512 15.4269 12.464 16.5242 11.1225 16.5242C9.78109 16.5242 8.69385 15.4269 8.69385 14.0744C8.69385 12.722 9.78109 11.6258 11.1225 11.6258C12.464 11.6258 13.5512 12.722 13.5512 14.0744Z" fill="#243054" />
                                    <path d="M13.5512 62.3497C13.5512 63.7022 12.464 64.7983 11.1225 64.7983C9.78109 64.7983 8.69385 63.7022 8.69385 62.3497C8.69385 60.9972 9.78109 59.9011 11.1225 59.9011C12.464 59.9011 13.5512 60.9972 13.5512 62.3497Z" fill="#243054" />
                                    <path d="M27.3183 48.357C27.3183 49.7095 26.2299 50.8057 24.8885 50.8057C23.5481 50.8057 22.4598 49.7095 22.4598 48.357C22.4598 47.0046 23.5481 45.9084 24.8885 45.9084C26.2299 45.9084 27.3183 47.0046 27.3183 48.357Z" fill="#243054" />
                                </svg>

                                <div className="flex flex-col-reverse">
                                    <div className="flex-[40%] bg-tableyellow p-12 ">
                                        <div className="flex flex-col gap-20 border-b-2  border-gray-800">
                                            <div>
                                                <span className="comment"></span>
                                                <p >You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly,
                                                    juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                            </div>


                                            <div className=" py-2 flex justify-between items-center">
                                                <div>
                                                    <p>Khalid Al Dawsry</p>
                                                    <span>Jeddah, Saudi</span>
                                                </div>
                                                <div className="relative">
                                                    <div className="comment-profile-image">
                                                        <img className="w-[40px] h-[40px] rounded-[50%] object-cover" src={profile} alt="" />
                                                    </div>

                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                    <div className="flex-[60%]">


                                        <div className="video-wrapper h-full">
                                            <iframe
                                                className="w-full h-full"
                                                src="https://www.youtube.com/embed/FeNH01zxkwA?si=fij1Y0Z5K-iDmC9B"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen>
                                            </iframe>
                                        </div>

                                    </div>
                                </div>


                            </div>
                            <div >
                                <svg width="40" height="78" viewBox="0 0 40 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7943 77.4766L23.3448 61.5335L39.1592 54.9292L32.6086 38.9862L39.1592 23.042L23.3448 16.4377L16.7943 0.494644L0.108093 7.46306V38.6221L0.108144 39.2361L0.108093 39.8652V70.5082L16.7943 77.4766ZM1.85178 36.8641V8.63771L15.8506 2.79156L21.6491 16.9042L1.85178 36.8641ZM22.8821 18.1473L36.8809 23.9934L31.0824 38.1072H3.08475L22.8821 18.1473ZM3.08586 39.8652H31.0824L36.8809 53.9778L22.8821 59.8239L3.08586 39.8652ZM21.6491 61.067L15.8506 75.1796L1.85178 69.3335V41.1071L21.6491 61.067Z" fill="#243054" />
                                    <path d="M27.3183 28.7669C27.3183 30.1194 26.2299 31.2156 24.8885 31.2156C23.5481 31.2156 22.4598 30.1194 22.4598 28.7669C22.4598 27.4145 23.5481 26.3183 24.8885 26.3183C26.2299 26.3183 27.3183 27.4145 27.3183 28.7669Z" fill="#243054" />
                                    <path d="M13.5512 14.0744C13.5512 15.4269 12.464 16.5242 11.1225 16.5242C9.78109 16.5242 8.69385 15.4269 8.69385 14.0744C8.69385 12.722 9.78109 11.6258 11.1225 11.6258C12.464 11.6258 13.5512 12.722 13.5512 14.0744Z" fill="#243054" />
                                    <path d="M13.5512 62.3497C13.5512 63.7022 12.464 64.7983 11.1225 64.7983C9.78109 64.7983 8.69385 63.7022 8.69385 62.3497C8.69385 60.9972 9.78109 59.9011 11.1225 59.9011C12.464 59.9011 13.5512 60.9972 13.5512 62.3497Z" fill="#243054" />
                                    <path d="M27.3183 48.357C27.3183 49.7095 26.2299 50.8057 24.8885 50.8057C23.5481 50.8057 22.4598 49.7095 22.4598 48.357C22.4598 47.0046 23.5481 45.9084 24.8885 45.9084C26.2299 45.9084 27.3183 47.0046 27.3183 48.357Z" fill="#243054" />
                                </svg>

                                <div className="flex flex-col-reverse">
                                    <div className="flex-[40%] bg-tableyellow p-12 ">
                                        <div className="flex flex-col gap-20 border-b-2  border-gray-800">
                                            <div>
                                                <span className="comment"></span>
                                                <p >You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly,
                                                    juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                            </div>


                                            <div className=" py-2 flex justify-between items-center">
                                                <div>
                                                    <p>Khalid Al Dawsry</p>
                                                    <span>Jeddah, Saudi</span>
                                                </div>
                                                <div className="relative">
                                                    <div className="comment-profile-image">
                                                        <img className="w-[40px] h-[40px] rounded-[50%] object-cover" src={profile} alt="" />
                                                    </div>

                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                    <div className="flex-[60%]">


                                        <div className="video-wrapper h-full">
                                            <iframe
                                                className="w-full h-full"
                                                src="https://www.youtube.com/embed/FeNH01zxkwA?si=fij1Y0Z5K-iDmC9B"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen>
                                            </iframe>
                                        </div>

                                    </div>
                                </div>


                            </div>
                            <div >
                                <svg width="40" height="78" viewBox="0 0 40 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7943 77.4766L23.3448 61.5335L39.1592 54.9292L32.6086 38.9862L39.1592 23.042L23.3448 16.4377L16.7943 0.494644L0.108093 7.46306V38.6221L0.108144 39.2361L0.108093 39.8652V70.5082L16.7943 77.4766ZM1.85178 36.8641V8.63771L15.8506 2.79156L21.6491 16.9042L1.85178 36.8641ZM22.8821 18.1473L36.8809 23.9934L31.0824 38.1072H3.08475L22.8821 18.1473ZM3.08586 39.8652H31.0824L36.8809 53.9778L22.8821 59.8239L3.08586 39.8652ZM21.6491 61.067L15.8506 75.1796L1.85178 69.3335V41.1071L21.6491 61.067Z" fill="#243054" />
                                    <path d="M27.3183 28.7669C27.3183 30.1194 26.2299 31.2156 24.8885 31.2156C23.5481 31.2156 22.4598 30.1194 22.4598 28.7669C22.4598 27.4145 23.5481 26.3183 24.8885 26.3183C26.2299 26.3183 27.3183 27.4145 27.3183 28.7669Z" fill="#243054" />
                                    <path d="M13.5512 14.0744C13.5512 15.4269 12.464 16.5242 11.1225 16.5242C9.78109 16.5242 8.69385 15.4269 8.69385 14.0744C8.69385 12.722 9.78109 11.6258 11.1225 11.6258C12.464 11.6258 13.5512 12.722 13.5512 14.0744Z" fill="#243054" />
                                    <path d="M13.5512 62.3497C13.5512 63.7022 12.464 64.7983 11.1225 64.7983C9.78109 64.7983 8.69385 63.7022 8.69385 62.3497C8.69385 60.9972 9.78109 59.9011 11.1225 59.9011C12.464 59.9011 13.5512 60.9972 13.5512 62.3497Z" fill="#243054" />
                                    <path d="M27.3183 48.357C27.3183 49.7095 26.2299 50.8057 24.8885 50.8057C23.5481 50.8057 22.4598 49.7095 22.4598 48.357C22.4598 47.0046 23.5481 45.9084 24.8885 45.9084C26.2299 45.9084 27.3183 47.0046 27.3183 48.357Z" fill="#243054" />
                                </svg>

                                <div className="flex flex-col-reverse">
                                    <div className="flex-[40%] bg-tableyellow p-12 ">
                                        <div className="flex flex-col gap-20 border-b-2  border-gray-800">
                                            <div>
                                                <span className="comment"></span>
                                                <p >You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly,
                                                    juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                            </div>


                                            <div className=" py-2 flex justify-between items-center">
                                                <div>
                                                    <p>Khalid Al Dawsry</p>
                                                    <span>Jeddah, Saudi</span>
                                                </div>
                                                <div className="relative">
                                                    <div className="comment-profile-image">
                                                        <img className="w-[40px] h-[40px] rounded-[50%] object-cover" src={profile} alt="" />
                                                    </div>

                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                    <div className="flex-[60%]">


                                        <div className="video-wrapper h-full">
                                            <iframe
                                                className="w-full h-full"
                                                src="https://www.youtube.com/embed/FeNH01zxkwA?si=fij1Y0Z5K-iDmC9B"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen>
                                            </iframe>
                                        </div>

                                    </div>
                                </div>


                            </div>



                        </CarouselComponent>


                    </div>
                </div>
            </div>


        </div >

    );
};

export default Home;
