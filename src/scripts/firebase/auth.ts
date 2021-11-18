// Project files
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { authInstance } from "./firebase";
import getFriendlyError from "scripts/getFriendlyError";

export async function createAccount(email: string, password: string) {
  const account = { isCreated: false, payload: "" };

  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isCreated = true;
    account.payload = userCredential.user.uid;
  } catch (error: any) {
    console.error("auth,js error", error);
    account.payload = error.code;
  }
  return account;
}

export async function signIn(email: string, password: string) {
  const account = { isLogged: false, payload: "" };

  try {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.payload = userCredential.user.uid;
    account.isLogged = true;
  } catch (error: any) {
    account.payload = getFriendlyError(error.code);
  }
  return account;
}

export async function recover(email: string) {
  const account = { isReset: false, payload: "" };

  try {
    await sendPasswordResetEmail(authInstance, email);
    account.payload = "Request sent, Please check your inbox";
    account.isReset = true;
  } catch (error: any) {
    account.payload = error.message;
  }
  return account;
}
