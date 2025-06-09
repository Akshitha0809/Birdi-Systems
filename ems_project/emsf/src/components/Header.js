function Header() {
    return (
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <h1 className="text-xl font-bold text-purple-700">Employee Dashboard</h1>
            <button
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
            >
                Logout
            </button>
        </header>
    );
}

export default Header;