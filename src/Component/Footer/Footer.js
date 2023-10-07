import "./Footer.css";

function Footer() {
    return (
        <>
            <div id="footer">
                <div class="container">
                    <div class="footer-logo">
                        <div class="block desc mt-3 mb-4">Cinema World - Watch free movies & TV shows online in HD on any device</div>
                        <div id="copyright" class="text-center">Copyright &copy;
                            <script>document.write(new Date().getFullYear())</script> All rights reserved to Cinema World</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;