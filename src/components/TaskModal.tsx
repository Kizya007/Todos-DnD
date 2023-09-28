import "../assets/TaskModal.scss";

function TaskModal() {
  return (
    <div className="modal">
      <h2 className="modal-title">Create New Task</h2>
      <form action="">
        <div className="form-group">
          <label htmlFor="">Creation Date:</label>
          <input type="text" placeholder="" name="" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Time in Progress:</label>
          <input type="text" placeholder="" name="" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="">End Date:</label>
          <input type="text" placeholder="" name="" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Priority:</label>
          <input type="text" placeholder="" name="" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Attached Files:</label>
          <input type="text" placeholder="" name="" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Current Status:</label>
          <input type="text" placeholder="" name="" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Task Description:</label>
          <input type="text" placeholder="" name="" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Subtasks::</label>
          <input type="text" placeholder="" name="" id="" />
        </div>
      </form>
    </div>
  );
}
export default TaskModal;
