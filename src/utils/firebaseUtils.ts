import { ProductData, Promocode } from '../stores/useCart';
import { DocumentData } from "firebase/firestore";

const fromFirestore = (doc: DocumentData) => {
    return {
        name: (doc.name).toUpperCase(),
        price: doc.price,
        size: "UK6",
        image: getFromImageKit(doc.image),
        brand: (doc.brand).toUpperCase(),
    } as ProductData;
};
const fromFirestoreCodes = (doc: DocumentData) => {
    return {
        val: doc.name,
        discount: doc.discount,
    } as Promocode;
};

const IMAGE_KIT_URL = "https://ik.imagekit.io/sjsedov4q/"
const FIREBASE_STORAGE_BASE_URL = "https://firebasestorage.googleapis.com/v0/b/moonwalkstore-2d103.appspot.com"
const getFromImageKit = (firebaseImage: string) => {
    return firebaseImage.replace(FIREBASE_STORAGE_BASE_URL, IMAGE_KIT_URL) + "&tr-w-200,h-200";
}


export {
    fromFirestore,
    fromFirestoreCodes
}