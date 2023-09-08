
import useAuth from "../../hooks/useAuth";
import { getSingleUser } from "../../utils/localDb";

const Profile = () => {
    const { user } = useAuth()


    const myProfile = getSingleUser(user?.email)

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(https://i.ibb.co/pyHYd8v/profile-taskflow.jpg)`,
                }}
                className="h-[30vh] flex justify-center items-center bg-[#000000] bg-opacity-[0.7] bg-blend-multiply bg-cover bg-center"
            >
                <h2 className="font-extrabold text-[32px] text-blue-200">
                    My Profile
                </h2>
            </div>
            <div className="py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto bg-blue-100 rounded-lg shadow-lg p-8">
                        <div className="text-center">
                            <img
                                src={myProfile?.image}
                                alt="Profile"
                                className="mx-auto w-24 h-24 rounded-full mb-4"
                            />
                            <h2 className="text-lg sm:text-xl font-semibold">{myProfile?.name}</h2>
                            <p className="text-gray-600">{myProfile?.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;


