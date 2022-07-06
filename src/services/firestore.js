// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore , getDocs, doc, getDoc,collection} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBEYgwypC_9YUMeCOqtnxGxTIhZlk0xAvk",
  authDomain: "coderhouse-react-5027a.firebaseapp.com",
  projectId: "coderhouse-react-5027a",
  storageBucket: "coderhouse-react-5027a.appspot.com",
  messagingSenderId: "841159173690",
  appId: "1:841159173690:web:37b4154dd04e32867ff703"
};


const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore (appFirebase);

export function testDatabase (){
    console.log (appFirestore)
}
export async function traerProductos(){
    const itemCollection = collection(appFirestore , "items");
   const  itemsSnapshot = await getDocs(itemCollection);

   let respuesta = itemsSnapshot.docs.map(doc => {
    return {
        ...doc.data(),
        id: doc.id
    }
})
   return respuesta;

}

export async function traerUnProducto(itemId){
  
    const docref = doc(appFirestore , "items" ,  itemId);
    const docSnapshot = await getDoc(docref);

   
   return {id:docSnapshot.id , ...docSnapshot.data()}}










export default appFirestore;
