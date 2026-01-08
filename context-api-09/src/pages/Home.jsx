import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const images = [
        "https://i.pinimg.com/736x/56/cd/4e/56cd4efbea7e5deb7b0e02faa73858b2.jpg",
        "https://i.pinimg.com/1200x/ef/9c/7f/ef9c7ff7d783a2cf5b7ab5c3d166cbf8.jpg",
        "https://i.pinimg.com/1200x/2c/3c/2d/2c3c2de1dbf8a174fb3d18d404ef52ac.jpg",
        "https://i.pinimg.com/736x/04/06/66/0406663759d46eb5836843a9a89c5f5d.jpg",
        "https://i.pinimg.com/736x/5a/97/80/5a9780409e68486de910c64693ba3bed.jpg",
        "https://i.pinimg.com/736x/82/15/6e/82156efb97036511e62c4e3156e823da.jpg",
        "https://i.pinimg.com/736x/d1/76/78/d176786e3acb2c5f4532d7ae6478a28d.jpg",
        "https://i.pinimg.com/736x/cf/51/ad/cf51ad6610712d87fe674f1a460fc72d.jpg",
        "https://i.pinimg.com/736x/78/4a/d4/784ad42346dfba5537e43a6a4951bf62.jpg",
        "https://i.pinimg.com/736x/86/ae/a4/86aea42d1f3093614154686f2a3a3dd4.jpg",
    ];


    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center overflow-y-hidden'>
            <div className='w-full overflow-x-auto overflow-y-hidden px-4 scroll-h scroll-smooth whitespace-nowrap  h-1/2 flex gap-6 '>
                <div className='flex gap-6 whitespace-nowrap animate-marquee'>
                    {
                        images.map((elem, idx) => {
                            return <img className='h-100 w-60 rounded-2xl shrink-0 hover:scale-110 transition-all' key={idx} src={elem} alt='Images' />
                        })
                    }
                </div>
            </div>

            <button onClick={() => {
                navigate('/products')
            }} className='bg-[#333333] text-white px-8 py-4 rounded-xl  text-2xl mt-10 font-bold active:scale-95 cursor-pointer'>Choose Your Style</button>
        </div>

    )
}

export default Home