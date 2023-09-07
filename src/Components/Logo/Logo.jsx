import navLogo from '../../../src/assets/tasks.png'

const Logo = () => {
    return (
        <div className="flex justify-center items-center gap-2">
            <img
                src={navLogo}
                className="w-6 sm:w-8 md:w-10 lg:w-12"
                alt="Nav Logo"
            />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium sm:font-bold">
                Task<span className='text-[#2896FF]'>Flow</span>
            </span>


        </div>
    );
};

export default Logo;