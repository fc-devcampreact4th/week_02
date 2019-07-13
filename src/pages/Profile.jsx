import React from "react";

export default function Profile({ match }) {
    const id = match.params.id;
    console.log(id);
    return (
        <div>
            <h2>Profile 입니다.</h2>
            {id && <p>id 는 {id}</p>}
        </div>
    );
}
