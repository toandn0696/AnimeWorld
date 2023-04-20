import {ReactElement, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Drawables} from '../asset/images';
import Colors from '../theme/Colors';
import {useTheme} from '@react-navigation/native';

export type DataDropDown = {
  label: String;
  value: string;
};
type Props = {
  PlaceHolder: string;
  data: Array<DataDropDown>;
  onSelect: (item: DataDropDown) => void;
  containerStyles?: ViewStyle;
};
const DropDown = (props: Props) => {
  const DropdownButton = useRef<any>();
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [selected, setSelected] = useState<DataDropDown>();
  const [isSelected, setIsSelected] = useState(false);
  const {colors} = useTheme();

  function toggleDropdown() {
    visible ? setVisible(false) : openDropdown();
  }

  function openDropdown() {
    DropdownButton.current.measure(
      (_fx: any, _fy: any, _w: any, h: any, _px: any, py: any) => {
        setDropdownTop(py + h);
      },
    );
    setVisible(true);
  }

  function onItemPress(item: any) {
    setIsSelected(true);
    setSelected(item);
    props.onSelect(item);
    setVisible(false);
  }

  function renderItem({item}: any): ReactElement<any, any> {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text style={{color: 'black'}}>{item.label}</Text>
      </TouchableOpacity>
    );
  }

  function renderDropDown() {
    return (
      <Modal
        style={{
          width: Dimensions.get('screen').width / 1.2,
          height: Dimensions.get('screen').height / 15,
        }}
        visible={visible}
        transparent
        animationType="none">
        <TouchableOpacity style={styles.overlay} onPress={toggleDropdown}>
          <View
            style={[
              styles.dropdownStyles,
              {top: dropdownTop, backgroundColor: colors.background},
            ]}>
            <FlatList
              style={styles.containerItem}
              data={props.data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  return (
    <Pressable
      ref={DropdownButton}
      style={[styles.button, props.containerStyles]}
      onPress={() => {
        toggleDropdown();
      }}>
      {renderDropDown()}
      <Text style={[styles.buttonText, {color: isSelected ? 'black' : 'gray'}]}>
        {(selected && selected.label) || props.PlaceHolder}
      </Text>
      <Image
        style={[
          {tintColor: isSelected ? 'black' : 'gray'},
          styles.iconDropDown,
        ]}
        source={Drawables.ic_drop_down}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('screen').width / 1.2,
    height: Dimensions.get('screen').height / 15,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    borderColor: Colors.colorBorder,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: Colors.colorBgBlurtextInput,
  },
  buttonText: {
    flex: 1,
    marginStart: 10,
  },
  iconDropDown: {
    width: 15,
    height: 15,
    marginEnd: 15,
  },
  dropdownStyles: {
    position: 'absolute',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  containerItem: {
    width: Dimensions.get('screen').width / 1.2,
    alignSelf: 'center',
    borderColor: Colors.colorBorder,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: Colors.colorBgBlurtextInput,
    marginTop: 10,
  },
});
export default DropDown;
