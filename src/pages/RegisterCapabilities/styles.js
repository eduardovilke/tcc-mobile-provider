import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: '#f7f9fa',
    flex: 1
  },
  header: {
    marginTop: 60,
    marginLeft: 25
    },
  title: {
    marginTop: 13,
    fontSize: 25,
    color: '#4b5c6b'
  },
  headerIcon: {
    marginLeft: -6
  },
  footer: {
    paddingTop: 60,
    paddingBottom: 10,
    alignItems: 'flex-end',
    marginRight: 30
  },
  checkList: {
    paddingTop: 20,
    marginLeft: 10
  },
  check: {
    paddingTop: 50
  },
  txtCheck: {
    paddingLeft: 10
  },
  btnContinuar: {
    backgroundColor: '#4fb4c8',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 40,
    marginBottom: 40
  },
  txtContinuar: {
    color: 'white',
    fontWeight: 'bold'
  }
});