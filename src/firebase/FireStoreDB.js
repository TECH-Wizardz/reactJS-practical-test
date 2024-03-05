import { collection, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export const createUser = async (name, email) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      email,
    });
    console.log("User created with ID: ", docRef.id);
    return docRef.id; // Return the newly created user's ID
  } catch (e) {
    console.error("Error creating user: ", e);
    throw e; // Re-throw the error for proper handling in React components
  }
};

export const createPhoneNumber = async (user, name, number) => {
  try {
    const docRef = await addDoc(collection(db, "phone"), {
      user,
      name,
      number,
    });
    console.log("phone created with ID: ", docRef.id);
    return docRef.id; // Return the newly created user's ID
  } catch (e) {
    console.error("Error creating user: ", e);
    throw e; // Re-throw the error for proper handling in React components
  }
};

export const createHobby = async (habbit) => {
  try {
    const docRef = await addDoc(collection(db, "hobby"), {
      habbit,
    });
    console.log("phone created with ID: ", docRef.id);
    return docRef.id; // Return the newly created user's ID
  } catch (e) {
    console.error("Error creating hobby: ", e);
    throw e; // Re-throw the error for proper handling in React components
  }
};
