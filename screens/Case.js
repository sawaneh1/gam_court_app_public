import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native'
import Footer from '../components/Footer'
import img from '../assets/image/docs.png'
const DATA = [
    {
      id: 1,
      title: "exibite 102",
      image:img,
      day: 4,
    },
    {
        id: 2,
        title: "evidence 830",
        image:img,
    
      },
      {
        id: 3,
        title: "exibite 204", 
        image:img,
     
      },
   
      {
        id: 4,
        title: "witness statement",
        image:img,
    
      },
  ];
const Case = () => {
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding:20, marginTop:20}}>
         <View >
           <Text style={{ marginVertical:3}} >Case Between</Text>
           <Text style={{ fontSize:18, fontWeight:'bold',  color:'#111827'}}>Lamin and Buba</Text>
           </View>
           <View>
               <TouchableOpacity style={styles.card}>
                   <Text style={{ fontSize:18, fontWeight:'bold', color:'#ccc', textAlign:'center'}}>
                       15
                   </Text>
                   <Text style={{ fontSize:18, fontWeight:'bold', textAlign:'center',  color:'#ccc'}} >
                       Jan
                   </Text>

               </TouchableOpacity>
           </View>
         
           </View>
           <View style={{  padding:10,}}>
               <Text style={styles.text}>The court decides on constitutional issues and on appeals from the Gambia Court of Appeal. The Court is composed of 5 judges including the chief justice.</Text>
               <Text style={styles.text}> The court decides on constitutional issues and on appeals from the Gambia Court of Appeal. The Court is composed of 5 judges including the chief justice. </Text>

               <Text style={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, magni!</Text>

               <Text style={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, magni!</Text>

           </View>
           <View style={{flexDirection:'row', justifyContent:'space-between', padding:10, backgroundColor:'#111827', margin:10, borderRadius:10}}>
           <TouchableOpacity style={styles.caseCard}>
               <Text style={styles.textCase}>Case Id</Text>
               <Text style={styles.textCases}>53673773</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.caseCard}>
               <Text style={styles.textCase}> Judge Name</Text>
               <Text style={styles.textCases}> Mariama </Text>

</TouchableOpacity>
<TouchableOpacity style={styles.caseCard}>
               <Text style={styles.textCase}>Clerk Name</Text>
               <Text style={styles.textCases}>Sulayman</Text>

</TouchableOpacity>

           </View>
           <View>
               <View style={{}}>
                   <Text style={{textAlign:'center', fontWeight:'700'}} >Documents</Text>

               </View>
           <FlatList
          horizontal={true}
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.cases}>
                <TouchableOpacity style={styles.case} onPress={() => navigation.navigate("Case")}>
                  <View>
                    <Text style={styles.case_content}>{item.title}</Text>
                  </View>
                  <View>
                    <ImageBackground source={item.image}  resizeMode="cover" style={{  width: '100%', flex: 1,
    // justifyContent: "center",
    height: 100, marginTop:10
   
    }}
     />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
           </View>

            <Footer />
        </View>
    )
}

export default Case

const styles = StyleSheet.create({
card:{
    padding:10,
    backgroundColor:'#111827',
    borderRadius:10,
    width:60,
    // height:65
},
caseCard:{
  
    // backgroundColor:'#111827',
    borderRadius:10,
    width:110,
    // height:60,
    padding:5
},
text:{
  
    textAlign:'center',
    
},
textCase:{
    color: 'white',
    textAlign:'center',

},
textCases:{
    color: 'white',
    textAlign:'center',
    marginTop:10
},
cases:{
    margin:7,
    width: 200,

},

  case: {
    width: 170,
    backgroundColor: "#fff",
    height: 150,
    borderRadius: 10,
    // alignItems: "center",
    // padding: 10,
    marginBottom:10
  },
  case_content: {
    // fontSize: 23,
    marginBottom:20,
    
    fontWeight: "bold",
    textAlign:'center'
  },

})
