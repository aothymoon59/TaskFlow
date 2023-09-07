import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import Lottie from "lottie-react";
import signUpAnimation from '../../assets/lottie/register.json'

const Register = () => {
    return (
        <div className='flex flex-col md:flex-row min-h-screen'>
            <div className='md:w-1/2 bg-blue-100 p-3 sm:p-10 flex justify-center items-center'>
                <div className="w-full">
                    <Lottie
                        className="lg:w-3/4 mx-auto"
                        animationData={signUpAnimation}
                        loop={true}
                    />
                </div>
            </div>
            <div className='md:w-1/2 bg-[#ffffff] p-3 sm:p-10 flex justify-center items-center'>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;