import Axios from "axios";

export default {
    state: {
        users: []
    },
    mutations: {
        userList(state, payload) {
            return (state.users = payload);
        }
    },
    actions: {
        userList(context) {
            Axios.get("/user-list").then(response => {
                context.commit("userList", response.data);
            });
        }
    },
    getters: {
        userList(state) {
            return state.users;
        }
    }
};
