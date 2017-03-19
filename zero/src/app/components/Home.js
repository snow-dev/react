import  React from 'react';

export  class Home extends React.Component{
    render(){
        return(
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your nage is {this.props.age}</p>
                <p>User Object: => Name: {this.props.user.name}</p>
                <div>
                    {this.props.user.hobbies.map((hobby) => <li>{hobby}</li> )}
                </div>

            </div>
        );
    }
}