import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { FilterInput } from "components/FilterForm/FilterInput";
import { PhonebookList } from "components/PhonebookList/PhonebookList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getContacts, selectError, selectIsLoading } from "redux/selectors";
import style from '../components/app.module.css';
import { Heading } from '@chakra-ui/react'

export const Contacts = () => {
  const contacts = useSelector(getContacts); 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return <div className={style.container}>
    <Heading>Phonebook</Heading>
    <ContactsForm />
    <FilterInput/>
    <Heading as='h3' size='lg'>Contacts</Heading>
    {isLoading && !error && <b>Request in progress...</b>}
    {contacts.length > 0 && <PhonebookList/>}
  </div>
};