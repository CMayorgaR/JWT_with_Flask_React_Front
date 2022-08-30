const APIusers = "http://localhost:8080/";

const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      user: {
        email: "",
        password: "",
      },
    },
    actions: {
      handleSignUp: (e) => {
        const { user } = getStore();
        setStore({
          user: {
            ...user, [e.target.name]: e.target.value
          },
        });
      },
      handleSubmitSignUp: (evento, navigate) => {
        const actions = getActions();
        evento.preventDefault();
        const { user } = getStore();
        fetch(APIusers + "sign_up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        navigate("/log_in")
      },
      handleChangeLogIn: (evento) => {
        const { user } = getStore();
        setStore({
          user: {
            ...user,
            [evento.target.name]: evento.target.value,
          }
        })
      },
      handleSubmitLogin: (evento, navigate) => {
        evento.preventDefault();
        localStorage.clear();
        const { user } = getStore();
        fetch(APIusers + "login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.access_token) {
              localStorage.setItem("token", data.access_token);
              navigate("/private");
            } else {
              localStorage.clear()
            }
          });
        setStore({
          user: {
            email: "",
            password: "",
          },
        });
      },
    }
  }
};

export default getState;