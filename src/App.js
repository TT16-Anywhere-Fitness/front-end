import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Routes/Home/Home";
import { PrivateRoute } from "./utils/PrivateRoute";
import Client from "./Routes/client/Client";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<PrivateRoute exact path="/client">
					<Client />
				</PrivateRoute>
				<Route path="/" component={Home} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
