import React, { Component } from "react";
import items from "./data";


const FaqContext = React.createContext();


export default class FaqProvider extends Component {
    state = {
      driverQuestion: [],
      driverAnswer: [],
      customerQuestion: [],
      customerAnswer:[],
      loading: true,
    };
  
    
  
    componentDidMount() {
      // this.getData();
      let faqs = this.formatData(items);
      let customerQuestion = customerQuestion.filter(customer => customer.question);
      let customerAnswer = faqs.filter(faq => faq.customer);
      let driverQuestion = faqs.filter(faq => faq.driver);
      let driverAnswer = faqs.filter(faq => faq.driver);

      //
      this.setState({
        driverQuestion: driverQuestion,
        driverAnswer:driverAnswer,
        customerQuestion:customerQuestion,
        customerAnswer:customerAnswer,
        loading: false,
      });
      console.log(faqs);
    }

    formatData(items) {
      let tempItems = items.map(item => {
        let customerQuestion = item.customer.map(customer => customer.question);
        let customerAnswer = item.customer.map(customer => customer.answer);
        let driverQuestion = item.driver.map(driver => driver.question);
        let driverAnswer = item.driver.map(driver => driver.answer);

        let faq = { customerQuestion, customerAnswer,driverQuestion,driverAnswer   };
        return faq;
      });
      return tempItems;
    }
    render() {
      return (
        <FaqContext.Provider
          value={{
            ...this.state,
            getRoom: this.getRoom,
            handleChange: this.handleChange
          }}
        >
          {this.props.children}
        </FaqContext.Provider>
      );
    }
  }
  const FaqConsumer = FaqContext.Consumer;

export { FaqProvider, FaqConsumer, FaqContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <FaqConsumer>
        {value => <Component {...props} context={value} />}
      </FaqConsumer>
    );
  };
}
    
