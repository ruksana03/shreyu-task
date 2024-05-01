import { Button, Dropdown } from "react-bootstrap";
import Table from "../../../../components/Table";
import { useState } from "react";
import DesignationModal from "./DesignationModal";
import DeleteModal from "../DeleteModal";


const Designations = () => {
    const [showAddEditEvent, setShowAddEditEvent] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [selectedDesignation, setSelectedDesignation] = useState(null); // State variable to store selected designation data

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
        // Check if the selectedDesignation is already the same as the rowData
        if (selectedDesignation !== rowData) {
            setIsEditable(true);
            setSelectedDesignation(rowData); // Update selectedDesignation with the row data
            setShowAddEditEvent(true); // Open the modal
        }
    };
    
    
    console.log(selectedDesignation);

    // Sample data
    const designationData = [
        { id: 1, name: 'Web Designer', designation: 'Web Developer' },
        { id: 2, name: 'Web Developer', designation: 'Web Development' },
        { id: 3, name: 'Android Developer', designation: 'Application Development' },
        { id: 4, name: 'IOS Developer', designation: 'Application Development' },
        { id: 5, name: 'UI Designer', designation: 'Application Development' },
        { id: 6, name: 'UX Designer', designation: 'Application Developer' },
        { id: 7, name: 'IT Technician', designation: 'Application Developer' },
        { id: 8, name: 'Product Manager', designation: 'Application Developer' },
        { id: 9, name: 'SEO Analyst', designation: 'Application Developer' },
        { id: 10, name: 'Front End Designer', designation: 'Application Developer' },
    ];

    // Columns configuration for the table
    const columns = [
        {
            Header: "ID",
            accessor: "id",
            sort: true,
        },
        {
            Header: "Department ",
            accessor: "name",
            sort: true,
        },
        {
            Header: "Designation ",
            accessor: "designation",
            sort: true,
        },
        {
            Header: "Action",
            accessor: "",
            sort: false,
            Cell: ({ row }) => (
                <Dropdown>
                    <Dropdown.Toggle
                        as="a"
                        className="cursor-pointer text-muted text-center arrow-none"
                    >
                        <i className="uil uil-ellipsis-v fs-14"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {createNewEditEvent(row.original)}}>
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
        { text: "All", value: designationData.length }
    ];

    return (
        <div>
            <div className="flex justify-between mb-6 " style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h1 className="text-2xl font-bold"> Designations</h1>
                    <p className="mt-1 font-bold text-[#4D5154] ">Dashboard / Designations</p>
                </div>
                <div>
                    <Button
                        variant="primary"
                        className="mt-2 me-1"
                        id="btn-new-event"
                        onClick={createNewEvent}
                    >
                        <i className="bi bi-plus-lg"></i>
                        Add Designations
                    </Button>
                </div>
            </div>

            {showAddEditEvent && (
                <DesignationModal
                    isOpen={showAddEditEvent}
                    onClose={onCloseModal}
                    isEditable={isEditable}
                    designationData={selectedDesignation} // Pass selected designation data to the modal
                />
            )}

            {showDeleteModal &&
                <DeleteModal
                    isOpen={showDeleteModal}
                    onClose={onCloseDeleteModal}
                    isEditable={isEditableDelete}
                />
            }

            <Table
                columns={columns}
                data={designationData}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
            />
        </div>
    );
};

export default Designations;
