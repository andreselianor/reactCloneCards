const imagenes = import.meta.glob('../assets/img/*.png', {
    eager: true,
    import: 'default'
});
import '../styles/Testimonio.css';

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={imagenes[`../assets/img/${props.imagen}.png`]}
                alt={`Foto de ${props.nombre}`}
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    · {props.nombre} ·
                </p>
                <p className='cargo-testimonio'>
                    <strong>{props.cargo}</strong> en <strong>{props.pais}</strong>
                </p>
                <p className='texto-testimonio'>
                    "{props.testimonio}"
                </p>
            </div>
        </div>
    );
}

export default Testimonio;