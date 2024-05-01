import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../../../../components";

const EditShiftModal = ({
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
                    <h5> {isEditable ? "Edit Schedule" : "Edit Schedule"} </h5>
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
                                label="Department"
                                name="className"
                                className="form-control"
                                containerClass={"mb-3"}
                                register={register}
                                key="className"
                                errors={errors}
                                control={control}
                            >
                                <option value="bg-danger">Select</option>
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
                                <option value="bg-danger">Select</option>
                                <option value="bg-danger">10:30 Shift</option>
                                <option value="bg-success">Daily Shift</option>
                                <option value="bg-primary">New Shift</option>
                            </FormInput>
                        </Col>

                        {/* Row-3  */}

                        <Col sm={4}>
                            <FormInput
                                type="text"
                                label="Min Start Time *"
                                name="date"
                                value={'06:11 am'}
                                className="form-control"
                                placeholder="Date"
                                containerClass={"mb-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col sm={4}>
                            <FormInput
                                type="text"
                                label="Start Time *"
                                name="date"
                                value={'06:11 am'}
                                className="form-control"
                                placeholder="Date"
                                containerClass={"mb-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col sm={4}>
                            <FormInput
                                type="text"
                                label="Max Start Time *"
                                name="date"
                                value={'06:11 am'}
                                className="form-control"
                                placeholder="Date"
                                containerClass={"mb-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>


                        {/* Row-4 */}

                        <Col sm={4}>
                            <FormInput
                                type="text"
                                label="Min Start Time *"
                                name="date"
                                value={'06:11 am'}
                                className="form-control"
                                placeholder="Date"
                                containerClass={"mb-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col sm={4}>
                            <FormInput
                                type="text"
                                label="Start Time *"
                                name="date"
                                value={'06:11 am'}
                                className="form-control"
                                placeholder="Date"
                                containerClass={"mb-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col sm={4}>
                            <FormInput
                                type="text"
                                label="Max Start Time *"
                                name="date"
                                value={'06:11 am'}
                                className="form-control"
                                placeholder="Date"
                                containerClass={"mb-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>

                        {/* Row-5 */}

                        <Col sm={4}>
                            <FormInput
                                type="text"
                                label="Break Time *"
                                name="date"
                                value={'06:11 am'}
                                className="form-control"
                                placeholder="Date"
                                containerClass={"mb-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        {/* row-6  */}
                        <Col sm={12}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> Recurring Shift</span>
                        </Col>

                        {/* row-7  */}
                        <div style={{ display: "flex", gap: '4px', marginTop: '10px' }}>
                            <span>Repeat Every</span>
                            <Col sm={2}>

                                <FormInput
                                    type="select"
                                    // label="Shift"
                                    name="className"
                                    className="form-control"
                                    containerClass={"mb-3"}
                                    register={register}
                                    key="className"
                                    errors={errors}
                                    control={control}
                                >
                                    <option value="bg-danger">1</option>
                                    <option value="bg-danger">2</option>
                                    <option value="bg-success">3</option>
                                    <option value="bg-primary">4</option>
                                    <option value="bg-primary">5</option>
                                    <option value="bg-primary">6</option>
                                </FormInput>

                            </Col>
                            <span>  week(s)</span>
                        </div>

                        {/* row-8  */}
                        <Col sm={12}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> M</span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span>T</span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span>W</span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span>T</span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span>F</span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span>S</span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span>S</span>
                        </Col>

                        {/* Row-9  */}
                        <Col sm={6}>
                            <FormInput
                                type="date"
                                label="End On"
                                name="date"
                                className="form-control"
                                placeholder="Date"
                                containerClass={"mt-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>

                        {/* Row-10  */}
                        <Col sm={12}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> Indefinite</span>
                        </Col>

                        {/* Row-11 */}
                        <div style={{marginTop:'10px', fontWeight:'bold'}}>
                            <span>  Accept Extra Hours</span>
                            <Col sm={12}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                />
                            </Col>
                        </div>

                         {/* Row-12 */}
                         <div style={{marginTop:'10px', fontWeight:'bold'}}>
                            <span>  Publish</span>
                            <Col sm={12}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                />
                            </Col>
                        </div>

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

export default EditShiftModal;