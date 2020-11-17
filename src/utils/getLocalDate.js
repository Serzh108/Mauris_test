const getLocalDate = date => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('ru-RU', options).slice(0, -3);
};

export default getLocalDate;
