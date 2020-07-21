import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import {Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 5,
    }
}));
export const Home = () => {
    const classes = useStyles();
    return (
        <Container fixed className={classes.root}>
            <nav>
                <Link to="/"><h3 style={{display: 'inline', paddingRight: 25}}> Home </h3></Link>
                <Link to="Product"> <h3 style={{display: 'inline', paddingRight: 25}}> Product </h3></Link>
            </nav>
        </Container>
    )
}
