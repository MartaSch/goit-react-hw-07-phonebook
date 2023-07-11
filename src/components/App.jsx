import ContactForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/ContactsSelector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/Operation';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      {isLoading && !error && <p>Request in progress...</p>}
      <Filter />
      <ContactList key={nanoid()} />
    </div>
  );
}
