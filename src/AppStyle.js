import styled from "styled-components";
// import icons
import {ChevronLeft} from "@styled-icons/evaicons-solid/ChevronLeft";
import {Switch} from "@styled-icons/icomoon/Switch";
import {Moon} from "@styled-icons/heroicons-solid/Moon";
import {Grid} from "@styled-icons/bootstrap/Grid";
import {UserCheck} from "@styled-icons/boxicons-regular/UserCheck";
import {UserPlus} from "@styled-icons/boxicons-regular/UserPlus";
import {FileMedia} from "@styled-icons/octicons/FileMedia";
import {Settings} from "@styled-icons/feather/Settings";
import {CommentDots} from "@styled-icons/boxicons-solid/CommentDots";
import {Bell} from "@styled-icons/boxicons-solid/Bell";

import Toggle from 'react-dark-mode-toggle';

export const ToggleMode = styled(Toggle)`
    margin-left: auto;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 50px 0;
`
export const MobileContainer = styled.div`
    width: 350px;
    height: 600px;
    background: ${({color})=>color};
    box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.2);
    padding: 1.5rem;
    box-sizing: border-box;
`
// Navbar styled
export const Nav = styled.nav`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

// Img container 
export const ImgContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #000;
    margin: 20px 0 10px 0;
    object-fit: cover;
`

export const TitleImg = styled.h1`
    font-size: 22px;
    font-weight: bold;
    color: ${({color})=> color};
`
export const Text = styled.p`
    color: ${({color})=> color};
`
// Item Style 

export const ItemWrapper = styled.div`
    margin-top: 15px;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 10px 0;
    /* border: 1px solid #000; */
`

export const ItemTitle = styled.h4`
    font-size: 14px;
    font-weight: 500;
    color: ${({color})=> color};
`

export const Line = styled.div`
    width: 100%;
    height: 0.02rem;
    background-color: ${({color})=> color};
`

// Icon styled
export const Icon = styled.div`

`
Icon.ChevronLeftIcon = styled(ChevronLeft)`
    width: 30px;
    cursor: pointer;
`
Icon.SwitchIcon = styled(Switch)`
    width: 20px;
    cursor: pointer;
`
Icon.Moon = styled(Moon)`
    width: 20px;
    /* color: ${({color})=> color}; */
`
Icon.Grid = styled(Grid)`
    width: 20px;
    color: #fbb65c;
`

Icon.UserCheck = styled(UserCheck)`
    width: 20px;
    color: #ff7eb0;
`

Icon.UserPlus = styled(UserPlus)`
    width: 20px;
    color: #36e3ff;
`

Icon.FileMedia = styled(FileMedia)`
    width: 20px;
    color: #5476ff;
`

Icon.Settings = styled(Settings)`
    width: 20px;
    color: #7cc068;
`

Icon.CommentDots = styled(CommentDots)`
    width: 20px;
    color: #0bc630;
`

Icon.Bell = styled(Bell)`
    width: 20px;
    color: #a394c2;
`