import PublicFooter from "@/components/shared/nav-foo/Footer";
import PublicNavbar from "@/components/shared/nav-foo/Navbar";


const CommonLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <>  
            <PublicNavbar/>
            {children}
            <PublicFooter/>
        </>
    );
};

export default CommonLayout;