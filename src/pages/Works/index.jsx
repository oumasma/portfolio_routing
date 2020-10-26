import React from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Exercices from "./Exercices";
import CaseStudy from "./CaseStudy";
import ConcretCase from "./ConcretCase";

const Works = () => {

    return (
        <div>
            <h1>Welcome on the works page</h1>
            <h2>Please, select a category</h2>
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/works/Exercices" className="nav-link active">Exercices</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/works/CaseStudy" className="nav-link">Case Study</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/works/ConcretCase" className="nav-link">Concret case</Link>
                    </li>

                </ul>


            </div>

            <div>
                <Switch>
                    <Route path="/works/exercices">
                        <Exercices />
                    </Route>

                    <Route path="/works/casestudy">
                        <CaseStudy />
                    </Route>

                    <Route path="/works/concretcase">
                        <ConcretCase />
                    </Route>
                </Switch>
            </div>

        </div>

    );
}

export default Works