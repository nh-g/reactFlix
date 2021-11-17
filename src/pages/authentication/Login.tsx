//@ts-nocheck
//NPM Packages
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

//Local imports
import fields from "./assets/fields-login.json";
import InputField from "components/shared/InputField";
import { signIn } from "scripts/auth";
import { getDocument } from "scripts/fireStore";
import { useAuth } from "state/AuthProvider";
import Header from "components/shared/Header";
import authPageBackground from "assets/images/authBackground.jpg";

export default function Login() {
  // Global states
  const { setLoggedIn, setUser } = useAuth();
  const history = useHistory();

  //Local states
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await signIn(form.email, form.password);
    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const document = await getDocument("users", uid);
    setUser(document);
    setLoggedIn(true);
    if (remember) localStorage.setItem("uid", uid);
    history.push("/browse");
  }

  function onFailure(code) {
    setMessage(code);
  }

  function setStyle() {
    document.getElementById("footer").style.background = "";
    document.getElementById("footer").style.borderTop = "";
  }

  useEffect(() => {
    setStyle();
  }, []);

  //Components
  const Fields = fields.map((item, index) => (
    <div key={index}>
      <InputField
        key={item.key}
        options={item}
        state={form[item.key]}
        onChange={onChange}
      />
    </div>
  ));

  return (
    <>
      <Header />
      <main className="page-login">
        <img src={authPageBackground} alt="bg" className="bg" />

        <div className="block">
          <form onSubmit={onSubmit}>
            <h1 className="title">Sign In</h1>
            {Fields}
            <p className="error-firebase">{message}</p>

            <button className="btn-signin">Sign In</button>

            <div className="remember-recover">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <p>Remember me</p>
              </label>
              <Link to="/reset" className="help">
                Need help?
              </Link>
            </div>
          </form>

          <p className="optional-action">
            New to ReactFlix ?&nbsp;
            <Link to="/signup">
              <strong>Sign up now.</strong>
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
