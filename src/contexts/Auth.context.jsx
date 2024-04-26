import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from "react";
import useSWRMutation from "swr/mutation";
import * as api from "../api";

const AuthContext = createContext();
const JWT_TOKEN_KEY = "jwtToken";
const USER_ID_KEY = "UserId";
const USER_ROLE_KEY = "role";

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);

  const {
    isMutation: loading,
    error,
    trigger: doLogin,
  } = useSWRMutation("users/login", api.post);

  useEffect(() => {
    api.setAuthToken(token);
    setIsAuthed(Boolean(token));
    setReady(true);
  }, [token]);

  const login = useCallback(
    async (username, password) => {
      try {
        const { token, user } = await doLogin({ username, password });
        setToken(token);
        setUser(user);

        localStorage.setItem(JWT_TOKEN_KEY, token);
        localStorage.setItem(USER_ID_KEY, user.ID);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    [doLogin]
  );

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(JWT_TOKEN_KEY);
    localStorage.removeItem(USER_ID_KEY);
  }, []);

  const value = useMemo(
    () => ({ token, user, login, logout, loading, error, ready, isAuthed }),
    [token, user, login, logout, loading, error, isAuthed, ready]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
