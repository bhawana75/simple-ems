import '../css/page/newEmployee.css'


function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Employee</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text"  />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email"  />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text"  />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text"  />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <button type='submit' className="newUserButton">Create</button>
      </form>
    </div>
  );
}

export default NewUser;