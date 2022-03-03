import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import MissionsContainer from '../components/MissionsContainer';

it('testing rendering MissionsContainer component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <MissionsContainer />
      </Router>
    </Provider>,
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
