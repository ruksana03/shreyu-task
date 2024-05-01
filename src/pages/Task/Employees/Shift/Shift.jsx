import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import AddShiftModal from "../ShiftAndSchedule/AddShiftModal";
import Table from "../../../../components/Table";
import AddNewShiftModal from "./AddNewShiftModal";


const Shift = () => {
    const [showAddEditEvent, setShowAddEditEvent] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const onCloseModal = () => setShowAddEditEvent(false);
    const onOpenModal = () => setShowAddEditEvent(true);

    const [showAddShift, setShowAddShift] = useState(false);
    const [isEditableShiftModal, setIsEditableShiftModal] = useState(false);
    const onCloseShiftModal = () => setShowAddShift(false);
    const onOpenShiftModal = () => setShowAddShift(true);

    const createNewEvent = () => {
        setIsEditable(false);
        onOpenModal();
    };
    const createNewShiftEvent = () => {
        setIsEditableShiftModal(false);
        onOpenShiftModal();
    };


    // sample Data 
    const shiftData = [
        {
            id: 1,
            shiftName: '10 O clock Shift',
            minStartTime: '09:00:00 am',
            startTime: '10:00:00 am',
            maxStartTime: '10:30:00 am',
            minEndTime: '06:00:00 pm',
            endTime: '07:00:00 pm',
            maxEndTime: '07:00:00 pm',
            breakTime: '30 mins',
            status: ['Active', 'Inactive'],
        },
        {
            id: 1,
            shiftName: '10 O clock Shift',
            minStartTime: '09:00:00 am',
            startTime: '10:00:00 am',
            maxStartTime: '10:30:00 am',
            minEndTime: '06:00:00 pm',
            endTime: '07:00:00 pm',
            maxEndTime: '07:00:00 pm',
            breakTime: '30 mins',
            status: ['Active', 'Inactive'],
        },
        {
            id: 1,
            shiftName: '10 O clock Shift',
            minStartTime: '09:00:00 am',
            startTime: '10:00:00 am',
            maxStartTime: '10:30:00 am',
            minEndTime: '06:00:00 pm',
            endTime: '07:00:00 pm',
            maxEndTime: '07:00:00 pm',
            breakTime: '30 mins',
            status: ['Active', 'Inactive'],
        },
    ];

    const columns = [
        {
            Header: "#",
            accessor: "id",
            sort: true,
        },
        {
            Header: "Shift Name",
            accessor: "shiftName",
            sort: true,
        },
        {
            Header: "Minn Start Time",
            accessor: "minStartTime",
            sort: true,
        },
        {
            Header: "Start Time",
            accessor: "startTime",
            sort: true,
        },
        {
            Header: "Max Start Time",
            accessor: "maxStartTime",
            sort: true,
        },
        {
            Header: "Min End Time",
            accessor: "minEndTime",
            sort: true,
        },
        {
            Header: "End Time",
            accessor: "endTime",
            sort: true,
        },
        {
            Header: "Max End Time",
            accessor: "maxEndTime",
            sort: true,
        },
        {
            Header: "Break Time",
            accessor: "breakTime",
            sort: true,
        },
        {
            Header: 'Status',
            accessor: 'status',
            sort: false,
            Cell: ({ row }) => (
                <Dropdown>
                    <Dropdown.Toggle as="a" className="cursor-pointer text-muted text-center arrow-none">
                        <i className="bi bi-record-circle" style={{ color: 'green' }}></i> Active <i class="bi bi-caret-down-fill"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {row.original.status.map((status, index) => (
                            <Dropdown.Item key={index}><i className="bi bi-record-circle" style={{ color: 'green' }}></i> {status}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            ),
        },

        {
            Header: "Action",
            accessor: "",
            sort: false,
            Cell: () => (

                <Dropdown >
                    <Dropdown.Toggle
                        as="a"
                        className="cursor-pointer text-muted text-center arrow-none"
                    >
                        <i className="uil uil-ellipsis-v fs-14"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <i className="uil uil-edit-alt me-2"></i>Edit
                        </Dropdown.Item>
                        <Dropdown.Item className="text-danger">
                            <i className="uil uil-trash me-2"></i>Delete
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            )
        }

    ]

    // Size per page list for pagination
    const sizePerPageList = [
        { text: "5", value: 5 },
        { text: "10", value: 10 },
        { text: "20", value: 20 },
        { text: "All", value: shiftData.length }
    ];


    return (
        <div>
            <div className="flex justify-between mb-6 " style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h1 className="text-2xl font-bold"> Shift List</h1>
                    <p className="mt-1 font-bold text-[#4D5154] ">Dashboard / Employees / Shift List</p>
                </div>
                <div>
                    <Button
                        variant="primary"
                        className="mt-2 me-1"
                        id="btn-new-event"
                        onClick={createNewEvent}
                    >
                        Assign Shifts
                    </Button>

                    <Button
                        variant="primary"
                        className="mt-2 me-1"
                        id="btn-new-event"
                        onClick={createNewShiftEvent}
                    >
                        Add Shifts
                    </Button>

                    {showAddEditEvent && (
                        <AddShiftModal
                            isOpen={showAddEditEvent}
                            onClose={onCloseModal}
                            isEditable={isEditable}
                        //   eventData={eventData}
                        //   onUpdateEvent={onUpdateEvent}
                        //   onRemoveEvent={onRemoveEvent}
                        //   onAddEvent={onAddEvent}
                        />
                    )}

                    {
                        showAddShift && (
                            <AddNewShiftModal
                                isOpen={onOpenShiftModal}
                                onClose={onCloseShiftModal}
                                isEditable={isEditableShiftModal}
                            />
                        )
                    }

                </div>
            </div>

            <Table
                columns={columns}
                data={shiftData}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
            />
        </div>
    );
};

export default Shift;