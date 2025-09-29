import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import React, {useState} from 'react';
import Logo from './components/Logo'



export default function App() {
  const [fullname, setFullname]= useState("Sarah");
  const [fname, setFname] = useState("Joe");
  const [lname, setLname] = useState("Bloggs");
  const [dob, setDob] = useState("22 August 1990");

  function buttonClicked() {
    alert("Hello"+ fname + lname+ ". Your Date of birth is" + dob); 
}
  return (
    <View>
      <Logo/>
    
       <Text>Hello {fname} {lname}. You were born on {dob}</Text>
       <TextInput placeholder="Enter your firstname" onChangeText={setFname}/>
       <TextInput placeholder="Enter your lastname" onChangeText={setLname}/>
       <TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>
       <Button title="SUBMIT" onPress={buttonClicked}/>

    </View>
  )
};



