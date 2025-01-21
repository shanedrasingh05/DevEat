import React from "react";


class Profile extends React.Component{
    constructor(props){
        super(props);
        // create State
      this.state = {
        userInfo: {
          Name: "name",
          lacation: "location",
        },
      };
        console.log("child-Cunstructor")
    }

    async componentDidMount(){
        // This place API calls

        const data = await fetch("https://api.github.com/users/shanedrasingh05");
        const json = await data.json();
        console.log(json);


        this.setState({
            userInfo: json,
        });


        console.log("child-componentDidMount" + this.props.name);
    }

    componentDidUpdate(){
        console.log("component Did Update")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }


    render()
    {
        const { count } = this.state;
        console.log("render")


       return (
         <div>
           <h1>Class base component</h1>
           <img src={this.state.userInfo.avatar_url}></img>
           <h2>Name: {this.state.userInfo.name} </h2>
           <h2>Location: {this.state.userInfo.location} </h2>
         </div>
       );
    };
};

export default Profile;