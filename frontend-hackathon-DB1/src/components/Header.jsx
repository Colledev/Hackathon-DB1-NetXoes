import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogo = () => {
        navigate("/");
    };

    return (
        <div className="py-5 border-b border-black">
            <div className="container mx-auto flex justify-between items-center Hover:">
                <div>
                    <button
                        className="text-3xl font-bold text-black"
                        onClick={handleLogo}
                    >
                        NetXoes
                    </button>
                </div>
                <div className="flex gap-4">
                    <SearchIcon />
                    <FavoriteBorderIcon />
                    <PersonIcon />
                    <ShoppingCartIcon />
                </div>
            </div>
        </div>
    );
};

export default Header;
