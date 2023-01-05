import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            gender: '',
            civil_status: '',
            birthday: '',
            contact: '',
            address: ''
        }
        this.changeFirstNameHandler =
            this.changeFirstNameHandler.bind(this);
        this.changeMiddleNameHandler =
            this.changeMiddleNameHandler.bind(this);
        this.changeLastNameHandler =
            this.changeLastNameHandler.bind(this);
        this.changeEmailHandler =
            this.changeEmailHandler.bind(this);
        this.changeGenderHandler =
            this.changeGenderHandler.bind(this);
        this.changeCivilStatusHandler =
            this.changeCivilStatusHandler.bind(this);
        this.changeBirthdayHandler =
            this.changeBirthdayHandler.bind(this);
        this.changeContactHandler =
            this.changeContactHandler.bind(this);
        this.changeAddressHandler =
            this.changeAddressHandler.bind(this);
        
        this.saveOrUpdateUser =
            this.saveOrUpdateUser.bind(this);
    }

    componentDidMount() {

        if (this.state.id === '_add') {
            return
        } else {
            UserService.getUserById(this.state.id).
            then((res) => {
                let user = res.data;
                
                this.setState({
                    firstName: user.firstName,
                    middleName:user.middleName,
                    lastName: user.lastName,
                    email: user.email,
                    gender: user.gender,
                    civil_status: user.civil_status,
                    birthday: user.birthday,
                    contact: user.contact,
                    address: user.address
                });
            });
            
        }
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = { firstName: this.state.firstName,middleName: this.state.middleName, lastName:
             this.state.lastName, email: this.state.email , gender: this.state.gender, civil_status: this.state.civil_status, birthday: this.state.birthday   
             , contact: this.state.contact , address: this.state.address };
        console.log('user => ' + JSON.stringify(user));

        if (this.state.id === '_add') {
            
            if(this.state.firstName.trim()!="" && this.state.lastName.trim()!="" && this.state.gender.trim()!="" && this.state.civil_status.trim()!=""
            && this.state.contact.trim()!="" && this.state.email.trim()!="" && this.state.address.trim()!="" && this.state.birthday.trim()!=""){
                if(!this.state.email.includes("@") || !this.state.email.includes(".com")){
                    alert("Please input a valid email!");
                    return
                }
                
            UserService.createUser(user).then(res => {    
             this.props.history.push('/users')
             });
     
        }else{
            alert("Please complete the registration fields!");
        }
        } else {
           
            if(this.state.firstName.trim()!="" && this.state.lastName.trim()!="" && this.state.gender.trim()!="" && this.state.civil_status.trim()!=""
            && this.state.contact.trim()!="" && this.state.email.trim()!="" && this.state.address.trim()!="" && this.state.birthday.trim()!=""){
            // for update
            if (window.confirm("Do you want to update this information?")) {
                UserService.
            updateUser(user, this.state.id).then(res => {
                this.props.history.push('/users');
            });
            }
        }else{
            alert("Please complete User information!");
        }
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeMiddleNameHandler = (event) => {
        this.setState({ middleName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }


    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }
    changeCivilStatusHandler = (event) => {
        this.setState({ civil_status: event.target.value });
    }
    changeBirthdayHandler = (event) => {
        this.setState({ birthday: event.target.value });
    }

    changeContactHandler = (event) => {
        this.setState({ contact: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    cancel() {
        this.props.history.push('/users');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add User</h3>
        } else {
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
        <div className="container">
           <div className="row">
             <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
            <div className="form-group">
              <label> First Name: </label>
                <input placeholder="First Name" 
                  name="firstName" className="form-control"
                    value={this.state.firstName} 
                      onChange={this.changeFirstNameHandler} />
                          </div>
            <div className="form-group">
              <label> Middle Name: </label>
                <input placeholder="Middle Name" 
                   name="middleName" className="form-control"
                     value={this.state.middleName} 
                      onChange={this.changeMiddleNameHandler} />
                                    </div>
            <div className="form-group">
              <label> Last Name: </label>
                <input placeholder="Last Name" 
                   name="lastName" className="form-control"
                     value={this.state.lastName} 
                      onChange={this.changeLastNameHandler} />
                                    </div>
            <div className="form-group">
                <label> Email : </label>
                    <input placeholder="Email Address" 
                       name="email" className="form-control"
                        value={this.state.email} 
                         onChange={this.changeEmailHandler} />
                                    </div>
            <div className="form-group">
                <label> Gender : </label>
                  <select className="form-control" name="gender"   value={this.state.gender} 
                      onChange={this.changeGenderHandler}>
                    <option defaultValue={""} hidden={true} >Please select gender...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                                    </div>
                                    <div className="form-group">
                <label> Civil Status : </label>
                  <select className="form-control" name="civil_status"   value={this.state.civil_status} 
                      onChange={this.changeCivilStatusHandler}>
                    <option defaultValue={""}  hidden={true} >Please select your status...</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Separated">Separated</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                                    </div>

            <div className="form-group">
            <label> Birthday : </label>
                <input className="form-control" placeholder="Birthday" type="date" name="birthday"   value={this.state.birthday} 
                      onChange={this.changeBirthdayHandler}/>
                </div>

                <div className="form-group">
            <label> Contact no. : </label>
                <input className="form-control" placeholder="Contact number(s)" type="text" name="contact"   value={this.state.contact} 
                      onChange={this.changeContactHandler}/>
                </div>

            <div className="form-group">
            <label> Address : </label>
                <input className="form-control" placeholder="Address" type="text" name="address"   value={this.state.address} 
                      onChange={this.changeAddressHandler}/>
                </div>

                
            
                                    

             <button className="btn btn-success" 
                  onClick={this.saveOrUpdateUser}>Save
                    </button>
             <button className="btn btn-danger" 
                  onClick={this.cancel.bind(this)} 
                     style={{ marginLeft: "10px" }}>Cancel
                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateUserComponent