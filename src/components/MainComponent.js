import react, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Pricing from "./PricingComponent";
import Principals from "./PrincipalsComponent";
import Advances from "./AdvancesComponent";
import { Redirect, Route, Switch } from "react-router";

class Main extends Component {

  render() {
    return <div>
        <Header />
        <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/principals" component={Principals} />
            <Route exact path="/advances" component={Advances} />
            <Route exact path="/pricing" component={Pricing} />
            <Redirect to="/home" component={Home} />
        </Switch>
        <Footer />
    </div>;
  }
}

export default Main;