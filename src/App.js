import React, {useState, useContext} from 'react';
import {Container, MobileContainer, Text, ToggleMode, ItemTitle, Line, Item, ItemWrapper, TitleImg, Nav, Icon, ImgContainer, Img} from './AppStyle.js'
import Logo from './logo.webp'
import { ThemeContext } from './context'

function App() {
  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext)

  const light = {
    icon: 'black',
    title: 'black',
    background: 'whitesmoke',
  }

  const dark = {
    icon: 'white',
    title: 'white',
    background: 'black',
  }

  const onChange = () => {
    setMode(!mode);
    setTheme(mode ? light : dark)
  }
  return (
    <Container>
      <MobileContainer color={theme.background}>
        <Nav>
          <Icon.ChevronLeftIcon color={theme.icon}/>
          <Icon.SwitchIcon color={theme.icon}/>
        </Nav>

        <ImgContainer>
          <Img src={Logo}/>
          <TitleImg color={theme.title}>
            Cassian
          </TitleImg>
          <Text color={theme.title}>No one</Text>
        </ImgContainer>

        <ItemWrapper>
          <Item>
            <Icon.Moon color={theme.icon}/>
            <ItemTitle color={theme.title}>Dark Mode</ItemTitle>
            <ToggleMode 
              onChange={onChange}
              checked={mode}
              size="40px"
            />
          </Item>

          <Item>
            <Icon.Grid />
            <ItemTitle color={theme.title}>Story</ItemTitle>
          </Item>
          
          <Item>
            <Icon.UserCheck />
            <ItemTitle color={theme.title}>Chat heads</ItemTitle>
          </Item>

          <Item>
            <Icon.UserPlus />
            <ItemTitle color={theme.title}>Groups</ItemTitle>
          </Item>
          <Line color={theme.title}/>

          <Item>
            <Icon.FileMedia />
            <ItemTitle color={theme.title}>Media and photos</ItemTitle>
          </Item>

          <Item>
            <Icon.Settings />
            <ItemTitle color={theme.title}>Settings and privacy</ItemTitle>
          </Item>

          <Item>
            <Icon.CommentDots />
            <ItemTitle color={theme.title}>Help centre</ItemTitle>
          </Item>

          <Item>
            <Icon.Bell />
            <ItemTitle color={theme.title}>Notification</ItemTitle>
          </Item>

        </ItemWrapper>
      </MobileContainer>
    </Container>
  );
}

export default App;
