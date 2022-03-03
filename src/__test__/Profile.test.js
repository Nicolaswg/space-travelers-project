import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import Profile from '../components/Profile';

it('testing rendering Profile component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Profile />
      </Router>
    </Provider>,
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
