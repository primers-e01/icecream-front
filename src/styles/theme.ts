const colors = {
  mainBrandBlack: '#222222',
  mainBrandGray05: 'rgba(34,34,34,0.5)',
  mainBrandGray08: 'rgba(34,34,34,0.8)',
  buttonActive: '#222222',
  buttonDisabled: '#ebebeb',
  buttonSell: '#41b979',
  buttonBuy: '#ef6253',
};

const styles = {
  globalBoardStyle: '1px solid #ebebeb',
  globalBoxShadow: '0 2px 6px rgb(0 0 0 / 12%)',
};

const levels = {
  nav: 100,
  alertModal: 110,
  buySellTitle: 101,
};

const theme = { ...colors, ...levels, ...styles };

export default theme;
