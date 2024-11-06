import { useState } from "react";
import "./navbar.css"

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <>
            <header className="z-20 relative text-white py-4">
                <div className="max-w-5xl flex justify-between mx-auto px-6 items-center">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        <svg width="24" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5655 6.8987C22.1769 6.8987 21.8491 6.8987 21.4969 6.8987C21.4969 10.3838 21.4969 13.8567 21.4969 17.3539C21.169 17.3539 20.8655 17.3539 20.5497 17.3539C20.5497 13.8688 20.5497 10.4081 20.5497 6.91084C20.2097 6.91084 19.9062 6.91084 19.554 6.91084C19.469 7.65157 19.3597 8.3923 19.2869 9.14517C19.0683 11.6588 18.8497 14.1846 18.6676 16.6982C18.619 17.3782 18.6797 18.0703 18.7526 18.7504C18.7768 19.0054 18.8983 19.2847 19.0561 19.5032C19.7119 20.414 20.574 21.0333 21.6548 21.3368C21.8976 21.4097 21.9341 21.519 21.9219 21.7497C21.7762 24.409 21.6426 27.0684 21.509 29.7156C21.4969 29.9706 21.4726 30.2256 21.4848 30.4684C21.4848 30.6749 21.424 30.7842 21.2055 30.8449C18.5218 31.6706 15.8261 31.8163 13.0817 31.1849C12.8632 31.1363 12.766 31.0634 12.7539 30.8206C12.596 27.5541 12.426 24.2755 12.256 21.009C12.2439 20.8875 12.256 20.7661 12.256 20.6325C12.4382 20.5597 12.6082 20.4868 12.7903 20.4261C14.211 20.0132 15.1461 19.0418 15.7775 17.7668C16.7004 15.8724 17.004 13.8688 16.4939 11.8045C16.0811 10.1166 15.1703 8.74445 13.7496 7.73658C11.9889 6.48584 10.0095 6.60727 8.32164 8.10087C6.62161 9.59447 5.78373 11.4888 5.82016 13.7474C5.84445 15.3017 6.16017 16.771 6.96161 18.1311C7.65377 19.3089 8.60093 20.1347 9.92453 20.499C10.2281 20.584 10.301 20.7175 10.2767 21.0333C10.131 23.6319 9.99739 26.2305 9.86381 28.8291C9.83953 29.2177 9.81524 29.6184 9.79096 30.0191C4.80014 27.797 0.234338 21.8954 0.98721 14.4153C1.74008 6.93513 7.73877 1.17931 14.9639 0.48715C22.8205 -0.277865 29.6813 4.83438 31.5757 11.9988C33.4943 19.2361 30.0092 26.2305 24.3384 29.4606C24.3141 29.0113 24.2777 28.5984 24.2534 28.1734C24.1441 26.0484 24.047 23.9112 23.9255 21.7861C23.9134 21.5433 23.9619 21.434 24.217 21.3611C25.2248 21.0818 26.0263 20.4868 26.6941 19.6975C27.0706 19.2482 27.192 18.7261 27.1799 18.1918C27.1556 16.6739 27.1434 15.156 27.022 13.6503C26.8399 11.4645 26.5727 9.29089 26.3299 7.11728C26.3177 7.05656 26.3177 7.00799 26.3056 6.93513C26.0627 6.93513 25.8441 6.93513 25.577 6.93513C25.577 10.4081 25.577 13.881 25.577 17.3782C25.237 17.3782 24.9455 17.3782 24.6055 17.3782C24.6055 13.9053 24.6055 10.4323 24.6055 6.93513C24.2291 6.93513 23.9012 6.93513 23.5248 6.93513C23.5248 10.3959 23.5248 13.8688 23.5248 17.3782C23.1969 17.3782 22.9055 17.3782 22.5655 17.3782C22.5655 13.881 22.5655 10.4081 22.5655 6.8987Z" fill="#FEBF00" />
                        </svg>
                        <a href="#" className="font-bold text-lg">Restaurant</a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4 text-white-500 text-xs">
                        <ul className="flex gap-4">
                            <li><a href="#">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Clients</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>

                    {/* Book a Table Button */}
                    <div className="hidden md:flex items-center">
                        <button className="px-6 py-2 font-bold text-black bg-yellow-500  ">
                            Book a Table
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <nav className="absolute z-20 w-full md:hidden mobile-nav">
                        <ul className="flex flex-col gap-4 px-6 py-4">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="/about" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Portfolio</a></li>
                            <li><a href="#" className="text-white">Clients</a></li>
                            <li><a href="#" className="text-white">Blog</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                            <li>
                                <button className="w-full px-6 py-2 font-bold bg-yellow-500 text-white rounded">
                                    Book a Table
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}
            </header>

        </>
    )
}

export default Navbar;