import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'
const SocialLinks = () => {
    return (
        <div>
            <aside className='fixed hidden md:block bottom-12 left-4 flex-col space-y-4'>
                <a className='flex items-center justify-center p-1' href="http://github.com/onesamket" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl transition-all duration-250 hover:translate-y-2 hover:text-blue-500 " />
                </a>
                <a className='flex items-center justify-center p-1' href="http://x.com/onesamket" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="text-xl transition-all duration-250 hover:translate-y-2 hover:text-blue-500 " />
                </a>
                <a className='flex items-center justify-center p-1' href="http://instagram.com/1_onesamket" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl transition-all duration-250 hover:translate-y-2 hover:text-blue-500 " />

                </a>
                <a className='flex items-center justify-center p-1' href="http://linkedin.com/in/onesamket" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-xl transition-all duration-250 hover:translate-y-2 hover:text-blue-500 " />
                </a>
            </aside>
        </div>
    )
}

export default SocialLinks