import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import RocketItem from '../components/RocketItem';

it('testing rendering c component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketItem />
    </Provider>,
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
