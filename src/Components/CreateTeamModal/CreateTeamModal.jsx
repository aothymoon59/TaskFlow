import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { addInvitedMembers, getAllUsers } from "../../utils/localDb";


const CreateTeamModal = ({ isOpen, setIsOpen }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onCancel = () => {
        reset()
        setIsOpen(false)
    }

    const allUsers = getAllUsers()

    const onSubmit = (data) => {
        const { teamName, invitedUser } = data

        const invitedMember = {
            teamName,
            invitedUser,
            isAccept: false
        }
        addInvitedMembers(invitedMember)
        onCancel()
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Create team for collaboration'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Title  */}
                <div className="form-control mb-4">
                    <label className="mb-2">
                        <span className="text-sm font-semibold">Team Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("teamName", { required: true })}
                        name="teamName"
                        placeholder="Enter Team Name"
                        className="input input-bordered w-full"
                    />
                    {errors.teamName && (
                        <span className="text-red-600 mt-2">Team Name is required</span>
                    )}
                </div>
                {/* Assign To  */}
                <div className="form-control mb-4">
                    <label className="mb-2">
                        <span className="text-sm font-semibold">Invite</span>
                    </label>
                    <select className="select select-bordered w-full" id="invitedUser" defaultValue={''} {...register("invitedUser", { required: true })}>
                        <option value={''} disabled>Invite Member</option>
                        {
                            allUsers?.map((singleUser, i) => <option key={i} value={singleUser?.email}>{singleUser?.email}</option>)
                        }

                    </select>
                </div>
                <div className="flex gap-3 justify-center items-center md:justify-end">
                    <button onClick={() => onCancel()} type="button" className="btn btn-error btn-xs md:btn-sm">Cancel</button>
                    <button type="submit" className="btn btn-info btn-xs md:btn-sm">Create Team</button>
                </div>

            </form>
        </Modal>
    );
};

export default CreateTeamModal;