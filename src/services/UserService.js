import User from "../models/User";
import { ROLES } from "../constants/roles";

const defaultImageUrl = "http://lorempixel.com/200/200/";
export const users = [
  new User({
    id: 1,
    username: "purab.parekh",
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
    firstName: "Anushree",
    lastName: "Chaubal",
    thumbnailUrl: defaultImageUrl,
    email: "anushree.chaubal@springct.com",
    phone: "9874563210",
    role: ROLES.ADMIN
  })
];
