import React from 'react'

const About = () => {
    return (
        <div className='about-container'>
            <h2 className='big-heading'>Ce este React?</h2>

            <h3 className='mini-heading'>Declarativ</h3>

            <p className='feature'>
            React ajuta la crearea unor UI interactive. 
            Proiectați vizualizări simple pentru fiecare stare din aplicație, 
            iar React va actualiza și reda eficient componentele potrivite atunci când datele se modifică.
            
            Vizualizările declarative fac codul mai previzibil și mai ușor de depanat.
            </p>

            <h3 className='mini-heading'>Bazat pe Componente</h3>

            <p className='feature'>
            Construiți componente care își gestionează propria stare, 
            apoi compuneți-le pentru a face un UI complex.
            
            Deoarece logica componentelor este scrisă în JavaScript în loc de șabloane, 
            puteți utiliza cu ușurință date prin aplicație.
            </p>

            <h3 className='mini-heading'>Invatati o dată, scrie oriunde</h3>
             
             <p className='feature'>Puteți dezvolta noi funcții în React fără a rescrie codul existent.</p>
        </div>
    )
}

export default About
