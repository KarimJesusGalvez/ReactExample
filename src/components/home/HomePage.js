import React from "react";
import { useSelector } from "react-redux";
import PeopleTable from "../PeopleList/peopleTable";
import "./HomePage.css"
const HomePage = () => {

    const people = useSelector((state) => state.people);

    return (
    <div id="HomePageContainer">
        <h1>Home</h1>
        <div>{<PeopleTable></PeopleTable>}</div>
    </div>
)};

export default HomePage;