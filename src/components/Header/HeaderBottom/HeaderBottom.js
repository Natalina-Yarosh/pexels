import React from 'react';
import style from './HeaderBottom.module.css';
import Input from '../../Input/Input';

const HeaderBottom = () => {
    return(
        <section className={style.headerBottom}>
            <img 
                className={style.img}
                src="http://www.radionetplus.ru/uploads/posts/2013-04/1365401196_teplye-oboi-1.jpeg"
                alt=""
            />
            <div className={style.section}>
                <div className = {style.contentHeaderBorrom}>
                    <h1 className = {style.title}>
                    The best free stock photos & videos shared by talented creators.
                    </h1>
                    <Input />
                    <div >
                        <ul className = {style.listSearch}><span>Suggested:</span>
                            <li><a href = '/'>cat1</a></li>
                            <li><a href = '/'>cat2</a></li>
                            <li><a href = '/'>cat3</a></li>
                            <li><a href = '/'>cat4</a></li>
                            <li><a href = '/'>cat5</a></li>
                            <li><a href = '/'>cat6</a></li>
                            <li><a href = '/'>cat7</a></li>                            
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className = {style.subscribeHeaderButtom}>
                    <a href>Photo by Francesco Ungaro</a>
            </div>
        </section>

    )
}

export default HeaderBottom;