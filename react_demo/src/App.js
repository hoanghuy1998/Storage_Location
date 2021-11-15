
import './App.css';

function App() {
  
  return (
   <>
   <header className="top">
      <div className="container mt-30 header">
        <div className="row">
          <div className="col-3-4">
            <h2 className="ml-15"><img alt="" src="./img/staff-icon.png" style={{marginBottom: '-8px'}} /> <span>Sale System</span></h2>
          </div>
          <div className="col-1-4 text-right">
            <a href="#f" className="log-out">Logout</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div className="container">
        <div className="row">
          <div className="col-1-5 left">
            <nav>
              <ul className="menu">
                <li>
                  <span>Trainer</span>
                  <ul>
                    <li><a href="#f">Trainer List</a></li>
                    <li><a href="#f">Create a Trainer</a></li>
                  </ul>
                </li>
                <li>
                  <span>Teams</span>
                  <ul>
                    <li><a href="#f">Team List</a></li>
                    <li><a href="#f">Create a Team</a></li>
                  </ul>
                </li>
                <li>
                  <span>Trainees</span>
                  <ul>
                    <li><a href="#f">Trainees</a></li>
                  </ul>
                </li>
                <li>
                  <span>Courses</span>
                  <ul>
                    <li><a href="#f">Courses</a></li>
                  </ul>
                </li>
                <li>
                  <span>Syllabus</span>
                  <ul>
                    <li><a href="#f">Syllabus</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-4-5">
            <div className="content">
              <h3 className="title">CREATE CLASSName</h3>
              <table className="table">
               <tbody>
               <tr>
                  <td style={{width:'25%'}}><label htmlFor="txtId">ClassName No.</label></td>
                  <td><input type="text" id="txtId" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="txtClassNameName">ClassName Name</label></td>
                  <td><input id="txtClassNameName" type="text" style={{width: '100%'}}/></td>
                </tr>
                <tr>
                  <td><label htmlFor="txtStartDate">Start Date</label></td>
                  <td><input id="txtStartDate" type="date" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="txtEndDate">End Date</label></td>
                  <td><input id="txtEndDate" type="date" /></td>
                </tr>
				<tr>
                  <td><label>ClassName Is Open</label></td>
                  <td>
					<span><input type="radio" name="isOpen" value="1" id="radOpen" /> <label htmlFor="radOpen">Yes</label></span>
					<span className="ml-15"><input type="radio" name="isOpen" value="0" id="radClose" /> <label htmlFor="radClose">No</label></span>
				  </td>
                </tr>
                <tr>
                  <td>Level</td>
                  <td><input type="range" id="rngLevel" name="Level" min="0" max="5" style={{width: '100%'}} /></td>
                </tr>
				<tr>
                  <td>Note</td>
                  <td><textarea rows="2" style={{width: '100%'}}></textarea></td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button className="btn btn-primary" id="btnSave" type="button">Save</button>
                    <button className="btn btn-primary" type="button">Back</button>
                  </td>
                </tr>
               </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
   </>
  );
}

export default App;
