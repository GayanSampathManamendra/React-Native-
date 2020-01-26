import React , {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [students,setStudent]=useState([
    {name:'Gayan' , id:'1'},
    {name:'Sampath', id:'2'},
    {name:'Tharindu', id:'3'},
    {name:'Sameera' , id:'4'},
    {name:'Kumara' , id:'5'},
    {name:'Deneesh', id:'6'},
    {name:'Deneesh', id:'7'},
    {name:'Deneesh', id:'8'},
    {name:'Deneesh', id:'9'},
    {name:'Deneesh', id:'10'},
    {name:'Deneesh', id:'11'},
    {name:'Deneesh', id:'12'}
  ]);

  const [clickedStudent,setStudentId]=useState({id:null, name:null});

  const Clicked = (id, name) =>{
    setStudentId({id:id,name:name});
  }

  return (

    <View style={styles.container}>
      
      <View style={styles.headerBar}>
          <Text style={styles.headerTitle}>List and ScollView</Text>
      </View>
      
      {/*
        Thre are two ways to list down an array of data
          1. using scrollView and iterate the data list
          2. using FlatList - the advantages of using flatList is 
                                  1. less code size and
                                  2. Better performens than iterating the list.(all the items 
                                     in an array dosn't render the fist time . when scroll down more 
                                     items are load unlike first way )
                                  3. FlatList wants identifier for each and every items.
        
      */ }

      <View style={styles.selectStudent}>
          <Text>Selected Student : {clickedStudent.id} - {clickedStudent.name}</Text>
      </View>

      <ScrollView>
          {/*students.map(std =>{
            return (
              <View key={std.id}>
                <View style={styles.student}>
                   <Text>Student ID: {std.id}----- Student Name : {std.name}</Text>
                </View>
              </View>
            )
          })*/}
      </ScrollView>

      <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={students}
          renderItem={({item})=>(

            <TouchableOpacity onPress={()=> Clicked(item.id, item.name)}>
                <Text style={styles.student}>{item.name} </Text>
            </TouchableOpacity>
          )}
      />
      
          
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //  alignItems: 'center',
  //  justifyContent: 'center',
    marginTop:22
  },

  headerBar:{
    backgroundColor:'#4ab0f3',
    padding:20
  },

  headerTitle:{
    fontSize:24,
    paddingLeft:36
  },

  student:{
    fontSize:16,
    padding:10,
    backgroundColor:'#4ab0f3',
    marginTop:12,
    marginLeft:5,
    marginRight:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    paddingHorizontal:16
    
  },
  selectStudent:{
    marginTop:10,
    marginLeft:5
  }
  
});
