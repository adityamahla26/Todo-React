import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toDoSchema, ToDoFormValues } from "../schemas/toDoSchema";
import CalenderIcon from "../assets/icons/Calendar.svg";
const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ToDoFormValues>({ resolver: zodResolver(toDoSchema) });

  const onSubmit = (data: ToDoFormValues) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <div className="flex justify-center items-center p-30 m-10">
      <div className="bg-white px-20 py-10 rounded-xl border shadow-lg w-full max-w-4xl">
        <div className="flex flex-row gap-6">
          <div className="mt-2">
            <img src={CalenderIcon} alt="Calender" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Create new
            </h2>
            <p className="text-gray-500 mb-6">
              Fill up the below form and submit your code
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                {...register("title")}
                placeholder="E.g. Study React hooks"
                className={`w-full p-2 border rounded-md ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Description
              </label>
              <input
                type="text"
                {...register("description")}
                placeholder="E.g. Build an application with hooks"
                className={`w-full p-2 border rounded-md ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Priority
              </label>
              <select
                {...register("priority")}
                className={`w-full p-2 border rounded-md ${
                  errors.priority ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              {errors.priority && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.priority.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                {...register("category")}
                className={`w-full p-2 border rounded-md ${
                  errors.category ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select category</option>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Study">Study</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <label className="block font-medium text-gray-700 mb-2">
              Date & Time
            </label>
            <input
              type="datetime-local"
              {...register("deadline")}
              className={`w-full p-2 border rounded-md ${
                errors.deadline ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.deadline && (
              <p className="text-red-500 text-sm mt-1">
                {errors.deadline.message}
              </p>
            )}
          </div>
          <div className="flex space-x-10">
            <button
              type="submit"
              className="px-4 py-2 bg-[#D2F7FF] rounded-md border-none text-gray-700 shadow hover:bg-[#0ACBF5] cursor-pointer"
            >
              Submit Task
            </button>
            <button
              type="button"
              className="px-4 border rounded-md hover:bg-gray-100 cursor-pointer"
              onClick={() => reset()}
            >
              Clear All
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
