import { createStore } from "solid-js/store";

export type UserState = {
    isAuthenticated: boolean;
}

const [userStore, setUserStore] = createStore<UserState>({
    isAuthenticated: false
});

export const useUserState = () => [userStore, setUserStore];