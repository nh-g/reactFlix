// NPM Packages
import { useState, useEffect, FormEvent } from "react";
import { useHistory, Link } from "react-router-dom";

// Project files
import fields from "data/authentication-fields/fields-signup.json";
import InputField from "../../components/shared/InputField";
import { createAccount } from "scripts/firebase/authentication";
import { useAuth } from "state/AuthProvider";
import { createDocumentWithId } from "scripts/firebase/fireStore";
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

export default function Signup() {
  //Local states
  const [form, setForm] = useState<any>({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { setLoggedIn, setUser } = useAuth();

  // Methods
  function onChange(key: string, value: any) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    const account = await createAccount(form.email, form.password);
    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid: string) {
    const newUser = {
      username: form.username,
      role: "viewer",
    };
    await createDocumentWithId("users", uid, newUser);
    setLoggedIn(true);
    setUser({ ...newUser, id: uid });

    history.push("/browse");
  }

  function onFailure(code: any) {
    setMessage(code);
  }
  function setLayout() {
    document.getElementById("footer")!.style.background = "#f3f3f3";
    document.getElementById("footer")!.style.borderTop = "1px solid #E5E5E5";
    document.getElementById("header")!.style.background = "white";
  }

  useEffect(() => {
    setLayout();
  }, []);

  //Components
  const Fields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <>
      <Header />

      <Link to="/login" className="signin">
        <strong>Sign In</strong>
      </Link>

      <main className="page-signup ">
        <div className="block">
          <form onSubmit={onSubmit}>
            <h1 className="title">Sign Up</h1>
            <h2>Just a few more steps and you're finished!</h2>
            {Fields}
            <p>{message}</p>
            <button className="btn btn-signup">Sign Up</button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
