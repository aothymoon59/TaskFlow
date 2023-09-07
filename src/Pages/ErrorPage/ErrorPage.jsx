import errorImg1 from "../../assets/errorImg/error-1.png";
import errorImg2 from "../../assets/errorImg/error-2.png";
import errorImg3 from "../../assets/errorImg/error-3.png";
import errorImg4 from "../../assets/errorImg/error-4.png";
import errorImg5 from "../../assets/errorImg/error-5.png";
import errorImg6 from "../../assets/errorImg/error-6.png";
import errorImg7 from "../../assets/errorImg/error-7.png";
import errorImg8 from "../../assets/errorImg/error-8.png";
import errorImg9 from "../../assets/errorImg/error-9.png";
import errorImg10 from "../../assets/errorImg/error-10.png";
import errorImg11 from "../../assets/errorImg/error-11.png";
import errorImg12 from "../../assets/errorImg/error-12.png";
import errorImg13 from "../../assets/errorImg/error-13.png";
import errorImg14 from "../../assets/errorImg/error-14.png";
import errorImg15 from "../../assets/errorImg/error-15.png";
import { Link } from "react-router-dom";

const animationFiles = [
    errorImg1,
    errorImg2,
    errorImg3,
    errorImg4,
    errorImg5,
    errorImg6,
    errorImg7,
    errorImg8,
    errorImg9,
    errorImg10,
    errorImg11,
    errorImg12,
    errorImg13,
    errorImg14,
    errorImg15,
];

const ErrorPage = () => {
    const randomAnimationIndex = Math.floor(
        Math.random() * animationFiles.length
    );
    const randomAnimation = animationFiles[randomAnimationIndex];

    return (
        <div className="container mx-auto px-5 flex flex-col justify-center items-center h-screen">
            <div className="space-y-3">
                <h2 className="text-5xl md:text-6xl lg:text-8xl">Sorry</h2>
                <p className="text-3xl lg:text-5xl">We couldn&apos;t find that page</p>
                <p className="text-xl md:text-2xl lg:text-3xl">
                    Please go to{" "}
                    <Link className="text-blue-600" href="/">
                        TaskFlow&apos;s Home Page
                    </Link>
                </p>
            </div>
            <div className="mx-auto mt-6">
                <img src={randomAnimation} alt="Error Image" />
            </div>
        </div>
    );
};

export default ErrorPage;
