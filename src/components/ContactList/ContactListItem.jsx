import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { deleteContact } from 'redux/contacts/Operation';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={css.listElements}>
      <span>
        {name}: {number}
      </span>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
