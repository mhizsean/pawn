import React, { Component } from 'react';
import FirstName from './FirstName';
import LastName from './LastName';
import AllInfo from './AllInfo';
import Age from './Age';
import Nav from '.././Nav';
import Gender from './Gender';
import Address from './Address';
import Agreement from './Agreement';
import Why from './why';
import Security from './Security';
import SecurityNo from './SecurityNo'
import DrivingInfractions from './DrivingInfractions'
import Felony from './Felony'
import Uscitizen from './Uscitizen'
import PetKnowledge from './PetKnowledge'
import PetBelief from './PetBelief'
import Education from './Education'
import CustomerService from './CustomerService'
import Licence from './Licence'
import Socials from './Socials'
import BackgroundCheck from './BackgroundCheck'
import {withRouter} from "react-router";
import Loader from "./utils/loader";


export class MainForm extends Component {
    state = {
        step: 1,

        // step 1
        firstname: '',
        // email: '',

        // step 2
        lastname: '',
        jobCompany: '',
        jobLocation: '',

        //step 3
        age:'',

        //step 4
        gender: '',

        // step 5
        street: '',
        city: '',
        state:'',
        zipcode:'',

        // step 5
        agreement:'',

        // step 6
        why:'',

        // step 7
        security:'',
        link: '',

        // step 8
        ssn: '',
        //step 9

        drivingInfraction:'',

        //step 10
        felony: '',
        whathappened: '',
        //step 11
        uscitizen: '',
        // step 12
        petknowlegde:'',
        //step 13
        petStatement:'',
        // step 14
        education: '',
        //step 15
        customerService:'',
        // step 16
        license : '',
        //step 17
        instagram:'',
        facebook: '',
        twitter: '',
        otherSocials: '',
        email: '',

        file: '',
        loading:false
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };



    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    fileChange = input => e => {
        this.setState({[input]: e.target.files[0]});
    };

    showStep = () => {
        const {
            step,
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
            drivingInfraction,
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
            file } = this.state;

        if(step === 1)
            return (<FirstName
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                firstname={firstname}
            />);
        if(step === 2)
            return (<LastName
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                lastname={lastname}
            />);

        if(step === 3)
            return (<Age
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                age={age}


            />);
        if(step === 4)
            return (<Gender
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                gender={gender}
            />);
        if(step === 5)
            return (<Address
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                street={street}
                city={city}
                state={state}
                zipcode={zipcode}
            />);
            if(step === 6)
            return (<Agreement
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                agreement={agreement}
            />);

            if(step === 7)
            return (<Why
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                why={why}
            />);
             if(step === 8)
            return (<Security
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                link={link}
                security={security}

            />);
            if(step === 9)
            return (<SecurityNo
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                ssn={ssn}
            />);
            if(step === 10)
            return (<DrivingInfractions
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                drivingInfraction={drivingInfraction}
            />);
            if(step === 11)
            return (<Felony
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                felony={felony}
                whathappened={whathappened}

            />);
             if(step === 12)
            return (<Uscitizen
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                uscitizen={uscitizen}

            />);
            if(step === 13)
            return (<PetKnowledge
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                petKnowlegde={petKnowlegde}

            />);
             if(step === 14)
            return (<PetBelief
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                PetStatement={petStatement}

            />);
            if(step === 15)
            return (<Education
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                education={education}

            />);
            if(step === 16)
            return (<CustomerService
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                customerService={customerService}

            />);
            if(step===17)
              return (<Licence
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                license={license}
              />);
              if(step===18)
              return (<Socials
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                instagram={instagram}
                facebook={facebook}
                twitter={twitter}
                otherSocials={otherSocials}
                email={email}
              />);
              if(step===19)
              return (<BackgroundCheck
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleFileChange={this.fileChange}
                file={file}
              />);

        if(step === 20)
            return (<AllInfo
                preview={this.state}
                prevStep = {this.prevStep}
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}

            />);
    };



    render(){
        const { step } = this.state;

        return(
            <>
                <Nav/>
                <div className="form-global-class">

                    {this.showStep()}
                </div>
            </>
        );
    }
}

export default withRouter(MainForm);
