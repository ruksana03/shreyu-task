import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../../../../components";

const AddShiftModal = ({
    isOpen,
    onClose,
    isEditable,
    eventData,
    onRemoveEvent,
    onUpdateEvent,
    onAddEvent,
}) => {
    const [event] = useState(eventData);

    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            title: yup.string().required("Please enter event name"),
            className: yup.string().required("Please select category"),
        })
    );

    // form methods
    const methods = useForm({ defaultValues: event, resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    // handle form submission
    const onSubmitEvent = (data) => {
        isEditable ? onUpdateEvent(data) : onAddEvent(data);
    };

    return (
        <Modal show={isOpen} onHide={onClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton className="pb-2 px-4 border-bottom-0">
                <Modal.Title id="modal-title">
                    <h5> {isEditable ? "Add Schedule" : "Add Schedule"} </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4 pb-4 pt-0">
                <form
                    noValidate
                    name="chat-form"
                    id="chat-form"
                    onSubmit={handleSubmit(onSubmitEvent)}
                >
                    <Row>
                        <Col sm={6}>
                            <FormInput
                                type="select"
                                label="Employee Name"
                                name="className"
                                className="form-control"
                                containerClass={"mb-3"}
                                register={register}
                                key="className"
                                errors={errors}
                                control={control}
                            >
                                <option value="bg-danger"></option>
                                <option value="bg-success">Finance</option>
                                <option value="bg-primary">Finance and Management</option>
                                <option value="bg-info">Hr Finance</option>
                            </FormInput>
                        </Col>

                        <Col sm={6}>
                            <FormInput
                                type="select"
                                label="Employee Name"
                                name="className"
                                className="form-control"
                                containerClass={"mb-3"}
                                register={register}
                                key="className"
                                errors={errors}
                                control={control}
                            >
                                <option value="bg-danger">Select</option>
                                <option value="bg-success">John Deo</option>
                                <option value="bg-primary">Richard Miles</option>
                                <option value="bg-info">John Smith</option>
                            </FormInput>
                        </Col>
                        <Col sm={6}>
                            <FormInput
                                type="date"
                                label="Date"
                                name="date"
                                className="form-control"
                                placeholder="Date"
                                containerClass={"mb-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col sm={6}>
                            <FormInput
                                type="select"
                                label="Shift"
                                name="className"
                                className="form-control"
                                containerClass={"mb-3"}
                                register={register}
                                key="className"
                                errors={errors}
                                control={control}
                            >
                                <option value="bg-danger">10:30 Shift</option>
                                <option value="bg-success">Daily Shift</option>
                                <option value="bg-primary">New Shift</option>
                            </FormInput>
                        </Col>

                    </Row>

                    <Row>
                        <Col xs={4}>
                            {isEditable ? (
                                <Button variant="danger" onClick={onRemoveEvent}>
                                    Delete
                                </Button>
                            ) : null}
                        </Col>
                        <Col xs={8} className="text-end">
                            <Button className="btn btn-light me-1" onClick={onClose}>
                                Close
                            </Button>
                            <Button variant="success" type="submit" className="btn btn-success">
                                Save
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Modal.Body>
        </Modal>
    );
};


export default AddShiftModal;