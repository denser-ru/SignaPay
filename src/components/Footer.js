import React from 'react';

function Footer() {
return (
<footer className="footer mt-auto py-3 bg-light">
<div className="container">
<p className="text-muted">SignaPay © {new Date().getFullYear()}</p>
</div>
</footer>
);
}

export default Footer;
