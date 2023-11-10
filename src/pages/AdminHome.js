import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
import AdminProductList from "../features/product-list copy/components/AdminProductList";
function AdminHome() {
    return ( 
        <div>
            <NavBar>
                <AdminProductList></AdminProductList>
            </NavBar>
        </div>
     );
}

export default AdminHome;