import Header from "../header";
import Footer from "../footer/footer";

const LayoutMaintenance = ({children}) => {
    return (
        <>
            <>
            <main>{children}</main>
            <h1>maintenance</h1>
            </>
        </>
    );
};

export default LayoutMaintenance;