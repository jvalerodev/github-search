import octokit from './config/instanceOctokit';

export const UserService = {
  getUsers: async (query) => {
    try {
      const { data } = await octokit.request('GET /search/users', {
        ...query,
        accept: 'application/vnd.github+json'
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getUser: async (id) => {
    try {
      const data = await octokit.request(`GET /users/${id}`);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}