import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import PluginProvider from "mirador/dist/es/src/extend/PluginProvider";
import MiradorApp from "mirador/dist/es/src/components/App";
import createStore from "mirador/dist/es/src/state/createStore";
import createRootReducer from "mirador/dist/es/src/state/reducers/rootReducer";
import settings from "mirador/dist/es/src/config/settings";
import * as actions from "mirador/dist/es/src/state/actions";

class Mirador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {
  //componentDidMount() {
    const store = createStore();
    settings.theme.palette.type = "dark";
    store.dispatch(actions.setConfig(settings));
    store.dispatch(actions.setWorkspaceAddVisibility(true));
    /*store.dispatch(actions.addWindow(windows: [
				  {
					manifestId: 'https://purl.stanford.edu/dy727pk7274/iiif/manifest'
				  },
				  {
					manifestId: 'https://iiif.bodleian.ox.ac.uk/iiif/manifest/faeff7fb-f8a7-44b5-95ed-cff9a9ffd198.json',
					canvasIndex: 75
				  },
				])); //nooooo don't do this*/
    this.setState({ store: store });
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <PluginProvider plugins={[]} createRootReducer={createRootReducer}>
          <MiradorApp />
        </PluginProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Mirador />, document.getElementById("root"));
