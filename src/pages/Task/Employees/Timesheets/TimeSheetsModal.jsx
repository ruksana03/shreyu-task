import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../../../../components";

const TimeSheetsModal = ({
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
                    <h5> {isEditable ? "Edit Today Work Details" : "Add Today Work Details"} </h5>
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
                        <Col sm={4}>
                            <FormInput
                                type="select"
                                label="Department"
                                name="className"
                                className="form-control"
                                containerClass={"mb-3"}
                                register={register}
                                key="className"
                                errors={errors}
                                control={control}
                            >
                                <option value="bg-danger">Office Management</option>
                                <option value="bg-success">Project Management</option>
                                <option value="bg-primary">Video Calling App</option>
                                <option value="bg-info">Hospital Administration</option>
                            </FormInput>
                        </Col>
                        <Row>
                            <Col sm={4}>
                                <FormInput
                                    type="text"
                                    label="Deadline"
                                    name="title"
                                    defaultValue={'5 May 2023'}
                                    className="form-control"
                                    placeholder="Insert Event Name"
                                    containerClass={"mb-3"}
                                    register={register}
                                    key="title"
                                    errors={errors}
                                    control={control} />
                            </Col>
                            <Col sm={4}>
                                <FormInput
                                    type="number"
                                    label="Total hours"
                                    name="title"
                                    readOnly
                                    value={100}
                                    className="form-control"
                                    placeholder="Total Hours"
                                    containerClass={"mb-3"}
                                    register={register}
                                    key="title"
                                    errors={errors}
                                    control={control}
                                />

                            </Col>
                            <Col>
                                <FormInput
                                    type="number"
                                    label="Remaining Hours"
                                    name="title"
                                    readOnly
                                    value={60}
                                    className="form-control"
                                    placeholder="Remaining Hours"
                                    containerClass={"mb-3"}
                                    register={register}
                                    key="title"
                                    errors={errors}
                                    control={control} />
                            </Col>
                        </Row>

                        <Row>
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
                                    type="number"
                                    label="Hours"
                                    name="hours"
                                    className="form-control"
                                    placeholder="Hours"
                                    containerClass={"mb-3"}
                                    register={register}
                                    key="title"
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12}>
                                <FormInput
                                    type="textarea"
                                    label="Description"
                                    name="description"
                                    placeholder="Description"
                                    containerClass={"mb-3"}
                                    register={register}
                                    key="title"
                                    errors={errors}
                                    control={control}
                                    style={{ height: '100px', textAlign: 'start', verticalAlign: 'top' }}
                                />

                            </Col>
                        </Row>


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
export default TimeSheetsModal;