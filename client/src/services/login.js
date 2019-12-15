import entry from "./entrypoints";

const service = `${entry}users/?correo=`;

const confingService = {
  // method: 'GET',
  // mode: 'no-cors',
  // headers: { 'Content-Type': 'application/json' },
};

const callToLogin = (mail) => {
  return new Promise((resolve, reject) => {
    fetch(`${service}${mail}`, confingService)
      .then((data) => {
        resolve(data.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default callToLogin;
