import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserService } from '../services/user.service';

const User = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      if (id) {
        const data = await UserService.getUser(id);
        return data;
      }

      setUser(getUser());
    };
  }, []);

  return (
    <div>User</div>
  );
};

export default User;