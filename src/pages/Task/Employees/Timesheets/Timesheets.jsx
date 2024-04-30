import { Button, Dropdown } from "react-bootstrap";
import Table from "../../../../components/Table";
import { useState } from "react";
import TimeSheetsModal from "./TimeSheetsModal";
import user1 from "../../../../assets/images/users/avatar-1.jpg"
import user2 from "../../../../assets/images/users/avatar-2.jpg"
import user3 from "../../../../assets/images/users/avatar-3.jpg"
import user4 from "../../../../assets/images/users/avatar-4.jpg"
import user5 from "../../../../assets/images/users/avatar-5.jpg"
import user6 from "../../../../assets/images/users/avatar-6.jpg"
import user7 from "../../../../assets/images/users/avatar-7.jpg"
import user8 from "../../../../assets/images/users/avatar-8.jpg"
import user9 from "../../../../assets/images/users/avatar-9.jpg"
import user10 from "../../../../assets/images/users/avatar-10.jpg"

const Timesheets = () => {
    const [showAddEditEvent, setShowAddEditEvent] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const onCloseModal = () => setShowAddEditEvent(false);
    const onOpenModal = () => setShowAddEditEvent(true);

    const createNewEvent = () => {
        setIsEditable(false);
        onOpenModal();
    };

    // Sample data
    const designationData = [
        { image: user1, name: 'John Doe Web Designer', date:'1 Jan 2023', projects:'Video Calling App',assignHours:'20' ,hours:'12' ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { image: user2,  name: 'Richard Miles Android Developer', date:'1 Jan 2023', projects:'	Project Management',assignHours:'20',hours:'12',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'  },
        { image: user3,  name: 'Jeffery Lalor Team Leader', date:'1 Jan 2023' , projects:'Ware house developement',assignHours:'20',hours:'12',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { image: user4, name: 'Jeffrey Warden Web Developer', date:'1 Jan 2023' , projects:'Project Management',assignHours:'20',hours:'12' ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { image: user5,  name: 'John Doe Web Designer', date:'1 Jan 2023' , projects:'Office Management',assignHours:'20',hours:'12' ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { image: user6,  name: 'John Smith Android Developer' , date:'1 Jan 2023' , projects:'Video Calling App',assignHours:'20',hours:'12',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { image: user7, name: 'Lesley Grauer Team Leader', date:'1 Jan 2023', projects:'Hospital Administration',assignHours:'20' ,hours:'12' ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { image: user8,  name: 'Loren Gatlin Android Developer', date:'1 Jan 2023', projects:'	Office Management',assignHours:'20' ,hours:'12',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { image: user9,  name: ' Mike Litorus Android DeveloperIOS Developer', date:'1 Jan 2023', projects:'Hospital Administration',assignHours:'20' ,hours:'12' ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { image: user10, name: 'Richard Miles Web Developer' , date:'1 Jan 2023' , projects:'Project Management',assignHours:'20',hours:'12',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    ];

    // Columns configuration for the table
    const columns = [
        {
            Header: "Name",
            accessor: "name",
            Cell: ({ row }) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={row.original.image} alt="User" style={{ width: 50, borderRadius: '50%', marginRight: 10 }} />
                    <span>{row.original.name}</span>
                </div>
            )
        },
        {
            Header: "Date ",
            accessor: "date",
            sort: true,
        },
        {
            Header: "Projects ",
            accessor: "projects",
            sort: true,
        },
        {
            Header: "Assigned Hours ",
            accessor: "assignHours",
            sort: true,
        },
        {
            Header: "Hours ",
            accessor: "hours",
            sort: true,
        },
        {
            Header: "Description ",
            accessor: "description",
            sort: true,
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
                    <h1 className="text-2xl font-bold"> Time Sheet</h1>
                    <p className="mt-1 font-bold text-[#4D5154] ">Dashboard / Time Sheet</p>
                </div>
                <div>
                    <Button
                        variant="primary"
                        className="mt-2 me-1"
                        id="btn-new-event"
                        onClick={createNewEvent}
                    >
                        <i className="bi bi-plus-lg"></i>
                        Add Today Work
                    </Button>
                </div>
            </div>

            {showAddEditEvent && (
                <TimeSheetsModal
                    isOpen={showAddEditEvent}
                    onClose={onCloseModal}
                    isEditable={isEditable}
                //   eventData={eventData}
                //   onUpdateEvent={onUpdateEvent}
                //   onRemoveEvent={onRemoveEvent}
                //   onAddEvent={onAddEvent}
                />
            )}

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

export default Timesheets;