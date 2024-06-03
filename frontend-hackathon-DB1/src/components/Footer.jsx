const Footer = () => {
    return (
        <div className="bg-black py-10 bottom-0 w-full px-4">
            <div className="container mx-auto flex md:flex-row justify-between items-center">
                <h1 className="text-lg sm:text-3xl font-bold text-white hover:none cursor-default">
                    NetXoes
                </h1>
                <div className="text-white font-bold tracking-tighter flex gap-2 text-base sm:text-xl ">
                    <span className="hover:underline hover:cursor-pointer">
                        Privacy Policy
                    </span>
                    <span className="hover:underline hover:cursor-pointer">
                        Terms of Service
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
