import React from 'react'
class Profile extends React.Component
{
    handleStudent = ()=>{
        this.props.handleTopper(this.props.id);
    }
    render()
    {
        return(
            <div>
                <img style={{width:"100px",height:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png" alt="image"/>
                <h1>{this.props.name}</h1>
                <button onClick={this.handleStudent}>Make Topper</button>
            </div>
        );
    }
}
export default Profile;