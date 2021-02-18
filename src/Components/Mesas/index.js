import React from 'react'
import Mesa from '../../Images/Roleta.svg'
import * as S from './styles'
import Form from '../Formulario'

const Table = (props) => {
    const {setScreen}=props;
    return (
        <S.Div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 01</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 02</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 03</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 04</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 05</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 06</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 07</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 08</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 09</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 10</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 11</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>Mesa 12</p>
            </div>
        </S.Div>
    )
}

export default Table;


