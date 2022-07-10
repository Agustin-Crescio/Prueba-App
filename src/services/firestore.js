// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore , getDocs, doc, getDoc,collection, setDoc , addDoc, Timestamp, query , where} from "firebase/firestore"
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
export async function traerProductosDeCategoria(idCategory){

    const itemCollection = collection (appFirestore ,"items" );

    const q = query (itemCollection , where ("category", "==" , idCategory))

    const itemsSnapshot = await getDocs(q); 
    let respuesta = itemsSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
return respuesta


}





export async function traerUnProducto(itemId){
  
    const docref = doc(appFirestore , "items" ,  itemId);
    const docSnapshot = await getDoc(docref);
   return {id:docSnapshot.id , ...docSnapshot.data()}
}



export async function exportDataToFirestore(){
    const productos = [
        {
            id: 1,
            name: "SunXmax",
            price: 200,
            stock: 4,
            img:"./img/lentes1.jpg"  ,
            category: 'gafas1 ',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
        },
        {
            id: 2,
            name: "Infinity-8",
            price: 222,
            stock: 10,
            img:"./img/lentes2.jpg" ,
            category: 'gafas1',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
        },
        {
            id: 3,
            name: "Tiffany-Co",
            price: 300,
            stock: 4,
            img:"./img/lentes3.jpg"  ,
            category: 'gafas3',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
        },
        {
            id: 4,
            name: "Ray-Ban",
            price: 333,
            stock: 4,
            img: "./img/lentes4.jpg" ,
            category: 'gafas2',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
        },
    
        {
            id: 5,
            name: "Oakley",
            price: 800,
            stock: 20,
            img: "./img/lentes5.jpg" ,
            category: "gafas2",
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
        },
        {
            id: 6,
            name: "Carrera",
            price: 88,
            stock: 5,
            img: "./img/lentes6.jpg" ,
            category: "gafas3",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatu ",
            },
        ];
        productos.forEach(item =>{
            const itemCollection = collection (appFirestore , "items");
           
        
            const newDoc = doc(itemCollection);
            setDoc(newDoc, item).then(res => {
                console.log("Documento Guardado:" , newDoc.id)
            })
            .catch((error => console.log ("error obteniendo los datos: " , error) )
            )
        })
     


}


export async function createBuyOrder(dataOrder){
   const orderCollectionRef =  collection(appFirestore , "orders ");
   const dateTimestamp= Timestamp.now();
   const dataOrderWithDate = { 
    buyer: dataOrder.buyer,
    items: dataOrder.items,
    total: dataOrder.total,
    date: dateTimestamp,
   };
   const orderCreated = await addDoc(orderCollectionRef , dataOrderWithDate);
   console.log ("added:", orderCreated.id);
   return orderCreated;
}



export default appFirestore;
