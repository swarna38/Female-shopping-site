
import hero from '../../assets/growtika-zk2sfqaJgdU-unsplash.jpg'
const Hero = ({handelSetCoins}) => {
    return (
         <div className='hero-bg container mx-auto text-center bg-fuchsia-50'>
            <div className='py-8 hero-child'>
                <img className='mx-auto pt-10 w-1/3 rounded-3xl' src={hero} alt="" />
                <h1 className="text-4xl font-semibold my-5">
                Shop the Trends, Upgrade Your Style
                </h1>
                <p className="text-2xl text-gray-800 mb-6 font-medium">High-quality items curated just for you. Explore our collection and enjoy fast delivery!</p>


                 <button
                    onClick={handelSetCoins}
                    className="bg-indigo-500 text-white font-semibold px-10 shadow-2xl py-3 rounded-full "
                >
                Shop Now
                </button>

            </div>
        </div>
    );
};

export default Hero;