import { doc,collection, getDocs, setDoc, deleteDoc} from 'firebase/firestore'
import { db } from './Firebase'
// import { date } from './components/Date/Date'
// const productsref= doc(db, "", "SF");

export const getDetails=async()=>{
    // console.log("called");
    // const ref=await doc(db,"ProductDetails","1");
    // const dref=await getDoc(ref);
//     console.log(dref.data());
//    console.log(Math.floor(Math.random() * (1000)))
let d2=[];
const querySnapshot = await getDocs(collection(db, "ProductDetails"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
 
  const d1={id:doc.id,...doc.data()};
//   const d2={"id":doc.id,}
// console.log(d1);
d2.push(d1);   
//   return d1;
//   console.log(doc.id, " => ", doc.data());
}
);
// console.log(d2);
return d2;

}
export const insertProduct=async(data)=>{
        const id=String(Math.floor(Math.random() * (1000)));
        // await setDoc(doc(db,"Attendance",ele),{});
        // const ref=await doc(db,"Attendance",date);
        console.log(id);
        try{

            await setDoc(doc(db, "ProductDetails", id), data);
        }
      catch (error) {
        console.log("Error adding document with custom ID: ", error);
      }
    // while(true){
        //     console.log(id);
    //     const ref=await doc(db,"ProductDetails",id);
    //     const snap=await getDoc(ref);
    //     // await updateDoc(ref,data);
    //     if(snap.exists()){
    //         // await db.collection("ProductDetails").doc(id).set(data);
    //         console.log("donewdwe");
    //         break;
    //     }
    //     else {
    //         console.log("notavailble");
    //     }

    // }
}
export const editProduct=async(data)=>{
    await setDoc(doc(db, "ProductDetails", data["id"]), data);
    console.log("done editing");
}
export const deleteProduct=async(id)=>{
    await deleteDoc(doc(db, "ProductDetails", id));
}