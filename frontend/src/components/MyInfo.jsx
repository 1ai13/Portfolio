import profilePic from '../assets/images/portfolio_pic.jpg';

function MyInfo(){
    return <>
    <img className="size-64 rounded-full mask-radial-from-50% m-auto my-5 md:size-96" src={profilePic} alt="Profile Picture" />
    <h1 className='font-extrabold text-3xl text-center mb-2'>Software Developer</h1>
    <h2 className='font-bold text-xl text-center mb-8'>Unai González Sánchez</h2>
    <p id="about" className='font-normal mx-4 text-justify md:text-center md:w-1/3 md:mx-auto'>Welcome to my web! I'm a software developer specialized in <u>web applications</u>.
    During my free time I also learned to create <u>indie games</u>. As a hobby I play <u>videogames</u> while I keep learning about this gigantic binary world!</p>
    </>;
}

export default MyInfo;