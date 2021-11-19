import react, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Pricing from "./PricingComponent";
import { Redirect, Route, Switch } from "react-router";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <Header />
        <Switch>
            <Route path="/home" />
            <Route pricing="/pricing" />
            <Redirect to="/home" />
        </Switch>
        <Footer />
    </div>;
  }
}

export default Main;