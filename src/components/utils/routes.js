import { Welcome } from "../Welcume/Welcome.js";
import { Home } from "../Home/Home.js";
import { Delivery } from "../Delivery/Delivery.js";
import { Catalog } from "../Catalog/Catalog.js";
import { Contacts } from "../Contacts/Contacts.js";


export const routes = [
    {
        path: "/",
        element: Welcome
    },
    {
        path: "/home",
        element: Home
    },
    {
        path: "/catalog",
        element: Catalog
    },
    {
        path: "/delivery",
        element: Delivery
    },
    {
        path: "/contacts",
        element: Contacts
    }
]