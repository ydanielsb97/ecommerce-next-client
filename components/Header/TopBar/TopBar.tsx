import { Container, Grid, Image, Input } from "semantic-ui-react"
import Link from "next/link";

const TopBar = () => {
    return (
        <div className="top-bar">
            <Container>
                <Grid>
                    <Grid.Column width={8} className="top-bar__left">
                        <Logo />
                    </Grid.Column>

                    <Grid.Column width={8} className="top-bar__right">
                        <Search />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}



export const Logo = () => {
    return (
        <Link href="/">
            <a>
                <Image src="/logo.png" alt="gaming">

                </Image>
            </a>
        </Link>
    )
}

export const Search = () => {
    return (
        <Input id="search-game" icon={{name: "search"}}/>
    )
}



export default TopBar
