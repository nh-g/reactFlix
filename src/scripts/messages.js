export default function getFriendlyError(errorCode) {
  switch (errorCode) {
    case "auth/wrong-password":
      return "Oops, you entered a wrong password";

    case "auth/too-many-requests":
      return "Oops, too many request submitted, please try again  later";
    default:
      return errorCode;
  }
}
