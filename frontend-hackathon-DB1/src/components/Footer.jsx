const Footer = () => {
    return (
        <div className="bg-black py-10 bottom-0 w-full px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-3xl font-bold text-white">NetXoes</h1>
                <span className="text-white font-bold tracking-tighter flex gap-6 text-2xl">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </span>
            </div>
        </div>
    );
};

export default Footer;
