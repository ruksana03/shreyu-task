import { useState } from "react";
import Table from "../../../../components/Table";
import { Button, Dropdown } from "react-bootstrap";
import DepartmentModal from "./DepartmentModal";
import DeleteModal from "../DeleteModal";

const Departments = () => {
    const [showAddEditEvent, setShowAddEditEvent] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null); // State variable to store selected department data

    const onCloseModal = () => setShowAddEditEvent(false);
    const onOpenModal = () => setShowAddEditEvent(true);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isEditableDelete, setIsEditableDelete] = useState(false);
    const onCloseDeleteModal = () => setShowDeleteModal(false);
    const onOpenDeleteModal = () => setShowDeleteModal(true);

    const deleteEvent = () => {
        setIsEditableDelete(true);
        onOpenDeleteModal();
    };

    const createNewEvent = () => {
        setIsEditable(false);
        onOpenModal();
    };

    const createNewEditEvent = (rowData) => {
        setIsEditable(true);
        setSelectedDepartment(rowData);
        console.log(rowData)
        onOpenModal();
    };
    console.log(selectedDepartment);

    // Sample data
    const departmentsData = [
        { id: 1, name: 'Marketing' },
        { id: 2, name: 'IT Management' },
        { id: 3, name: 'Web Development' },
        { id: 4, name: 'Support Management' },
        { id: 5, name: 'Accounts Management' },
        { id: 6, name: 'Application Development' }
    ];

    // Columns configuration for the table
    const columns = [
        {
            Header: "ID",
            accessor: "id",
            sort: true,
        },
        {
            Header: "Department Name",
            accessor: "name",
            sort: true,
        },
        {
            Header: "Action",
            accessor: "",
            sort: false,
            Cell: ({ row }) => ( // Destructure row from props
                <Dropdown>
                    <Dropdown.Toggle
                        as="a"
                        className="cursor-pointer text-muted arrow-none"
                    >
                        <i className="uil uil-ellipsis-v fs-14 "></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => createNewEditEvent(row.original)}>
                            <i className="uil uil-edit-alt me-2"></i>Edit
                        </Dropdown.Item>
                        <Dropdown.Item className="text-danger" onClick={deleteEvent}>
                            <i className="uil uil-trash me-2"></i>Delete
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
    ];

    // Size per page list for pagination
    const sizePerPageList = [
        { text: "5", value: 5 },
        { text: "10", value: 10 },
        { text: "20", value: 20 },
        { text: "All", value: departmentsData.length }
    ];

    return (
        <div>
            <div className="flex justify-between mb-6 " style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h1 className="text-2xl font-bold"> Departments</h1>
                    <p className="mt-1 font-bold text-[#4D5154] ">Dashboard / Department</p>
                </div>
                <div>
                    <Button
                        variant="primary"
                        className="mt-2 me-1"
                        id="btn-new-event"
                        onClick={createNewEvent}
                    >
                        <i className="bi bi-plus-lg"></i>
                        Add Department
                    </Button>
                </div>
            </div>

            {showAddEditEvent && (
                <DepartmentModal
                    isOpen={showAddEditEvent}
                    onClose={onCloseModal}
                    isEditable={isEditable}
                    departmentData={selectedDepartment}
                />
            )}

            {
                showDeleteModal &&
                <DeleteModal
                    isOpen={showDeleteModal}
                    onClose={onCloseDeleteModal}
                    isEditable={isEditableDelete}
                />
            }

            <Table
                columns={columns}
                data={departmentsData}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
            />
        </div>
    );
};

export default Departments;
