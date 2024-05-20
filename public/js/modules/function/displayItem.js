export const displayItem = {
  addItem : (item) => {
    item.style.display = 'none';
  },
  removeItem : (item) => {
    item.style.display = 'block';
  },
  flexItem : (item) => {
    item.style.display = 'flex';
  }
}