import React from "react";
import { useSelector } from "react-redux";
import PeopleTable from "../PeopleList/peopleTable";

const HomePage = () => {

    const people = useSelector((state) => state.people);

    return (
    <div>
        <h1>Home</h1>
        <div>{<PeopleTable></PeopleTable>}</div>
    </div>
)};

export default HomePage;