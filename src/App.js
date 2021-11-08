import Form from "./Components/Form/Form";
import ContactList from "./Components/ContactList/ContactList";
import "./App.css";
import Filter from "./Filter/Filter";

export default function App() {
  return (
    <div className="App">
      <div className="InputWrapper">
        <h1 className="inputTitle">Phonebook</h1>
        <Form />
        <br />
        <Filter />
      </div>
      <div className="contactsSection">
        <h2 className="contactsSectionTitle">Contacts</h2>
        <ContactList />
      </div>
    </div>
  );
}
