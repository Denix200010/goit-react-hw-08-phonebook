import style from './PhonebookList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Button } from '@chakra-ui/react';

export const PhonebookList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getSearchContact = () => {
    if (filter === '') return contacts;
    const normalizedSearchContacts = filter.toLowerCase();
    if (contacts.length > 0) {
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedSearchContacts));
    }
    return contacts;
  }

  const actuallyContacts = getSearchContact();
    return <div>
        <ul>
          {actuallyContacts && actuallyContacts.map((item, index) => {
            return (<li className={style.list} key={index}>
              <p>{item.name}: {item.number}</p>
              <Button type="button" onClick={() => dispatch(deleteContact(item.id))}>delete</Button>
            </li>)
          })}
        </ul>
      </div>
}