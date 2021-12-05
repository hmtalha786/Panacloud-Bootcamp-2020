import { Response, Request } from "miragejs";
import { handleErrors } from "../server/inedx";
import { User } from "../../../interface";
import { randomBytes } from "crypto";

const generateToken = () => randomBytes(8).toString("hex");

export interface AuthResponse {
  token: string;
  user: User;
}

export const login = (
  schema: any,
  request: Request
): AuthResponse | Response => {
  const { email, password } = JSON.parse(request.requestBody);
  const user = schema.users.findBy({ email });
  if (!user) {
    return handleErrors(null, "No user with that username exists");
  }
  if (password !== user.password) {
    return handleErrors(null, "Password is incorrect");
  }
  const token = generateToken();
  return {
    user: user.attrs as User,
    token,
  };
};

export const signup = (
  schema: any,
  request: Request
): AuthResponse | Response => {
  const data = JSON.parse(request.requestBody);
  const exUser = schema.users.findBy({ username: data.username });
  if (exUser) {
    return handleErrors(null, "A user with that username already exists.");
  }

  const user = schema.users.create(data);
  const token = generateToken();

  return {
    user: user.attrs as User,
    token,
  };
};
