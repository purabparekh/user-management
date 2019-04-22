import { ROLES } from "../constants/roles";

export default class User {
  static DEFAULTS = {
    id: -1,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    thumbnailUrl: "",
    email: "",
    phone: "",
    role: ROLES.USER
  };
  constructor(
    {
      id,
      username,
      password,
      firstName,
      lastName,
      thumbnailUrl,
      email,
      phone,
      role
    } = User.DEFAULTS
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.thumbnailUrl = thumbnailUrl;
    this.email = email;
    this.phone = phone;
    this.role = role;
  }
}
