import React, { useEffect, useState } from "react";
import axios from "axios";
import { getTasks, updateTask, deleteTask } from "../api";
import {
    Container,
    Typography,
    IconButton,
    Snackbar,
    Alert
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import * as PropTypes from "prop-types";
import EditTaskModal from "../components/EditTaskModal";


const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success"
    });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            showSnackbar("Error fetching tasks", "error");
        }
    };

    const showSnackbar = (message, severity = "success") => {
        setSnackbar({
            open: true,
            message,
            severity
        });
    };

// In your Tasks.jsx, update these handlers:

    const handleDelete = async (id) => {
        try {
            console.log('Attempting to delete task:', id);
            await deleteTask(id);  // Use the imported deleteTask function
            setTasks(tasks.filter(task => task.id !== id));
            showSnackbar("Task deleted successfully");
        } catch (error) {
            console.error("Error deleting task:", error);
            showSnackbar("Error deleting task", "error");
        }
    };

    const handleAmend = (id) => {
        const task = tasks.find(t => t.id === id);
        setSelectedTask(task);
        setEditModalOpen(true);
    };

    const handleUpdate = async (id, updatedData) => {
        try {
            console.log('Attempting to update task:', id, updatedData);
            const response = await updateTask(id, updatedData);
            console.log('Update response:', response);

            setTasks(tasks.map(task =>
                task.id === id ? response : task
            ));
            showSnackbar("Task updated successfully");
        } catch (error) {
            console.error("Error updating task:", error.response || error);
            showSnackbar(`Error updating task: ${error.response?.data?.detail || error.message}`, "error");
        }
    };

    const handleCloseModal = () => {
        setEditModalOpen(false);
        setSelectedTask(null);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar(prev => ({ ...prev, open: false }));
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 0.5,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'title',
            headerName: 'Title',
            flex: 2,
            headerAlign: 'left',
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 3,
            headerAlign: 'left',
        },
        {
            field: 'due_date',
            headerName: 'Due Date',
            flex: 1.5,
            headerAlign: 'center',
            align: 'center',
            valueFormatter: (params) => {
                return new Date(params.value).toLocaleDateString();
            }
        },
        {
            field: 'completed',
            headerName: 'Status',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            valueFormatter: (params) => {
                return params.value ? 'Completed' : 'Pending';
            }
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <>
                    <IconButton
                        aria-label="edit"
                        onClick={() => handleAmend(params.row.id)}
                        color="primary"
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(params.row.id)}
                        color="error"
                    >
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        },
    ];

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 0' }}>
            <Typography
                variant="h2"
                gutterBottom
                sx={{
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    color: '#1976d2',
                    marginBottom: '2rem'
                }}
            >
                Tasks Management
            </Typography>

            <div style={{
                height: 500,
                width: '100%',
                maxWidth: '1200px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <DataGrid
                    rows={tasks}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[7, 14, 21]}
                    disableRowSelectionOnClick // Add this instead
                    sx={{
                        '& .MuiDataGrid-cell:focus': {
                            outline: 'none'
                        },
                        '& .MuiDataGrid-row:hover': {
                            backgroundColor: '#f5f5f5'
                        }
                    }}
                />
            </div>

            <EditTaskModal
                open={editModalOpen}
                handleClose={handleCloseModal}
                task={selectedTask}
                onUpdate={handleUpdate}
            />

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Tasks;