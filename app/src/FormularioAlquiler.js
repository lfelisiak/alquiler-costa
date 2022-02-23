import Form from 'react-bootstrap/Form';
import {Row, Button, Col} from 'react-bootstrap';
const FormularioAlquiler = () => {
    return(
        <>
            <Form className="m-3">
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre completo" />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="tel" placeholder="15-12345 678" />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="escriba-su-email@email.com" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="number" placeholder="DNI" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Fecha de ingreso</Form.Label>
                    <Form.Control type="date" placeholder="dd/mm/aaaa"/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Fecha de egreso</Form.Label>
                    <Form.Control type="date" placeholder="dd/mm/aaaa"/>
                    </Form.Group>
                </Row>
                    
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Departamento</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>depto 1...</option>
                            <option>depto 2...</option>
                            <option>depto 3...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Forma de pago</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Efectivo</option>
                            <option>Transferencia</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Button variant="outline-dark" type="submit">
                    Reservar
                </Button>
            </Form>
        </>
    )
}
export default FormularioAlquiler;