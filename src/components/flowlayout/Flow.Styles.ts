import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

export const FlowStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginHorizontal: '3%',
    marginBottom: '4%',
    alignSelf: 'stretch',
    flexGrow: 1,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 25,
    alignContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: Colors.colorPrimary,
    borderColor: Colors.colorPrimary,
  },
  unselected: {
    borderColor: Colors.colorPrimary,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  unSelectedLabel: {
    color: Colors.colorPrimary,
  },
});
