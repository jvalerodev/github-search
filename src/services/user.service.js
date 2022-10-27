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
      const { data } = await octokit.request(`GET /users/${id}`);

      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getRepositories: async (id) => {
    try {
      const { data } = await octokit.request(`GET /users/${id}/repos`, {
        sort: 'created'
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getOrganizations: async (id) => {
    try {
      const { data } = await octokit.request(`GET /users/${id}/orgs`);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}