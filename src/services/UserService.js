import User from "../models/User";
import { ROLES } from "../constants/roles";

// export const defaultImageUrl = "http://lorempixel.com/200/200/";
export const defaultImageUrl = "https://picsum.photos/200?random";

export const users = [
  new User({
    id: 1,
    username: "purab.parekh",
    password: "purab",
    firstName: "Purab",
    lastName: "Parekh",
    thumbnailUrl: defaultImageUrl,
    email: "purab.parekh@springct.com",
    phone: "9876543210",
    role: ROLES.USER
  }),
  new User({
    id: 2,
    username: "sheetal.deshpande",
    password: "sheetal",
    firstName: "Sheetal",
    lastName: "Deshpande",
    thumbnailUrl: defaultImageUrl,
    email: "sheetal.deshpande@springct.com",
    phone: "9638527410",
    role: ROLES.OWNER
  }),
  new User({
    id: 3,
    username: "anushree.chaubal",
    password: "anushree",
    firstName: "Anushree",
    lastName: "Chaubal",
    thumbnailUrl: defaultImageUrl,
    email: "anushree.chaubal@springct.com",
    phone: "9874563210",
    role: ROLES.ADMIN
  })
];

export const validateUser = (username, password) => {
  const user = users.find(
    user => user.username === username && user.password === password
  );
  return user;
};
