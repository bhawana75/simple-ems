import '../css/page/employee.css'

function User() {
return (
  <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Edit User</h1>
    </div>
    <div className="userContainer">
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                placeholder="Number"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input
                type="text"
                placeholder="Address"
                className="userUpdateInput"
              />
            </div>
          </div>
          <div className="userUpdateRight">
            <button className="userUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}
export default User;