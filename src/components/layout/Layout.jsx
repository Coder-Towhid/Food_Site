
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="cotentArea">
                {children}

            </div>
        </>
    )
}

export default Layout;