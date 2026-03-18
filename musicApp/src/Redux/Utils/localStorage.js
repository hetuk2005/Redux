const saveData = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

const loadData = (key) => {
  return localStorage.getItem(key);
};

const removeData = (key) => {
  return localStorage.removeItem(key);
};

export { saveData, loadData, removeData };
