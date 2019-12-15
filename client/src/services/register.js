import entry from './entrypoints';

const service = `${entry}users/`;

const Register = (data) => {
  const configFetch = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    fetch(service, configFetch)
      .then((data) => {
        const { status } = data;
        if (status === 201) resolve(data.json());
        rejectd(data);
      })
      .catch((err) => reject(err));
  });
};

export default Register;
