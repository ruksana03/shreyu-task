import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Row, Col, Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../../../../components";

const AddNewShiftModal = ({
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
                        {/* row-1  */}
                        <Col sm={12}>
                            <FormInput
                                type="text"
                                label="Shift Name"
                                name="name"
                                className="form-control"
                                placeholder=""
                                containerClass={"mb-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control} />
                        </Col>


                        {/* Row-2  */}
                        <Col sm={4}>
                            <FormInput
                                type="time"
                                label="Min Start Time"
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
                        <Col sm={4}>
                            <FormInput
                                type="time"
                                label="Start Time"
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

                        <Col sm={4}>
                            <FormInput
                                type="time"
                                label="Max Start Time"
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

                        {/* Row-3  */}
                        <Col sm={4}>
                            <FormInput
                                type="time"
                                label="Min End Time"
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
                        <Col sm={4}>
                            <FormInput
                                type="time"
                                label="End Time"
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

                        <Col sm={4}>
                            <FormInput
                                type="time"
                                label="Max End Time"
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

                        {/* Row-4  */}

                        <Col sm={4}>
                            <FormInput
                                type="time"
                                label="Break Time"
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

                        {/* Row-5  */}
                        <Col sm={12}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> Recurring Shift</span>
                        </Col>

                        {/* Row-6  */}
                        <Col sm={12}>
                            <FormInput
                                type="select"
                                label="Repeat Every"
                                name="className"
                                className="form-control"
                                containerClass={"my-3"}
                                register={register}
                                key="className"
                                errors={errors}
                                control={control}
                            >
                                <option value="bg-danger">Select</option>
                                <option value="bg-danger">1</option>
                                <option value="bg-danger">2</option>
                                <option value="bg-success">3</option>
                                <option value="bg-primary">4</option>
                                <option value="bg-primary">5</option>
                                <option value="bg-primary">6</option>
                            </FormInput>
                        </Col>
                        {/* Row-7  */}

                        <span style={{fontWeight:'bolder'}}>Week(s)</span>

                        <Col sm={12}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> M </span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> T </span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> W </span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> T </span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> F </span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> S </span>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> S </span>
                        </Col>

                        {/* row-8  */}
                        <Col sm={12}>
                            <FormInput
                                type="date"
                                label="End On"
                                name="date"
                                required='true'
                                className="form-control"
                                placeholder="Date"
                                containerClass={"my-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>

                        {/* Row-9 */}
                        <Col sm={12}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                            />
                            <span> Recurring Shift</span>
                        </Col>

                         {/* row-10  */}
                         <Col sm={12}>
                            <FormInput
                                type="text"
                                label="Add Tag"
                                name="tag"
                                required='true'
                                className="form-control"
                                // placeholder="Date"
                                containerClass={"my-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>

                        {/* row-11  */}
                        <Col sm={12}>
                            <FormInput
                                type="textarea"
                                label="Add Note"
                                name="tag"
                                required='true'
                                className="form-control"
                                // placeholder="Date"
                                containerClass={"my-3"}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
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


export default AddNewShiftModal;