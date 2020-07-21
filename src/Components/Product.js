import React from 'react'
import { Container } from '@material-ui/core'
import { Outlet } from 'react-router'

export default function Product() {
    return (
        <div>
            <h1>Product</h1>
            <hr></hr>
            <Container>
                <Outlet/>
            </Container>
        </div>
    )
}
