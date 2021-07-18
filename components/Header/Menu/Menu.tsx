import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import BasicModal from '../../Modal/BasicModal';
import { useState } from "react";
import Auth from "../../Auth";

const MenuWeb = () => {
    const [showModal, setShowModal] = useState({show: false})
    const [titleModal, setTitleModal] = useState({title: "Log In"})


    const setTitleModalLogIn = () => {
        setTitleModal((prev: {title:string}) => ({...prev, title: "Log In"}))

    }

    const setTitleModalSingUp = () => {
        setTitleModal((prev: {title:string}) => ({...prev, title: "Sign Up"}))
    }


    const onShowModal = () => setShowModal((prev: any) => ({...prev, show: true}));
    const onCloseModal = () => setShowModal((prev: any) => ({...prev, show: false}));

    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPlatforms />
                    </Grid.Column>

                    <Grid.Column className="menu__right" width={10}>
                        <MenuOptions onShowModal={onShowModal}/>
                    </Grid.Column>
                </Grid>
            </Container>
            <BasicModal show={showModal.show} title={titleModal.title} onCloseModal={onCloseModal} size="small">
                <Auth onCloseModal={onCloseModal} setTitleModalSingUp={setTitleModalSingUp} setTitleModalLogIn={setTitleModalLogIn}/>
            </BasicModal>

        </div>
    )
}

const MenuPlatforms = () => {
    return (
        <Menu>
            <Link href="/play-station">
                <Menu.Item as="a">
                    PlayStation
                </Menu.Item>
            </Link>
            <Link href="/xbox">
                <Menu.Item as="a">
                    PlayStation
                </Menu.Item>
            </Link>
            <Link href="/switch">
                <Menu.Item as="a">
                    PlayStation
                </Menu.Item>
            </Link>
        </Menu>
    )
}

export const MenuOptions = ({onShowModal}: any) => {
    return (
        <Menu>
            <Menu.Item onClick={onShowModal}>
                <Icon name="user outline" />
                Mi Cuenta
            </Menu.Item>
        </Menu>
    )
}



export default MenuWeb
