import headStyles from '../styles/Header.module.css';
import { SiGooglenews } from 'react-icons/si';

const Header = () => {
  return (
    <div className='flex-col items-center justify-center gap-2 flex'>
        <SiGooglenews className='text-center text-4xl mx-0' />
        <h1 className={headStyles.title}>
            <span>Web3Dev</span> News
        </h1>
        <p className={headStyles.description}>Stay up to date with the latest Web3 dev news.</p>
    </div>
  )
}

export default Header
