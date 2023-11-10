import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-list/components/ProductDetail";
import AdminProductDetail from "../features/product-list copy/components/AdminProductDetail";
import Productform from "../features/product-list copy/components/ProductForm";
function AdminProductFormPage() {
    return ( 
        <div>
            <NavBar>
                <Productform></Productform>
            </NavBar>
        </div>
     );
}

export default AdminProductFormPage;