import React, { Component } from 'react';
import hero from '../images/drive/2.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';
import axios from "axios";
import Loader from "./utils/loader";
import Swal from "sweetalert2";



class Socials extends Component{

    constructor(props) {
        super(props);
       this.state = {
           loading:false
       }
    }


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({loading:true})
        axios.post("http://127.0.0.1:8000/api/verify_email",{email:this.props.email})
            .then(res=>{
                this.continue(event);
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
                Swal.fire({
                    title: 'Error!',
                    text: data.errors["email"][0],
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
            this.setState({loading:false})

        });


    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };




    render(){
        const { instagram, facebook, twitter, otherSocials, email, handleChange } = this.props;
        return(
            <>
                <Loader loading={this.state}/>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> And thats it! Just a few other Personal details and we'll have all the info we need. Can we get your</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                  <label>
                    <div className="form-group mt-4">
                        <input
                            required={true}
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Type your email  here"
                            onChange={handleChange('email')}
                            className="form-control"
                        />
                    </div>
                </label>
                <label>
                    <div className="form-group mt-4">
                        <input
                            type="text"
                            name="instagram"
                            value={instagram}
                            placeholder="Type your Instagram Handle here"
                            onChange={handleChange('instagram')}
                            className="form-control"
                        />
                    </div>
                </label>
                <label>
                    <div className="form-group mt-4">
                        <input
                            type="text"
                            name="facebook"
                            value={facebook}
                            placeholder="Type your facebook Handle here"
                            onChange={handleChange('facebook')}
                            className="form-control"
                        />
                    </div>
                </label>
                <label>
                   <div className="form-group mt-4">
                       <input
                           type="text"
                           name="twitter"
                           value={twitter}
                           placeholder="Type your twitter Handle here"
                           onChange={handleChange('twitter')}
                           className="form-control"
                       />
                   </div>
                </label>

                <label>
                   <div className="form-group">
                       <input
                           type="text"
                           name="other"
                           value={otherSocials}
                           placeholder="Type your other Other Socials here"
                           onChange={handleChange('otherSocials')}
                           className="form-control"
                       />
                   </div>
                </label>
                  <div className="form-action">
                      <div className="form-buttons">
                          <button className="btn btn-plain" onClick={this.back} style={{backgroundColor: colors.orangeRed}}>
                              « Previous
                          </button>
                          <button className="btn btn-primary" type={"submit"} style={{backgroundColor: colors.orangeRed}}>
                              Continue »
                          </button>

                      </div>
                  </div>
                  </form>
              </section>
              <section className="progress-report">
                <div style={{textAlign: 'center'}}>60%</div>
                <div id="myProgress">
                    <div id="myBarSeventeen"></div>
                </div>
              </section>
            </>
        );
    }
}

export default Socials;
