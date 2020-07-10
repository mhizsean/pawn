import React, { Component } from 'react';
import {colors} from "../colors";
import axios from "axios";
import Loader from "./utils/loader";
import {withRouter} from 'react-router';
import Swal from "sweetalert2";

// axios.post("http://127.0.0.1:8000/api/application",formData,

class AllInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading:false
        }
    }

    submit = e => {

        e.preventDefault();
        this.setState({loading:true});

        let formData = new FormData();
        const data=this.props.preview;
        Object.keys(data).forEach(function(key){
            formData.append(key,data[key]);
        });
        axios.post("http://admin.knarlee.com/api/application",formData,
            {headers: {
                    'Content-Type': 'multipart/form-data'}}
            )
            .then(res=>{
                Swal.fire({
                    title: 'Application Successful!',
                    text: 'Your application has been been submitted successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                });
                this.props.history.push("/")
            }).catch(err=> {
            if(err.response===undefined)
            {
                Swal.fire({
                    title: 'Error!',
                    text: "Could not connect to the internet",
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
                return;
            }
            const data = err.response.data;
            if(typeof data.errors === "object")
            {
                let error = "The following error occurred";
                Object.keys(data.errors).forEach(function(key){
                   error += " "+data.errors[key][0];
                });
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: data.errors,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                    confirmButtonColor:"orangered"
                });
            }

        });
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render(){
        const { preview } = this.props;
        const {
            firstname,
            lastname,
            age,
            gender,
            street,
            city,
            state,
            zipcode,
            agreement,
            why,
            link,
            security,
            ssn,
            drivingInfractions,
            felony,
            whathappened,
            uscitizen,
            petKnowlegde,
            petStatement,
            education,
            customerService,
            instagram,
            facebook,
            twitter,
            otherSocials,
            license,
            email,
            backgroundCheck
        } = preview;
        return(
            <div className={"all-info"}>
                <Loader loading={this.state.loading}/>
                <div className="row">
                    <h2 className={"mt-4"} style={{ textAlign:"center",marginTop:"10px"}}>Here is the information you entered:</h2>
                    <div className="response">
                        <p className={"question"}>
                            First Name:
                        </p>
                        <p className={"answer"}>
                            {firstname}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Last Name:
                        </p>
                        <p className={"answer"}>
                            {lastname}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Gender
                        </p>
                        <p className={"answer"}>
                            {gender}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Age
                        </p>
                        <p className={"answer"}>
                            {age}
                        </p>
                    </div>

                    <div className="response">
                        <p className={"question"}>
                            Social Security Number
                        </p>
                        <p className={"answer"}>
                            {ssn}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Email Address:
                        </p>
                        <p className={"answer"}>
                            {email}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Twitter Handle:
                        </p>
                        <p className={"answer"}>
                            {twitter}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Instagram Handle
                        </p>
                        <p className={"answer"}>
                            {instagram}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Facebook Handle
                        </p>
                        <p className={"answer"}>
                            {facebook}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Address Street
                        </p>
                        <p className={"answer"}>
                            {street}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Address City
                        </p>
                        <p className={"answer"}>
                            {city}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Address State
                        </p>
                        <p className={"answer"}>
                            {state}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Address Zipcode
                        </p>
                        <p className={"answer"}>
                            {zipcode}
                        </p>
                    </div>

                    <div className="response">
                        <p className={"question"}>
                            More than 3 driving infractions in the last 3 years
                        </p>
                        <p className={"answer"}>
                            {drivingInfractions}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Level of education
                        </p>
                        <p className={"answer"}>
                            {education}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Have you ever been convicted of felony?
                        </p>
                        <p className={"answer"}>
                            {felony}
                            {
                                felony==="Yes"?` (${whathappened})`:""
                            }
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Would you be willing to get the proper licensing and or insurance
                        </p>
                        <p className={"answer"}>
                            {license}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Pets and animals are our friends and should always be treated with respect, care and love.
                        </p>
                        <p className={"answer"}>
                            {petStatement}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Would you be willing to take a background check for this job/role
                        </p>
                        <p className={"answer"}>
                            {security} {security==="Yes"?`${link}`:""}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                           Video of Your Self
                        </p>
                        <p className={"answer"}>
                           {backgroundCheck}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Are you currently a citizen of the United states or have a ALIEN (green card)
                        </p>
                        <p className={"answer"}>
                            {uscitizen}
                        </p>
                    </div>
                    <div className="response">
                        <p className={"question"}>
                            Why you would be ideal for this job
                        </p>
                        <p className={"answer"}>
                            {why}
                        </p>
                    </div>

                    <div className="form-action mt-4">
                        <div className="form-buttons">
                            <button className="btn btn-plain" onClick={this.back} style={{backgroundColor: colors.orangeRed}}>
                                « Previous
                            </button>
                            <button className="btn btn-primary" onClick={(event)=>this.submit(event)} style={{backgroundColor: colors.orangeRed}}>
                                Continue »
                            </button>

                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default withRouter(AllInfo);
