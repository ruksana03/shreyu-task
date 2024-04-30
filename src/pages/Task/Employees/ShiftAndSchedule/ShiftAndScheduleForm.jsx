import { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../../../../components";

const ShiftAndScheduleForm = ({ isEditable,
    eventData,
    onRemoveEvent,
    onUpdateEvent,
    onAddEvent, }) => {
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
        <div>
        <form
          noValidate
          name="chat-form"
          id="chat-form"
          onSubmit={handleSubmit(onSubmitEvent)}
        >
          <Row className="align-items-center">
            <Col sm={3}>
              <FormInput
                type="text"
                label="Employee"
                name="employee"
                className="form-control"
                placeholder="Employee"
                containerClass={"mb-3"}
                register={register}
                key="title"
                errors={errors}
                control={control}
              />
            </Col>
            <Col sm={3}>
              <FormInput
                type="select"
                label="Select Employee"
                name="className"
                className="form-control"
                containerClass={"mb-3"}
                register={register}
                key="className"
                errors={errors}
                control={control}
              >
                <option value="bg-danger">All Department</option>
                <option value="bg-success">Finance</option>
                <option value="bg-primary">Finance and Management</option>
                <option value="bg-info">Hr and Finance</option>
                <option value="bg-info">ITech</option>
              </FormInput>
            </Col>
            <Col sm={2}>
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
            <Col sm={2}>
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
            <Col sm={2}>
              <Button variant="danger" onClick={onRemoveEvent}>
                SEARCH
              </Button>
            </Col>
          </Row>
        </form>
      </div>
      
    );
};

export default ShiftAndScheduleForm;