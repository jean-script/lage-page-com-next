import Head from 'next/head';
import Link from 'next/link';

import styles from './styles.module.scss';
import Image from 'next/image';

import thumbImg from '../../../public/images/thumb.png';

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi'

export default function Posts(){
    return(
        <>
            <Head>
                <title>Blog | Sujeito Programador </title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <Link href='/'>
                        <span>
                            <Image 
                                src={thumbImg} 
                                alt='' 
                                width={720}
                                height={410}
                                quality={100}
                            />

                            <strong>Cirando meu app</strong>
                            <time>14 julho 2021</time>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo corporis commodi officia?</p>
                        </span>
                    </Link>


                    <div className={styles.buttonNavigate}>
                        <div>
                            <button>
                                <FiChevronsLeft size={25} color='#fff' />
                            </button>
                            <button>
                                <FiChevronLeft size={25} color='#fff' />
                            </button>
                        </div>

                        <div>
                            <button>
                                <FiChevronRight size={25} color='#fff' />
                            </button>
                            <button>
                                <FiChevronsRight size={25} color='#fff' />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
