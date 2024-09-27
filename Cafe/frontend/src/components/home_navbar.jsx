export default function HomeNav() {
    return (
        <Navbar className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='/'>Bean and Brew Coffee</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user.email}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}