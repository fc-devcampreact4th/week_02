import React from "react";
import queryString from "query-string";

export default function About({ location }) {
    // const searchParams = new URLSearchParams(location.search);
    // console.log(searchParams.get("name"));
    const query = queryString.parse(location.search);
    console.log(query);
    return <div>About 입니다.</div>;
}
