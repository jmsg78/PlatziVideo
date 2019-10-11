import MD5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';

  const formattedEmail = (email).trim().toLowerCase();
  const hash = MD5(formattedEmail, { encoding: "binary"});

  return `${base}${hash}`;
}

export default gravatar;
