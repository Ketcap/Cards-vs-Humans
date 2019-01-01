import React from 'react';
import { withContext } from '../context';
import { Link } from 'react-router-dom';
import { Menu, Item as MenuItem } from '../components/navbar';
import {
  Wrapper, W, NotFound, List, Item, Line
} from '../components/history';

const NotFoundImage = '/static/images/no_data.svg';

const History = ({ context: { history: ch } }) => {
  const history = ch;
  const Navbar = () =>
    <Menu>
      <Link to={'/'}><MenuItem>Back</MenuItem></Link>
    </Menu>
  if (history.length < 1) {
    return (
      <Wrapper>
        <Navbar />
        <NotFound src={NotFoundImage} />
      </Wrapper>
    )
  }
  return (
    <W>
      <Navbar />
      <List>
        {history.map(({ black_card, white_cards }, index) => (
          <Item key={index}>
            <Line>
              Question : <br /><span dangerouslySetInnerHTML={{ __html: black_card.val.text }} />
            </Line>
            {white_cards.map((c, i) => (
              <Line>
                Pick {++i}: <br /><span dangerouslySetInnerHTML={{ __html: c.val }} />
              </Line>
            ))
            }
          </Item>
        ))}
      </List>
    </W>
  );
}

export default withContext(History);