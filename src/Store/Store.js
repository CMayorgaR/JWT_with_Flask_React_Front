const APIusers = "http://localhost:8080/";

const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
        user: {
            email: "",
            password: "",
          }
    },
    actions: {
        handleChangeSignUp: (e) => {
            const { user } = getStore();
            setStore({
              user: {
                ...user,[e.target.name]: e.target.value},
            });
          },
          /* handleSubmitSignUp: (evento, navigate) => {
            const actions = getActions();
            evento.preventDefault(); //evitamos que la pag vuelva a cargar.
            const { user } = getStore(); //traeme el usuario del store
            fetch(APIusers + "create_user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json", //el lenguaje de comunicacion es json
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
            navigate("/")} */
          }  
    }
};

export default getState;