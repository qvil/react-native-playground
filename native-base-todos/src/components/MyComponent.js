import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Button,
  Text,
  Content,
  Item,
  Input,
  Header,
  Footer,
  Left,
  Icon,
  Body,
  Title,
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button>
            <Text>Button</Text>
            
            {/* <Icon name='menu' /> */}
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        {/* <Content>
          <Button>
            <Text>Button</Text>
          </Button>
          <Item>
            <Input />
          </Item>
        </Content> */}
        <Footer>
        </Footer>
      </Container>
    );
  }
}

export default MyComponent;