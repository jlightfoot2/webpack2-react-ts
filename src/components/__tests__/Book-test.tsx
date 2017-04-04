import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Theme from '../Theme';
import Book from '../Book';
import BookPage from '../Page';
import { shallow } from 'enzyme';

import * as renderer from 'react-test-renderer';


const appBarTitleCb = () => {

}
const pageOpenCb= () => {

}
const BookItem = {
  title: "The Catcher in the Rye",
  pages: [
    {
      id: 1,
      title: 'chapter 1',
      content: "blah blah 1"
    },
    {
      id: 2,
      title: 'chapter 2',
      content: "blah blah 2"
    },
    {
      id: 3,
      title: 'chapter 3',
      content: "blah blah 3"
    }
  ]
}



test('Test NotFound Snapshot', () => {

  const component = renderer.create(
    <Theme>
        <Book appBarTitle={appBarTitleCb} pageOpen={pageOpenCb} book={BookItem} isOpen={true} title={"Page Title"} />
    </Theme>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

test('Test Enzyme Open Book Has Page', () => {

  const wrapper = shallow(
        <Book appBarTitle={appBarTitleCb} pageOpen={pageOpenCb} book={BookItem} isOpen={true} title={"Page Title"} />
  );
  expect(wrapper.find(BookPage).length).toBe(1);

});

test('Test Enzyme Closed Book Has No Page', () => {

  const wrapper = shallow(
        <Book appBarTitle={appBarTitleCb} pageOpen={pageOpenCb} book={BookItem} isOpen={false} title={"Page Title"} />
  );
  expect(wrapper.find(BookPage).length).toBe(0);

});

