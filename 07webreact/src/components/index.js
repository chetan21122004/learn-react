import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./header/Header";
import Home from "./Home/Home";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { createBrowserRouter,RouterProvider, Route } from 'react-router-dom'
import User from "./Users/User";
import Layout from "../layout";
import Github from "./Github/Github";


export { About,Contact,Header,Home,Footer,Outlet,
    createBrowserRouter,RouterProvider, Route, Layout,User , Github};