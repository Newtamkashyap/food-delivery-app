import './footer.css';

export const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={"images/logo.png"} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos delectus eius voluptas quo rem? Esse expedita voluptate earum fuga, non consequuntur sit impedit minima recusandae, at, placeat numquam magni modi?</p>
                    <div className='footer-social-icons'>
                        <img src={"images/facebook_icon.png"} alt="" />
                        <img src={"images/twitter_icon.png"} alt="" />
                        <img src={"images/linkedin_icon.png"} alt="" />

                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>

                    </ul>

                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>

            </div>
            <hr/>
            <p className='footer-copyright'>Copyright 2024  &copy; Tomato.com - All Right Reserved.</p>
        </div>
    )
}