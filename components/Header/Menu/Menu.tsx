import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import BasicModal from '../../Modal/BasicModal';
import { useState } from "react";
import Auth from "../../Auth";

const MenuWeb = () => {
    const [showModal, setShowModal] = useState(false)

    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);
    const [titleModal, setTitleModal] = useState("This is the login form")

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
            <BasicModal show={showModal} title={titleModal} setShow={setShowModal} size="small">
                <Auth setTitleModal={setTitleModal}/>
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
