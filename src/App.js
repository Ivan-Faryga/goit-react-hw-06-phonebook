import { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./Components/ContactList/ContactList";
import "./App.css";
import Filter from "./Filter/Filter";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // забираем данные из локал-сторадж при маунте компонента
  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    setContacts(parsedContacts ? parsedContacts : initialState);
  }, []);

  // добавляем данные из локал-сторадж при апдейте компонента
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (object) => {
    const { name, number } = object;
    if (contacts.map((contact) => contact.name).includes(name.trim()))
      return alert(`"${name.trim()}" is already in contacts`);
    if (contacts.map((contact) => contact.number).includes(number.trim()))
      return alert(`"${number.trim()}" is already in contacts`);

    const newObject = {
      id: uuidv4(),
      name,
      number,
    };
    setContacts([...contacts, newObject]);
  };

  const handleInputFilter = () => {
    const filterToLowerCase = filter.toLocaleLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().trim().includes(filterToLowerCase)
    );
  };

  const handleInputChange = (evt) => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = (contactId) => {
    setContacts([...contacts.filter((contact) => contact.id !== contactId)]);
  };

  return (
    <div className="App">
      <div className="InputWrapper">
        <h1 className="inputTitle">Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
        <br />
        <Filter value={filter} onChange={handleInputChange} />
      </div>
      <div className="contactsSection">
        <h2 className="contactsSectionTitle">Contacts</h2>
        <ContactList contacts={handleInputFilter()} onDelete={deleteContact} />
      </div>
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

// componentDidMount() {
//   const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
//   //====// const contacts = localStorage.getItem("contacts");
//   //====// const parsedContacts = JSON.parse(contacts);
//   //====// this.setState({ contacts: parsedContacts });

//   //====// if (parsedContacts !== null) {
//   //====//   this.setState({ contacts: parsedContacts });
//   //====// }

//   this.setState({ contacts: parsedContacts ?? initialState }); // ??  --- https://learn.javascript.ru/nullish-coalescing-operator
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }

//   render() {
//     return (
//       <div className="App">
//         <div className="InputWrapper">
//           <h1 className="inputTitle">Phonebook</h1>
//           <Form onSubmit={this.formSubmitHandler} />
//           <br />
//           <Filter value={this.state.filter} onChange={this.handleInputChange} />
//         </div>
//         <div className="contactsSection">
//           <h2 className="contactsSectionTitle">Contacts</h2>
//           <ContactList
//             contacts={this.handleInputFilter()}
//             onDelete={this.deleteContact}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
