import React, { useState } from 'react';
import { Text, TextProps, StyleSheet, TextInputProps, View, TouchableOpacity } from 'react-native';
import Label from '../label/label.component';
import { BottomSheetTextInput } from "@gorhom/bottom-sheet"
import { CommonTheme } from "../../theme/common.theme"
import { CloseEye } from '../../atoms/icons/closeEye';
import { OpenEye } from '../../atoms/icons/openEye';
const color = CommonTheme.color

type LabelProps = TextInputProps & {
  labelText: string;
  placeHolderText: string;
  isPassword?: boolean
};

const TextInput: React.FC<LabelProps> = ({ isPassword, labelText = "User Name", placeHolderText = "email", style, ...props }) => {
  const [seePassword, setSeePassword] = useState(false)
  return (
    <View style={{ width: "100%", marginBottom: 10 }} >
      <Label style={{ textAlign: 'left', marginBottom:12 }} variant={'small'}>
        {labelText}
      </Label>
      {
        !isPassword ? <BottomSheetTextInput {...props} style={styles.input} keyboardType="email-address" autoCapitalize='none' placeholder={placeHolderText} spellCheck={false} autoCorrect={false}  />
          :
          <View style={[styles.input, { flexDirection: 'row', justifyContent:'center', alignItems:'center' }]}>
            <BottomSheetTextInput  {...props} style={[styles.input, {width:"95%"}]} placeholder={placeHolderText} secureTextEntry={!seePassword}  />
            <TouchableOpacity style={{width:"8%"}} onPress={() => setSeePassword(!seePassword)}>
              {
                seePassword == true ? <OpenEye/> : <CloseEye/>
              }
            </TouchableOpacity>
          </View>

      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderRadius: 2,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    height: 44,
    backgroundColor: color.graySuperLight,
  },
});

export default TextInput;