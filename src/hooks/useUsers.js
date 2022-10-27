import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserService } from '../services';
import { setUsers, setCount, setLoading } from '../features';

const useUsers = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState(null);
  const [organizations, setOrganizations] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!search) return;

    dispatch(setLoading(true));

    try {
      const { items, total_count } = await UserService.getUsers({ q: search });

      dispatch(setUsers(items));
      dispatch(setCount(total_count));
    } catch (error) {
      console.log(error);
    }

    dispatch(setLoading(false));
  };

  const getUser = async id => {
    dispatch(setLoading(true));

    try {
      const data = await UserService.getUser(id);
      setUser(data);
    } catch (error) {
      console.log(error);
    }

    dispatch(setLoading(false));
  };

  const getRepositories = async id => {
    dispatch(setLoading(true));

    try {
      const data = await UserService.getRepositories(id);
      setRepositories(data);
    } catch (error) {
      console.log(error);
    }

    dispatch(setLoading(false));
  };

  const getOrganizations = async id => {
    dispatch(setLoading(true));

    try {
      const data = await UserService.getOrganizations(id);
      setOrganizations(data);
    } catch (error) {
      console.log(error);
    }

    dispatch(setLoading(false));
  };

  return { search, setSearch, handleSubmit, user, getUser, repositories, getRepositories, organizations, getOrganizations };
};

export default useUsers;