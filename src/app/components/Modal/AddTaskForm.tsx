export default function AddTaskForm() {
  return (
    <div>
      <form>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="taskTitle"
            className="font-display text-lg font-medium mb-1"
          >
            Title
          </label>
          <input
            id="taskTitle"
            className="indent-2 rounded w-full border border-slate-400 mb-6"
            type="text"
            name="taskTitle"
            placeholder="Task Title"
            autoComplete="off"
            aria-label="Task Title"
            //   value={inputText}
            //   onChange={(event) => setInputText(event.target.value)}
          />
          <label
            htmlFor="taskDetails"
            className="font-display text-lg font-medium mb-1"
          >
            Task Details
          </label>
          <textarea
            id="taskDetails"
            name="taskDetails"
            placeholder="Enter Task Details..."
            className="border border-slate-400 rounded indent-2"
          ></textarea>
        </div>
        <div className="flex item-center justify-end gap-2">
          <button className="flex items-center justify-center rounded bg-red-300 hover:bg-red-500 text-white p-2 font-semibold">
            Cancel
          </button>
          <button className="px-4 py-2 bg-emerald-300 hover:bg-emerald-500 rounded-br rounded-tr font-semibold">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
