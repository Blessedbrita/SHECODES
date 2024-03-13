import React from "react";

export default function (props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    if (minutes < 0) {
        minutes = `0${minutes}`;
    }

    return (
        <div>{day} {hours}:{minutes}</div>
    );
}