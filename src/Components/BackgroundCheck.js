import React, { Component } from 'react';
import hero from '../images/drive/2.png';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../colors';
import axios from 'axios';
import Swal from "sweetalert2";




class BackgroundCheck extends Component{


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData();
       formData.append('file',this.props.file);
        axios.post("http://127.0.0.1:8000/api/verify_upload",formData,
            {headers: {
                    'Content-Type': 'multipart/form-data'}})
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

        })

        //this.continue(event);
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render(){
        const { file, handleFileChange } = this.props;
        return(
            <>
              <section className="first-section">
                <img className="age-hero"  src={hero} alt="" />
                <div className="full-name"> Please upload a 2 minute video of you</div>
                  <form action="" onSubmit={(e)=>this.handleSubmit(e)} >
                <label>
                  <div className="form-group">
                      <input required={true}
                             accept="video/*"
                          type="file"
                          name="backgroundCheck"
                          onChange={handleFileChange('file')}
                          className="input"
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
                <div style={{textAlign: 'center'}}>62%</div>
                <div id="myProgress">
                    <div id="myBarEighteen"></div>
                </div>
              </section>
            </>
        );
    }
}

export default BackgroundCheck;
