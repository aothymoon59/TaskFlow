import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm()


    const onCancel = () => {
        reset()
        setIsOpen(false)
    }

    const onSubmit = (data) => {
        onCancel()
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Programming Hero'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Title  */}
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">Title</label>
                    <input className="w-full rounded-md" type="text" id="title" {...register("title")} />
                </div>
                {/* Description  */}
                <div className="flex flex-col mb-5">
                    <label htmlFor="description" className="mb-2">Description</label>
                    <input className="w-full rounded-md" type="text" id="description" {...register("description")} />
                </div>
                {/* Deadline  */}
                <div className="flex flex-col mb-5">
                    <label htmlFor="date" className="mb-2">Deadline</label>
                    <input className="w-full rounded-md" type="date" id="date" {...register("date")} />
                </div>
                {/* Assign To  */}
                <div className="flex flex-col mb-5">
                    <label htmlFor="assignedTo" className="mb-2">Assign To</label>
                    <select className="w-full rounded-md" id="assignedTo" {...register("assignedTo")}>
                        <option value="Aothy Mahamud Moon">Aothy Mahamud Moon</option>
                        <option value="John Smith">John Smith</option>
                        <option value="Sarah Johnson">Sarah Johnson</option>
                        <option value="David Miller">David Miller</option>
                        <option value="Emily Davis">Emily Davis</option>
                        <option value="Michael Wilson">Michael Wilson</option>
                        <option value="Sophia Brown">Sophia Brown</option>
                        <option value="Daniel Lee">Daniel Lee</option>
                        <option value="Olivia Martinez">Olivia Martinez</option>
                        <option value="James Anderson">James Anderson</option>
                        <option value="Emma Taylor">Emma Taylor</option>
                        <option value="William Clark">William Clark</option>
                        <option value="Ava Harris">Ava Harris</option>
                        <option value="Alexander Moore">Alexander Moore</option>
                    </select>
                </div>
                {/* Priority  */}
                <div className="flex flex-col mb-5">
                    <label htmlFor="priority" className="mb-2">Priority</label>
                    <select className="w-full rounded-md" id="priority" {...register("priority")}>
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end">
                    <button onClick={() => onCancel()} type="button" className="btn btn-danger">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </Modal>
    );
};

export default AddTaskModal;