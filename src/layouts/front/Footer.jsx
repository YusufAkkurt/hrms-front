import React, { Component } from 'react';
import { Box, Container, Grid, Link } from "@material-ui/core";

class Footer extends Component {
    render() {
        return (
            <footer className="bg-blue text-white">
                <Box py={ 3 }>
                    <Container>
                        <Grid container spacing={ 3 }>
                            <Grid item xs={ 12 } sm={ 4 }>
                                <Box mb={ 1 } borderBottom={ 1 }>Yardım</Box>
                                <Box><Link href="/" color="inherit">Politikamız</Link></Box>
                                <Box><Link href="/" color="inherit">Destek</Link></Box>
                                <Box><Link href="/" color="inherit">Gizlilik</Link></Box>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 4 }>
                                <Box mb={ 1 } borderBottom={ 1 }>Hesap</Box>
                                <Box><Link href="/" color="inherit">Giriş Yap</Link></Box>
                                <Box><Link href="/" color="inherit">Kayıt Ol</Link></Box>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 4 }>
                                <Box mb={ 1 } borderBottom={ 1 }>Bize Ulaşın</Box>
                                <Box><Link href="/" color="inherit">Adres</Link></Box>
                                <Box><Link href="/" color="inherit">Mail</Link></Box>
                                <Box><Link href="/" color="inherit">Telefon</Link></Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box textAlign="center" pb={ 3 }>
                    Human Resources Management System UI With React &copy; { new Date().getFullYear() }
                </Box>
            </footer>
        );
    }
}

export default Footer;
