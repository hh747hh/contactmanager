import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Woo Yun",
        email: "hh747hh@gmail.com",
        phone: "333-333-3333"
      },
      {
        id: 2,
        name: "Sarah Yun",
        email: "sarahoyun@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 3,
        name: "Sam Yun",
        email: "elkjslkj@gmail.com",
        phone: "333-332-1111"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
