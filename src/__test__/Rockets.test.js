import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import Rockets from '../components/Rockets';

it('testing rendering Rockets component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Rockets />
      </Router>
    </Provider>,
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
