import logo from '../../assets/logo.png'
import { HiCurrencyDollar } from "react-icons/hi2";

const Navbar = ({coins}) => {
    return (
        <div className='flex items-center justify-between py-3 px-2 container mx-auto bg-fuchsia-50'>
            <div>
                <img className='w-12 rounded-2xl' src={logo} alt="" />
            </div>
            <div className='flex justify-between gap-5 items-center font-semibold'>
                <ul className='flex gap-4 text-gray-700'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Teams</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                <div className=' flex items-center gap-2 text-black border-gray-500 border-2 px-6 py-1 rounded-full'>
                    <span>coin {coins}</span>
                    <p className='text-indigo-500'><HiCurrencyDollar /></p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;