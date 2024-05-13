import { PencilLine } from '@phosphor-icons/react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1715144536780-c847096a8632?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>

            <div className={styles.profile}>
                <Avatar src="https://github.com/GuiTeFreire.png" />

                <strong>Guilherme Freire</strong>
                <span>Desenvolvedor Full Stack</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size='20' />
                    Editar seu perfil
                </a>
                
            </footer>        
        </aside>
    );
}