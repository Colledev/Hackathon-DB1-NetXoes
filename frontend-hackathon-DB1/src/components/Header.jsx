import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
    return (
        <div className="py-5">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-black">NetXoes</h1>
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
