import { Modal, Icon } from "semantic-ui-react";

const BasicModal = (props: any) => {

    const { show, onCloseModal, title, children, ...rest } = props;

    return (
        <Modal className="basic-modal" open={show} onClose={onCloseModal} {...rest}>
            <Modal.Header>
                <span>{title}</span> <Icon name="close" onClick={onCloseModal}></Icon>
            </Modal.Header>
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    )
}

export default BasicModal
