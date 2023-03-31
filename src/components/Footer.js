import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
            <Container fluid className="mt-5">
                <p className="text-muted">SignaPay © {new Date().getFullYear()}</p>
            </Container>
    );
}

export default Footer;
