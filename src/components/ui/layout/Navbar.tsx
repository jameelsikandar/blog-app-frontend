const Navbar = () => {
  return (
    <div className="h-20% flex justify-between px-10 py-7">
      <div className="text-3xl font-bold">
        <span className="text-orange-400">Blog</span> App
      </div>
      <div className="flex gap-2 text-xl">
        <button className=" py-2 px-7 rounded-lg text-orange-400 hover:bg-orange-400 hover:text-orange-50">
          Log In
        </button>
        <button className=" py-2 px-7 rounded-lg text-orange-50 bg-orange-400 hover:bg-orange-500">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
