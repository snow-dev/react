/**
 * Created by snow on 30/09/2017.
 */

import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';

class Topics extends React.Component {
    render() {

        const TopicsAPI = {
            topics: [
                {number: 1, name: "Rendering", area: "React"},
                {number: 2, name: "Routing", area: "Routes"},
                {number: 3, name: "App State", area: "Redux"}
            ],
            all: function () { return this.topics },
            get: function (id) {
                const isTopic = p => p.number === id;
                return this.topics.find(isTopic);
            }
        };


        const FullTopics = () => (
            <div>
                <ul>
                    {
                        TopicsAPI.all().map(p => (
                            <li key={p.number}>
                                <Link to={`/topics/${p.number}`}>{p.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );

        const Topic = (props) => {
            const topic = TopicsAPI.get(
                parseInt(props.match.params.number, 10)
            );

            if(!topic){
                return <div> Sorry, but the topic wasn't found</div>;
            }
            return(
                <div>
                    <h1>{topic.name} (#{topic.number}) </h1>
                    <h2>Area: {topic.area} </h2>
                    <Link to="/topics"> {topic.position} </Link>
                </div>
            )

        };

        return (
            <div>
                <p>Topic's page</p>
                <Switch>
                    <Route exact path="/topics" component={FullTopics} />
                    <Route path="/topics/:number" component={Topic} />
                </Switch>


            </div>
        );
    }
}

export default Topics;
