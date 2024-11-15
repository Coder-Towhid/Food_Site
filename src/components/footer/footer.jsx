
import "./footer.css"
const Footer = () => {

    return (
        <footer className="mt-4">
            <div className="relative footer-wrapper bg-cover " >
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="max-w-container px-4 py-8 lg:py-[120px] lg:py-[100px] mx-auto   relative z-10">
                    <div className="pb-8">
                        <h2 className="font-Bebas text-[62px] leading-[62px] text-center uppercase font-bold py-2 text-white">We ready to have you the best dining experiences</h2>
                    </div>
                    <div className="block lg:flex gap-4 py-8">
                        <div className="flex-1 flex items-center flex-col mb-4">
                            <div >
                                <svg className="w-[22.5px] h-[22.5px]" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 27.2212C8.78625 27.2212 3.75 22.1849 3.75 15.9712C3.75 9.75744 8.78625 4.72119 15 4.72119C21.2138 4.72119 26.25 9.75744 26.25 15.9712C26.2425 22.1812 21.21 27.2137 15.0013 27.2212H15ZM15 7.22119C10.1675 7.22119 6.25 11.1387 6.25 15.9712C6.25 20.8037 10.1675 24.7212 15 24.7212C19.8325 24.7212 23.75 20.8037 23.75 15.9712C23.7437 11.1412 19.83 7.22744 15 7.22119ZM20.0212 17.9362C20.08 17.7962 20.1138 17.6337 20.1138 17.4624C20.1138 16.9424 19.7962 16.4974 19.345 16.3087L19.3363 16.3062L16.1363 14.9962V9.96369C16.1363 9.27369 15.5763 8.71369 14.8863 8.71369C14.1963 8.71369 13.6363 9.27369 13.6363 9.96369V15.8362C13.6363 16.3562 13.9538 16.8012 14.405 16.9899L14.4137 16.9924L18.3913 18.6199C18.5312 18.6799 18.695 18.7137 18.8663 18.7137C19.3863 18.7137 19.8312 18.3962 20.0187 17.9449L20.0212 17.9362Z" fill="#FEBF00" />
                                </svg>

                            </div>

                            <div className="text-white text-center py-4">
                                <h3 className="font-Bebas text-2xl leading-7 font-bold pb-2 uppercase">Opening hours</h3>
                                <span className="block font-Roboto leading-[25px] text-base font-normal text-center">Monday - Sunday</span>
                                <span className="bblock font-Roboto leading-[25px] text-base font-normal text-center">9:00 AM to 11:30 PM</span>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center flex-col mb-4">
                            <div >
                                <svg className="w-[22.5px] h-[22.5px]" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9625 26.5149C21.875 26.5149 21.7763 26.5099 21.6775 26.5011C17.7913 26.0674 14.2813 24.7586 11.2513 22.7761L11.3425 22.8324C8.4425 20.9636 6.0475 18.5661 4.23625 15.7586L4.18 15.6661C2.2525 12.7236 0.945001 9.20863 0.527501 5.42613L0.517501 5.31988C0.507501 5.21988 0.501251 5.10238 0.501251 4.98488C0.501251 3.15613 1.89875 1.65488 3.68375 1.48738L3.6975 1.48613C3.80125 1.47613 3.90625 1.47113 4.01125 1.47113H7.44C9.22375 1.47613 10.695 2.81113 10.9125 4.53613L10.9138 4.55363C11.09 5.65613 11.3475 6.63363 11.6875 7.57113L11.6513 7.45738L11.69 7.57988C11.795 7.89738 11.855 8.26363 11.855 8.64488C11.855 9.60738 11.4675 10.4799 10.8388 11.1136L10.0888 11.8624C11.4075 13.8861 13.085 15.5624 15.0438 16.8424L15.1088 16.8824L15.8525 16.1386C16.4888 15.5086 17.3638 15.1199 18.33 15.1199C18.7713 15.1199 19.1925 15.2011 19.5813 15.3486L19.5575 15.3411C20.3975 15.6661 21.3788 15.9199 22.3963 16.0599L22.4663 16.0674C24.1888 16.3111 25.5 17.7774 25.5 19.5486C25.5 19.5724 25.5 19.5961 25.4988 19.6199V19.6161V22.9961C25.4988 22.9986 25.4988 23.0011 25.4988 23.0024C25.4988 24.9374 23.935 26.5074 22.0013 26.5174L21.9625 26.5149ZM7.4275 3.97113H4.01125C3.70125 3.97863 3.42625 4.11738 3.2375 4.33363L3.23625 4.33488C3.09 4.50863 3.00125 4.73488 3.00125 4.98113C3.00125 5.01363 3.0025 5.04613 3.00625 5.07863V5.07488C3.39125 8.54863 4.56 11.6874 6.3325 14.3961L6.2825 14.3149C7.95375 16.9111 10.0975 19.0561 12.61 20.6786L12.6925 20.7286C15.3163 22.4511 18.45 23.6224 21.8238 24.0049L21.9213 24.0136C21.9363 24.0149 21.9538 24.0149 21.9725 24.0149C22.5363 24.0149 22.995 23.5611 23.0025 22.9986V19.5686C23.0025 19.5611 23.0025 19.5524 23.0025 19.5436C23.0025 19.0349 22.6263 18.6136 22.1375 18.5424L22.1325 18.5411C20.845 18.3661 19.6825 18.0649 18.5788 17.6436L18.6875 17.6799C18.5813 17.6374 18.4575 17.6136 18.3288 17.6136C18.0538 17.6136 17.8038 17.7249 17.6225 17.9049L16.1875 19.3399C15.9613 19.5661 15.6488 19.7061 15.3038 19.7061C15.0763 19.7061 14.8638 19.6461 14.68 19.5399L14.6863 19.5436C11.6425 17.7911 9.1825 15.3311 7.48 12.3811L7.43 12.2874C7.3275 12.1099 7.26625 11.8961 7.26625 11.6699C7.26625 11.3249 7.40625 11.0124 7.6325 10.7861L9.06875 9.34988C9.2475 9.16738 9.3575 8.91863 9.3575 8.64238C9.3575 8.53238 9.34 8.42738 9.3075 8.32863L9.31 8.33613L9.2725 8.21738C8.9225 7.26238 8.63125 6.13113 8.45 4.96363L8.43625 4.85988C8.37125 4.35613 7.94625 3.97113 7.43 3.97113H7.4275ZM20.3125 12.3686C19.7075 12.3674 19.2038 11.9374 19.0888 11.3661L19.0875 11.3586C18.7375 9.58738 17.3638 8.21363 15.6213 7.86863L15.5938 7.86363C15.0138 7.74738 14.5825 7.24238 14.5825 6.63613C14.5825 5.94613 15.1425 5.38613 15.8325 5.38613C15.9175 5.38613 16 5.39488 16.0788 5.40988L16.0713 5.40863C18.8438 5.95613 20.9938 8.10613 21.5338 10.8349L21.5413 10.8786C21.5563 10.9511 21.5638 11.0336 21.5638 11.1174C21.5638 11.8074 21.0038 12.3674 20.3138 12.3674L20.3125 12.3686ZM24.8513 12.3561C24.21 12.3549 23.6825 11.8724 23.61 11.2511V11.2449C23.1463 7.07488 19.865 3.79738 15.7338 3.34238L15.6938 3.33863C15.065 3.26613 14.5813 2.73738 14.5813 2.09488C14.5813 2.04738 14.5838 1.99988 14.5888 1.95363V1.95988C14.6688 1.33113 15.2 0.848633 15.845 0.848633C15.8888 0.848633 15.9325 0.851133 15.975 0.854883H15.97C21.305 1.44113 25.5025 5.63488 26.0913 10.9174L26.0963 10.9686C26.1013 11.0099 26.1038 11.0586 26.1038 11.1074C26.1038 11.7486 25.6213 12.2774 24.9988 12.3499H24.9925C24.9513 12.3549 24.905 12.3574 24.8575 12.3574C24.8563 12.3574 24.8538 12.3574 24.8525 12.3574L24.8513 12.3561Z" fill="#FEBF00" />
                                </svg>

                            </div>

                            <div className="text-white text-center py-4">
                                <h3 className="font-Bebas text-2xl leading-7 font-bold pb-2 uppercase">LET'S TALK</h3>
                                <span className="block font-Roboto leading-[25px] text-base font-normal text-center">Phone: 1-800-222-4545</span>
                                <span className="block font-Roboto leading-[25px] text-base font-normal text-center">Fax: 1-800-222-4545</span>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center flex-col mb-4">
                            <div >
                                <svg className="w-[22.5px] h-[22.5px]" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 0.721191H4C1.93 0.723691 0.2525 2.40119 0.25 4.47119V19.4712C0.2525 21.5412 1.93 23.2187 4 23.2212H24C26.07 23.2187 27.7475 21.5412 27.75 19.4712V4.47119C27.7475 2.40119 26.07 0.723691 24 0.721191ZM4 3.22119H24C24.485 3.22494 24.9025 3.50619 25.1037 3.91244L25.1075 3.91994L14 11.6949L2.8925 3.91994C3.0975 3.50494 3.515 3.22494 4 3.22119ZM24 20.7212H4C3.31 20.7199 2.75125 20.1612 2.75 19.4712V6.87244L13.2838 14.2462C13.4838 14.3874 13.7325 14.4724 14 14.4724C14.2675 14.4724 14.5163 14.3874 14.72 14.2437L14.7162 14.2462L25.25 6.87244V19.4712C25.2488 20.1612 24.69 20.7199 24 20.7212Z" fill="#FEBF00" />
                                </svg>



                            </div>

                            <div className="text-white text-center py-4">
                                <h3 className="font-Bebas text-2xl leading-7 font-bold pb-2 uppercase">BOOK A TABLE</h3>
                                <span className="block font-Roboto leading-[25px] text-base font-normal text-center">Email: demo@website.com</span>
                                <span className="block font-Roboto leading-[25px] text-base font-normal text-center">Support: support@website.com</span>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center flex-col mb-4">
                            <div >
                                <svg className="w-[22.5px] h-[22.5px]" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 25.4712C10 25.4712 10 25.4712 9.99875 25.4712C9.73 25.4712 9.48125 25.3862 9.2775 25.2412L9.28125 25.2437C8.9025 24.9787 -0.00125355 18.6462 -0.00125355 10.9249C-0.00250355 10.8624 -0.00375366 10.7887 -0.00375366 10.7149C-0.00375366 5.14244 4.445 0.607441 9.98625 0.471191H9.99875C15.5512 0.607441 20.0012 5.14119 20.0012 10.7149C20.0012 10.7887 20 10.8624 19.9987 10.9362V10.9249C19.9987 18.6462 11.095 24.9787 10.7162 25.2437C10.5162 25.3862 10.2675 25.4712 9.99875 25.4712H10ZM10 2.97119C5.8275 3.10619 2.4975 6.52119 2.4975 10.7124C2.4975 10.7874 2.49875 10.8612 2.50125 10.9362V10.9249C2.50125 16.1999 7.99875 21.0549 10.0012 22.6499C12.0037 21.0562 17.5012 16.1999 17.5012 10.9249C17.5025 10.8612 17.5037 10.7874 17.5037 10.7124C17.5037 6.51994 14.1725 3.10494 10.0137 2.97119H10.0012H10ZM10 15.3574C9.9775 15.3574 9.95 15.3587 9.9225 15.3587C7.34875 15.3587 5.2625 13.2724 5.2625 10.6987C5.2625 8.12494 7.34875 6.03869 9.9225 6.03869C12.4962 6.03869 14.5825 8.12494 14.5825 10.6987C14.5825 10.7087 14.5825 10.7199 14.5825 10.7312C14.5825 13.2712 12.5362 15.3337 10.0012 15.3574H9.99875H10ZM10 8.53869C9.97625 8.53744 9.95 8.53744 9.9225 8.53744C8.72875 8.53744 7.76125 9.50494 7.76125 10.6987C7.76125 11.8924 8.72875 12.8599 9.9225 12.8599C11.1162 12.8599 12.0837 11.8924 12.0837 10.6987C12.0837 10.6887 12.0837 10.6762 12.0837 10.6637C12.0837 9.50494 11.1562 8.56244 10.0025 8.53869H10Z" fill="#FEBF00" />
                                </svg>

                            </div>

                            <div className="text-white text-center py-4">
                                <h3 className="font-Bebas text-2xl leading-7 font-bold pb-2 uppercase">Our Address</h3>
                                <span className="block font-Roboto leading-[25px] text-base font-normal text-center">123 Stree New York City , United States Of America.</span>

                            </div>
                        </div>




                    </div>


                    <div className="socials py-4">
                        <div className="flex justify-center gap-4">
                            <div>
                                <svg className="w-[53.45px] h-[53.45px]" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.704579" y="1.58483" width="52.2273" height="52.2273" rx="26.1136" stroke="#E5E7EB" stroke-width="1.22727" />
                                    <path d="M28.3902 37.6984V30.6684H30.7342L31.1802 27.7594H28.3902V25.8714C28.3862 25.8324 28.3842 25.7874 28.3842 25.7414C28.3842 24.9384 29.0352 24.2874 29.8382 24.2874C29.9062 24.2874 29.9722 24.2924 30.0372 24.3014L30.0292 24.3004H31.2972V21.8254C30.6282 21.7114 29.8492 21.6404 29.0562 21.6294H29.0452C28.9642 21.6224 28.8702 21.6194 28.7752 21.6194C26.8142 21.6194 25.2252 23.2084 25.2252 25.1694C25.2252 25.3014 25.2322 25.4324 25.2462 25.5604L25.2452 25.5444V27.7604H22.6892V30.6694H25.2452V37.6994C20.4062 36.9124 16.7562 32.7634 16.7562 27.7624C16.7562 22.2064 21.2602 17.7014 26.8172 17.7014C32.3742 17.7014 36.8782 22.2054 36.8782 27.7624C36.8782 32.7634 33.2282 36.9134 28.4472 37.6924L28.3892 37.7004L28.3902 37.6984Z" fill="white" />
                                </svg>

                            </div>

                            <div>
                                <svg className="w-[53.45px] h-[53.45px]" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.15912" y="1.58483" width="52.2273" height="52.2273" rx="26.1136" stroke="#E5E7EB" stroke-width="1.22727" />
                                    <path d="M33.5553 18.6985H21.0761C19.5388 18.6985 18.2728 19.9585 18.2728 21.4885V33.8185C18.2728 35.4385 19.5388 36.6985 21.0761 36.6985H33.4649C35.0022 36.6985 36.2682 35.4385 36.2682 33.9085V21.4885C36.3586 19.9585 35.0926 18.6985 33.5553 18.6985ZM29.3051 32.5585L29.1243 32.2885L26.6827 28.7785L23.4272 32.5585H22.6134L26.321 28.2385L23.2464 23.8285L22.6134 22.8385H25.4167L25.5975 23.1085L27.8583 26.4385L30.2094 23.6485L30.9329 22.8385H31.7467L28.22 26.9785L31.385 31.5685L32.1084 32.5585H29.3051Z" fill="white" />
                                </svg>

                            </div>
                            <div>
                                <svg className="w-[53.45px] h-[53.45px]" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.613667" y="1.58483" width="52.2273" height="52.2273" rx="26.1136" stroke="#E5E7EB" stroke-width="1.22727" />
                                    <path d="M32.7273 18.6985H20.7273C19.0703 18.6985 17.7273 20.0415 17.7273 21.6985V33.6985C17.7273 35.3555 19.0703 36.6985 20.7273 36.6985H32.7273C34.3843 36.6985 35.7273 35.3555 35.7273 33.6985V21.6985C35.7273 20.0415 34.3843 18.6985 32.7273 18.6985ZM32.6913 30.1725C32.6803 30.6985 32.5793 31.1975 32.4023 31.6585L32.4123 31.6285C32.0933 32.4365 31.4653 33.0645 30.6783 33.3765L30.6573 33.3835C30.2263 33.5505 29.7263 33.6515 29.2053 33.6625H29.2003C28.5603 33.6915 28.3563 33.6985 26.7263 33.6985C25.0963 33.6985 24.8923 33.6915 24.2523 33.6625C23.7263 33.6515 23.2273 33.5505 22.7663 33.3735L22.7963 33.3835C21.9883 33.0645 21.3603 32.4365 21.0483 31.6495L21.0413 31.6285C20.8743 31.1975 20.7733 30.6975 20.7623 30.1765V30.1715C20.7333 29.5315 20.7263 29.3275 20.7263 27.6975C20.7263 26.0675 20.7333 25.8635 20.7623 25.2235C20.7733 24.6975 20.8743 24.1985 21.0513 23.7375L21.0413 23.7675C21.3593 22.9595 21.9883 22.3305 22.7753 22.0195L22.7963 22.0125C23.2273 21.8455 23.7273 21.7445 24.2483 21.7335H24.2533C24.8933 21.7045 25.0973 21.6975 26.7273 21.6975C28.3573 21.6975 28.5613 21.7045 29.2013 21.7335C29.7273 21.7445 30.2263 21.8455 30.6873 22.0225L30.6573 22.0125C31.4653 22.3305 32.0943 22.9595 32.4053 23.7465L32.4123 23.7675C32.5793 24.1985 32.6803 24.6985 32.6913 25.2195V25.2245C32.7203 25.8645 32.7273 26.0685 32.7273 27.6985C32.7273 29.3285 32.7203 29.5325 32.6913 30.1725ZM31.4043 24.1595C31.1983 23.6345 30.7903 23.2275 30.2793 23.0255L30.2663 23.0205C29.9353 22.8945 29.5533 22.8185 29.1543 22.8135H29.1523C28.5193 22.7845 28.3303 22.7785 26.7283 22.7785C25.1263 22.7785 24.9363 22.7845 24.3043 22.8135C23.9033 22.8185 23.5203 22.8935 23.1673 23.0275L23.1903 23.0195C22.6653 23.2255 22.2583 23.6335 22.0563 24.1445L22.0513 24.1575C21.9253 24.4885 21.8493 24.8705 21.8443 25.2695V25.2715C21.8153 25.9045 21.8093 26.0935 21.8093 27.6955C21.8093 29.2975 21.8153 29.4875 21.8443 30.1195C21.8493 30.5205 21.9243 30.9035 22.0583 31.2565L22.0503 31.2335C22.2563 31.7585 22.6643 32.1655 23.1753 32.3675L23.1883 32.3725C23.5193 32.4985 23.9013 32.5745 24.3003 32.5795H24.3023C24.9353 32.6085 25.1243 32.6145 26.7263 32.6145C28.3283 32.6145 28.5183 32.6085 29.1503 32.5795C29.5513 32.5745 29.9343 32.4995 30.2873 32.3655L30.2643 32.3735C30.7893 32.1675 31.1963 31.7595 31.3983 31.2485L31.4033 31.2355C31.5293 30.9045 31.6053 30.5225 31.6103 30.1235V30.1215C31.6393 29.4885 31.6453 29.2995 31.6453 27.6975C31.6453 26.0955 31.6393 25.9055 31.6103 25.2725C31.6053 24.8715 31.5303 24.4895 31.3963 24.1355L31.4043 24.1585V24.1595ZM26.7273 30.7795C25.0253 30.7795 23.6463 29.4005 23.6463 27.6985C23.6463 25.9965 25.0253 24.6175 26.7273 24.6175C28.4293 24.6175 29.8083 25.9965 29.8083 27.6985C29.8083 29.4005 28.4293 30.7795 26.7273 30.7795ZM29.9303 25.2155C29.5323 25.2155 29.2103 24.8935 29.2103 24.4955C29.2103 24.0975 29.5323 23.7755 29.9303 23.7755C30.3283 23.7755 30.6503 24.0975 30.6503 24.4955C30.6503 24.8935 30.3283 25.2155 29.9303 25.2155ZM28.7273 27.6985C28.7273 28.8035 27.8323 29.6985 26.7273 29.6985C25.6223 29.6985 24.7273 28.8035 24.7273 27.6985C24.7273 26.5935 25.6223 25.6985 26.7273 25.6985C27.8323 25.6985 28.7273 26.5935 28.7273 27.6985Z" fill="white" />
                                </svg>


                            </div>
                            <div>
                                <svg className="w-[53.45px] h-[53.45px]" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.06821" y="1.58483" width="52.2273" height="52.2273" rx="26.1136" stroke="#E5E7EB" stroke-width="1.22727" />
                                    <path d="M23.8398 22.7975C23.8398 21.9435 23.1468 21.2505 22.2928 21.2505C21.4388 21.2505 20.7458 21.9435 20.7458 22.7975C20.7458 23.6515 21.4388 24.3445 22.2928 24.3445C23.1458 24.3425 23.8378 23.6515 23.8398 22.7975ZM23.6308 34.1075V25.5195H20.9588V34.1075H23.6308ZM33.6268 29.3995C33.6268 27.0855 33.1248 25.3045 30.4238 25.3045C30.3928 25.3035 30.3568 25.3025 30.3198 25.3025C29.2928 25.3025 28.3938 25.8545 27.9048 26.6775L27.8978 26.6905H27.8608V25.5185H25.3018V34.1065H27.9708V29.8575C27.9708 28.7355 28.1838 27.6505 29.5748 27.6505C30.9408 27.6505 30.9608 28.9325 30.9608 29.9275V34.1065H33.6278L33.6268 29.3995ZM21.1818 18.6985H33.1818C34.8388 18.6985 36.1818 20.0415 36.1818 21.6985V33.6985C36.1818 35.3555 34.8388 36.6985 33.1818 36.6985H21.1818C19.5248 36.6985 18.1818 35.3555 18.1818 33.6985V21.6985C18.1818 20.0415 19.5248 18.6985 21.1818 18.6985Z" fill="white" />
                                </svg>

                            </div>

                        </div>
                        <span className="font-Roboto font-normal text-[21px] leading-[24.61px] py-4 block text-white text-center">© 2023 All Rights Reserved </span>
                    </div>

                </div>
            </div >


        </footer >
    )



}

export default Footer;