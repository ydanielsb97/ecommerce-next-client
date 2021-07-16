import { Container } from "semantic-ui-react";
import Header from "../../components/Header"

const BasicLayout = (props : any) => {

    const { children } = props



    return (
        <Container fluid className="basic-layout">
            <Header />
           <Container className="content">{children}</Container>
        </Container>
    )
}

export default BasicLayout;