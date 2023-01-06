import React from "react";

export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Movie Database</h1>
                <img id="image2" src="https://images.onlinelabels.com/images/clip-art/bugmenot/bugmenot_Movie_tape.png"></img>
                <h2>This app contains movie suggestions, users can upload their own movie suggestions in the add submission tab. Browse the other suggestions in the Movies tab.
                </h2>
                <img id="image" src="https://images-eu.ssl-images-amazon.com/images/I/81mG7NvT5IL.png"></img>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}