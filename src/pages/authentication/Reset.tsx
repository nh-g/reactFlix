// NPM packages
import { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

// Project files
import fields from "./assets/fields-recover.json";
import InputField from "../../components/shared/InputField";
import { recover } from "scripts/firebase/auth";
import authPageBackground from "assets/images/authBackground.jpg";
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

export default function Reset() {
  //Local states
  const [form, setForm] = useState<any>({ email: "" });
  const [message, setMessage] = useState("");
  const history = useHistory();

  // Methods
  function onChange(key: string, value: any) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    const account = await recover(form.email);
    account.isReset ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(message: string) {
    setMessage(message);
    history.push("/");
  }

  function onFailure(errorMessage: string) {
    setMessage(errorMessage);
  }

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

      <main className="page-login recover">
        <img src={authPageBackground} alt="bg" className="bg" />
        <div className="logo">reactflix</div>
        <div className="block">
          <form onSubmit={onSubmit}>
            {Fields}
            <p>{message}</p>
            <button className="btn-signin">
              <h4>Recover Password</h4>
            </button>
          </form>
          <p className="optional-action">
            New to reactflix ?&nbsp;
            <Link to="/signup">
              <strong>Sign up now.</strong>
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
