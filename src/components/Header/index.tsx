import styles from './styles.module.scss';
import Image from 'next/image';

import logo from '../../../public/images/logo.svg';

import { ActiveLink } from '../ActiveLink';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>

                <ActiveLink href='/' activeClassName={styles.active}>
                    <Image src={logo} alt='logo' />
                </ActiveLink>

                <nav>

                    <ActiveLink href='/' activeClassName={styles.active}>
                        <span>Home</span>
                    </ActiveLink>

                    <ActiveLink href='/posts' activeClassName={styles.active}>
                        <span>Conteúdos</span>
                    </ActiveLink>

                    <ActiveLink href='/sobre' activeClassName={styles.active}>
                        <span>Quem somos?</span>
                    </ActiveLink>
                    
                </nav>

                <a className={styles.readyButton} href='https://sujeitoprogramador.com'>COMEÇA AGORA</a>

            </div>
        </header>
    )
}


