import React from "react";

import Notifications from "./Notifications";
import Posts from "./Posts";

function Feed() {
    return (
        <div className="feed container">
            <div className="row">
                <div className="col s12 m6 posts-wrapper">
                    <Posts />
                </div>
                <div className="col s12 m5 offset-m1 notifs-wrapper">
                    <Notifications />
                </div>
            </div>
        </div>
    );
}

export default Feed;
