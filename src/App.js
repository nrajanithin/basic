import React from 'react';
import logo from './logo.svg';
import Profile from './Profile';
import './App.css';
const students = [
  {
    id:"1",
    name:"varma"
  },
  {
    id:"2",
    name:"Anil"
  },
  {
    id:"3",
    name:"syam"
  }
]
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      students: students,
      topper: "0"
    }
  }
  handleTopper = (e)=>{
      this.setState({topper:e});
  }
  render()
  {
    return(
      <div>
        {
          this.state.students.map(student=>{
            return(
              <div style={{marginLeft:"100px",backgroundColor:this.state.topper==student.id?"Red":"White"}}>
                <Profile key={student.id} handleTopper={this.handleTopper} id={student.id} name={student.name} />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
