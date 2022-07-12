import { ProductData, Promocode } from "../stores/useCart";
import { DocumentData, OrderByDirection } from "firebase/firestore";
import { SortQuery } from "../stores/useFilter";

const fromFirestore = (doc: DocumentData): ProductData => {
  return {
    name: doc.name.toUpperCase(),
    price: doc.price,
    size: "UK6",
    image: getFromImageKit(doc.image),
    brand: doc.brand.toUpperCase(),
    salePrice: 0,
  };
};
const fromFirestoreCodes = (doc: DocumentData): Promocode => {
  return {
    val: doc.name,
    discount: doc.discount,
  };
};

export const fromURLToQueryStr = (url: string): SortQuery => {
  const arr = url.split("-");
  return {
    type: "orderBy",
    sortBy: arr[0],
    order: arr[1] as OrderByDirection,
  }
};

const IMAGE_KIT_URL = "https://ik.imagekit.io/sjsedov4q/";
const FIREBASE_STORAGE_BASE_URL =
  "https://firebasestorage.googleapis.com/v0/b/moonwalkstore-2d103.appspot.com";
const getFromImageKit = (firebaseImage: string): string => {
  return (
    firebaseImage.replace(FIREBASE_STORAGE_BASE_URL, IMAGE_KIT_URL) +
    "&tr-w-200,h-200"
  );
};

export { fromFirestore, fromFirestoreCodes };
