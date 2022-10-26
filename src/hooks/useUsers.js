import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserService } from '../services';
import { setUsers, setLoading } from '../features';

const useUsers = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!search) return;

    dispatch(setLoading(true));

    try {
      const { items } = await UserService.getUsers({ q: search });
      dispatch(setUsers(items));
    } catch (error) {
      console.log(error);
    }

    dispatch(setLoading(false));
  };

  return { search, setSearch, handleSubmit };
};

export default useUsers;