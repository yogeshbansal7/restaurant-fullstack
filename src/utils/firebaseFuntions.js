import { setDoc, doc, getDocs, collection, orderBy, query } from "firebase/firestore"
import { firestore } from "../firebase.config"

//saving new item
export const saveItem = async (data) => {
    await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, {merge:true});
}

export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    )
    return items.docs.map((doc) => doc.data())
}