import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import MissionTable from '../components/SingleMission';

it('testing rendering c component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MissionTable />
    </Provider>,
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
