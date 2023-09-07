import LoginForm from '../../Components/LoginForm/LoginForm';
import Lottie from "lottie-react";
import loginAnimation from '../../assets/lottie/login.json'

const Login = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse min-h-screen'>
            <div className='md:w-1/2 bg-blue-100 p-3 sm:p-10 flex justify-center items-center'>
                <div className="w-full">
                    <Lottie
                        className="lg:w-3/4 mx-auto"
                        animationData={loginAnimation}
                        loop={true}
                    />
                </div>
            </div>
            <div className='md:w-1/2 bg-[#ffffff] p-3 sm:p-10 flex justify-center items-center'>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;