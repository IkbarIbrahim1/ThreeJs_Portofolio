import React from 'react'

const Footer = () => {
    return (
        <section className="c-space fixed bottom-0 left-0 right-0 z-50 pt-3 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                </div>
                <div className="social-icon">
                    <img src="/assets/twitter.svg" alt="facebook" className="w-1/2 h-1/2"/>
                </div>
                <div className="social-icon">
                    <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>
                </div>
            </div>

            <p className="text-white-500">2025 Ikbar Ibrahim, All rights reserved</p>

        </section>
    )
}
export default Footer
