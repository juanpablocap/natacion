import React, {useState} from 'react'

const LinkForm = (props) => {

    const initialStateValues = {
        nombre: '',
        apellido: '',
        telefono: '',
        edad: '',
        nac: '',
        email: '',
        division: ''
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        console.log(name, value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEditLink(values);
        setValues({...initialStateValues});
    };


    return (
        <form className="card card-body">
            <div className="form-group">
                <h3>Nombre:</h3>
                <input 
                type="text" className="form-control" 
                placeholder="Escribe tu Nombre" 
                name="nombre" 
                value={values.nombre} 
                onChange={handleInputChange} />
                <h3>Apellido:</h3>
                <input type="text" className="form-control" 
                placeholder="Apellido" 
                name="apellido" 
                value={values.apellido} 
                onChange={handleInputChange} />
                <h3>Telefono:</h3>
                <input type="phone" className="form-control" 
                placeholder="telefono" 
                name="telefono" 
                value={values.telefono} onChange={handleInputChange} />
                <h3>Edad:</h3>
                <input type="age" className="form-control" 
                placeholder="edad" 
                name="edad" 
                value={values.edad}  onChange={handleInputChange} />   
                <h3>Fecha de Nacimiento:</h3>
                <input type="date" className="form-control" 
                placeholder="dd/mm/aaa" 
                name="nac" 
                value={values.nac}  onChange={handleInputChange} />     
                <h4>Email:</h4>
                <input type="email" className="form-control" 
                placeholder="email" 
                name="email" 
                value={values.email} onChange={handleInputChange} />
                    <label for="division" className="form-label mt-4">Selecciona tu Division:</label>
                    <select className="form-select" placeholder="email" value={values.division} name="division" id="division" onChange={handleInputChange}>
                        <option>Division?</option>
                        <option>M 6</option>
                        <option>M 7</option>
                        <option>M 8</option>
                        <option>M 9</option>
                        <option>M 10</option>
                        <option>M 11</option>
                        <option>M 12</option>
                        <option>M 13</option>
                        <option>M 14</option>
                        <option>M 15</option>
                        <option>M 16</option>
                        <option>M 17</option>
                    </select>
                    <div className="form-group">
                    <label for="formFile" className="form-label mt-4">Sube tu foto de perfil:</label>
                    <input className="form-control" type="file" id="formFile" />
                    </div>
                <button type="button" 
                className="btn btn-outline-primary mt-4" onClick={handleSubmit}>Guardar</button>
                <button type="button" 
                className="btn btn-outline-primary mt-4">Cancelar</button>
            </div>
        </form>
    )
};

export default LinkForm;