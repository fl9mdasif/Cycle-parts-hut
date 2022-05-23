import React from 'react';
import footer from '../../img/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className=" container mx-auto p-10">
            <div className='footer justify-between'>
                <div>
                    <span className="footer-title">Services</span>
                    <a href="https://web.programming-hero.com/" className="link link-hover">Branding</a>
                    <a href="https://web.programming-hero.com/" className="link link-hover">Design</a>
                    <a href="https://web.programming-hero.com/" className="link link-hover">Marketing</a>
                    <a href="https://web.programming-hero.com/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="https://web.programming-hero.com/" className="link link-hover">About us</a>
                    <a href="https://web.programming-hero.com/" className="link link-hover">Contact</a>
                    <a href="https://web.programming-hero.com/" className="link link-hover">Jobs</a>
                    <a href="https://web.programming-hero.com/" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="https://web.programming-hero.com/" className="link link-hover">Terms of use</a>
                    <a href="https://web.programming-hero.com/" className="link link-hover">Privacy policy</a>
                    <a href="https://web.programming-hero.com/" className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - fl9mdasif</p>
            </div>
        </footer>
    );
};

export default Footer;