import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Button, Col} from 'react-bootstrap';
import {ValidarNombre, ValidarApellido, ValidarEmail} from './Validaciones';
import ServicioAlquiler from './servicios/alquiler';
const FormularioAlquiler = () => {
    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] =useState('');
    const [dni, setDni] = useState('');
    const [ingreso, setIngreso] = useState('');
    const [egreso, setEgreso] = useState('');
    const [personas, setPersonas] = useState('1 persona');
    const [formaDePago, setFormaDePago] = useState('Efectivo');
    const [total, setTotal] = useState('');
    const [senia, SetSenia] = useState('');
    const [montoDeAlquiler, setMontoAlquiler]= useState(0);
    const handleNombre = (nombre) => {
        setNombre(nombre);
    }
    const handleApellido = (apellido) => {
        setApellido(apellido);
    }
    const handleTelefono =(telefono) =>{
        setTelefono(telefono);
    }
    const handleEmail = (email) =>{
        setEmail(email);
    }
    const handleDni = (dni) =>{
        setDni(dni);
    }
    const handleIngreso = (ingreso) =>{
        setIngreso(ingreso);
    }
    const handleEgreso = (egreso) =>{
        setEgreso(egreso);
    }
    const handlePersonas = (personas) =>{
        setPersonas(personas);
    }
    const handleFormaDePago = (formaDePago) =>{
        setFormaDePago(formaDePago);
    }
    const handleTotal = (total) =>{
        setTotal(total);
    }
    const handleSenia = (senia) => {
        SetSenia(senia);
    }
    const ValidarFormulario = ()=>{
        console.log(ValidarNombre(nombre), ValidarApellido(apellido), ValidarEmail(email));
        return  ValidarNombre(nombre) &&
                ValidarApellido(apellido) &&
                ValidarEmail(email);
    }

    useEffect(( )=> {
        ServicioAlquiler.consultarDisponibilidad(personas, ingreso, egreso).then( resp => {
            const disponible = resp;
            if(disponible){
                ServicioAlquiler.calcularAlquiler(personas, ingreso, egreso).then( resp => {
                    setMontoAlquiler(resp)
                })
            }else{
                console.log('No hay disponibilidad')
            }
        });
    }, [personas, ingreso, egreso])
    return(
        <>
            <Form className="m-3" onSubmit={ (e) => {
                e.preventDefault();
                console.log(`nombre: ${nombre}, apellido:${apellido}, telefono: ${telefono}, email: ${email}, dni: ${dni}, fecha de ingreso ${ingreso}, fecha de egreso: ${egreso},
                personas: ${personas}, forma de pago: ${formaDePago}, Total a pagar: ${total}, seña: ${senia}, cancelacion: ${total - senia}`);
                const esValido = ValidarFormulario();
                if (esValido){
                    console.log('Esta todo ok');
                }
                else{
                    console.log('Algo salio mal');
                }
            }}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre completo" onChange={ (e) => handleNombre(e.target.value) } value={nombre}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" onChange={ (e) => handleApellido(e.target.value) } value={apellido}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="number" placeholder="11-1234 5678" onChange={(e) => handleTelefono(e.target.value) } value={telefono}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@email.com" onChange={(e) => handleEmail(e.target.value)} value={email}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="number" placeholder="DNI" onChange={(e) => handleDni(e.target.value)} value={dni}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Fecha de ingreso</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/aaaa" onChange={(e) => handleIngreso(e.target.value)} value={ingreso}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Fecha de egreso</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/aaaa" onChange={(e) => handleEgreso(e.target.value)} value={egreso}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Cantidad de personas</Form.Label>
                        <Form.Select onChange={(e) => handlePersonas(e.target.value)} value={personas}>
                            <option>1 persona</option>
                            <option>2 personas</option>
                            <option>3 personas</option>
                            <option>4 personas</option>
                            <option>5 personas</option>

                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Forma de pago</Form.Label>
                        <Form.Select value={formaDePago} onChange={(e) => handleFormaDePago(e.target.value)}>
                            <option>Efectivo</option>
                            <option>Transferencia</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Monto total</Form.Label>
                    <Form.Control type="number" onChange={(e) => handleTotal(e.target.value)} value={total}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Seña</Form.Label>
                    <Form.Control type="number" onChange={(e) => handleSenia(e.target.value)} value={senia}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Cancelación</Form.Label>
                    <Form.Control type="number" value={total - senia}/>
                    </Form.Group>
                </Row>

                <Button className="col-12 mt-2" variant="dark" type="submit">
                    Reservar
                </Button>
            </Form>
        </>
    )
}
export default FormularioAlquiler;