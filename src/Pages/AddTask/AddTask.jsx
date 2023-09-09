import { useForm } from "react-hook-form";

const AddTask = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const onCancel = () => {
        reset()
    }

    return (
        <div className="p-6 md:min-h-screen flex justify-center items-center">
            <div className="bg-blue-50 w-full max-w-2xl mx-auto rounded-sm p-5">
                <h2 className="text-xl font-semibold leading-6 text-[#2896FF] mb-4 text-center">Add a Task</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Title  */}
                    <div className="form-control mb-4">
                        <label className="mb-2">
                            <span className="text-sm font-semibold">Title</span>
                        </label>
                        <input
                            type="text"
                            {...register("title", { required: true })}
                            name="title"
                            placeholder="Add a title"
                            className="input input-bordered w-full"
                        />
                        {errors.title && (
                            <span className="text-red-600 mt-2">Title is required</span>
                        )}
                    </div>
                    {/* Description  */}
                    <div className="form-control mb-4">
                        <label className="mb-2">
                            <span className="text-sm font-semibold">Description</span>
                        </label>
                        <textarea
                            {...register("description", { required: true })}
                            name="description"
                            placeholder="Write a description"
                            className="input input-bordered w-full py-2 md:resize-none h-[100px]"
                        />
                        {errors.description && (
                            <span className="text-red-600 mt-2">Description is required</span>
                        )}
                    </div>
                    {/* Deadline  */}
                    <div className="form-control mb-4">
                        <label className="mb-2">
                            <span className="text-sm font-semibold">Deadline</span>
                        </label>
                        <input
                            type="date"
                            {...register("date", { required: true })}
                            name="date"
                            placeholder="Add a deadline"
                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* Assign To  */}
                    <div className="form-control mb-4">
                        <label className="mb-2">
                            <span className="text-sm font-semibold">Assign To</span>
                        </label>
                        <select className="select select-bordered w-full" id="assignTo" defaultValue={''} {...register("assignTo", { required: true })}>
                            <option value={''} disabled>Assign To</option>
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
                    <div className="form-control mb-4">
                        <label className="mb-2">
                            <span className="text-sm font-semibold">Priority</span>
                        </label>
                        <select className="select select-bordered w-full" id="priority" defaultValue={''} {...register("priority", { required: true })}>
                            <option value={''} disabled>Priority</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="flex gap-3 justify-center items-center md:justify-end">
                        <button onClick={() => onCancel()} type="button" className="btn btn-error btn-xs md:btn-sm">Cancel</button>
                        <button type="submit" className="btn btn-info btn-xs md:btn-sm">Add Task</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddTask;