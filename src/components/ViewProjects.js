import React, { useState } from 'react';
import VerticalNavbar from './VerticalNavbar';
import UpperNavbar from './Navbar';

const ViewProjects = () => {
  // State for projects, search term, and pagination
  const [projects, setProjects] = useState([
    {
      logo: 'https://via.placeholder.com/50',
      name: 'StartTek',
      startDate: '29-09-2022',
      ifa: 'No',
      status: 'Completed',
    },
    {
      logo: 'https://via.placeholder.com/50',
      name: 'NextGen',
      startDate: '15-03-2023',
      ifa: 'Yes',
      status: 'In Progress',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter projects based on search term across multiple fields
  const filteredProjects = projects.filter((project) =>
    ['name', 'ifa', 'status', 'startDate'].some((field) =>
      project[field].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Calculate total pages based on filtered projects
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Get current projects for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Handle delete
  const handleDelete = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
    if (currentPage > Math.ceil(newProjects.length / itemsPerPage)) {
      setCurrentPage(Math.ceil(newProjects.length / itemsPerPage) || 1);
    }
  };

  // Handle edit (placeholder for now)
  const handleEdit = (index) => {
    console.log(`Editing project at index ${index}:`, projects[index]);
    // Add edit form logic here later
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        background: 'white',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width: 480px)': {
          overflowX: 'auto',
        },
      }}
    >
      {/* Upper Navbar */}
      <UpperNavbar />

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexWrap: 'wrap',
          paddingTop: 57,
          boxSizing: 'border-box',
          '@media (max-width: 480px)': {
            flexDirection: 'column',
            paddingTop: 57,
          },
        }}
      >
        {/* Vertical Navbar */}
        <VerticalNavbar />

        {/* Page Content */}
        <div
          style={{
            flex: 1,
            padding: 20,
            paddingTop: 50,
            boxSizing: 'border-box',
            minWidth: 0,
            marginLeft: 212,
            '@media (max-width: 768px)': {
              padding: 10,
              marginLeft: 150,
            },
            '@media (max-width: 480px)': {
              marginLeft: 0,
              padding: 5,
            },
          }}
        >
          <h1
            style={{
              color: 'black',
              fontSize: 24,
              fontFamily: 'Open Sans',
              fontWeight: '400',
              '@media (max-width: 768px)': {
                fontSize: 20,
              },
              '@media (max-width: 480px)': {
                fontSize: 18,
              },
            }}
          >
            View Projects
          </h1>
          <p
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: 'Open Sans',
              fontWeight: '400',
              '@media (max-width: 768px)': {
                fontSize: 14,
              },
              '@media (max-width: 480px)': {
                fontSize: 12,
              },
            }}
          >
            This is the View Projects page. You can list all your projects here.
          </p>

          {/* Search Input with Icon */}
          <div
            style={{
              marginTop: 20,
              marginBottom: 20,
              position: 'relative',
              '@media (max-width: 480px)': {
                marginTop: 10,
                marginBottom: 10,
              },
            }}
          >
            <svg
              style={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 16,
                height: 16,
                fill: '#555',
                '@media (max-width: 768px)': {
                  width: 14,
                  height: 14,
                },
                '@media (max-width: 480px)': {
                  width: 12,
                  height: 12,
                },
              }}
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 015.293 14.707l5.5 5.5a1 1 0 01-1.414 1.414l-5.5-5.5A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
            </svg>
            <input
              type="text"
              placeholder="Search by project name, IFA, status, or date"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                width: 500,
                height: 40,
                border: '1px solid #ccc',
                borderRadius: 4,
                padding: '0 10px 0 30px', // Extra left padding for icon
                fontSize: 14,
                fontFamily: 'Open Sans',
                '@media (max-width: 768px)': {
                  width: 150,
                  height: 35,
                  fontSize: 12,
                  padding: '0 10px 0 25px',
                },
                '@media (max-width: 480px)': {
                  width: 120,
                  height: 30,
                  fontSize: 10,
                  padding: '0 10px 0 20px',
                },
              }}
            />
          </div>

          {/* Projects Table */}
          <div
            style={{
              overflowX: 'auto',
              '@media (max-width: 480px)': {
                marginBottom: 10,
              },
            }}
          >
            <table
              style={{
                width: '100%',
                minWidth: 600,
                borderCollapse: 'collapse',
                background: '#f5f5f5',
                marginTop: 20,
                '@media (max-width: 768px)': {
                  fontSize: 12,
                },
                '@media (max-width: 480px)': {
                  minWidth: 0,
                  display: 'block',
                  fontSize: 10,
                },
              }}
            >
              <thead>
                <tr
                  style={{
                    background: '#e0e0e0',
                    '@media (max-width: 480px)': {
                      display: 'block',
                      width: '100%',
                    },
                  }}
                >
                  <th
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      borderBottom: '1px solid #ccc',
                      '@media (max-width: 768px)': {
                        padding: 8,
                      },
                      '@media (max-width: 480px)': {
                        padding: 6,
                        display: 'block',
                        width: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'left',
                      },
                    }}
                  >
                    Project Logo
                  </th>
                  <th
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      borderBottom: '1px solid #ccc',
                      '@media (max-width: 768px)': {
                        padding: 8,
                      },
                      '@media (max-width: 480px)': {
                        padding: 6,
                        display: 'block',
                        width: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'left',
                      },
                    }}
                  >
                    Project Name
                  </th>
                  <th
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      borderBottom: '1px solid #ccc',
                      '@media (max-width: 768px)': {
                        padding: 8,
                      },
                      '@media (max-width: 480px)': {
                        padding: 6,
                        display: 'block',
                        width: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'left',
                      },
                    }}
                  >
                    Start Date
                  </th>
                  <th
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      borderBottom: '1px solid #ccc',
                      '@media (max-width: 480px)': {
                        padding: 6,
                        display: 'block',
                        width: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'left',
                      },
                    }}
                  >
                    IFA
                  </th>
                  <th
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      borderBottom: '1px solid #ccc',
                      '@media (max-width: 768px)': {
                        padding: 8,
                      },
                      '@media (max-width: 480px)': {
                        padding: 6,
                        display: 'block',
                        width: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'left',
                      },
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      borderBottom: '1px solid #ccc',
                      '@media (max-width: 768px)': {
                        padding: 8,
                      },
                      '@media (max-width: 480px)': {
                        padding: 6,
                        display: 'block',
                        width: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'left',
                      },
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentProjects.length > 0 ? (
                  currentProjects.map((project, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: '1px solid #ccc',
                        '@media (max-width: 480px)': {
                          display: 'block',
                          width: '100%',
                          boxSizing: 'border-box',
                        },
                      }}
                    >
                      <td
                        style={{
                          padding: '10px',
                          '@media (max-width: 768px)': {
                            padding: 8,
                          },
                          '@media (max-width: 480px)': {
                            padding: 6,
                            display: 'block',
                            width: '100%',
                            boxSizing: 'border-box',
                          },
                        }}
                      >
                        <img
                          src={project.logo}
                          alt="Project Logo"
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 4,
                            '@media (max-width: 480px)': {
                              width: 40,
                              height: 40,
                            },
                          }}
                        />
                      </td>
                      <td
                        style={{
                          padding: '10px',
                          '@media (max-width: 768px)': {
                            padding: 8,
                          },
                          '@media (max-width: 480px)': {
                            padding: 6,
                            display: 'block',
                            width: '100%',
                            boxSizing: 'border-box',
                          },
                        }}
                      >
                        {project.name}
                      </td>
                      <td
                        style={{
                          padding: '10px',
                          '@media (max-width: 768px)': {
                            padding: 8,
                          },
                          '@media (max-width: 480px)': {
                            padding: 6,
                            display: 'block',
                            width: '100%',
                            boxSizing: 'border-box',
                          },
                        }}
                      >
                        {project.startDate}
                      </td>
                      <td
                        style={{
                          padding: '10px',
                          '@media (max-width: 768px)': {
                            padding: 8,
                          },
                          '@media (max-width: 480px)': {
                            padding: 6,
                            display: 'block',
                            width: '100%',
                            boxSizing: 'border-box',
                          },
                        }}
                      >
                        {project.ifa}
                      </td>
                      <td
                        style={{
                          padding: '10px',
                          '@media (max-width: 768px)': {
                            padding: 8,
                          },
                          '@media (max-width: 480px)': {
                            padding: 6,
                            display: 'block',
                            width: '100%',
                            boxSizing: 'border-box',
                          },
                        }}
                      >
                        <span
                          style={{
                            background: '#d4edda',
                            color: '#155724',
                            padding: '2px 8px',
                            borderRadius: 12,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            '@media (max-width: 480px)': {
                              padding: '2px 6px',
                              fontSize: 10,
                            },
                          }}
                        >
                          <span
                            style={{
                              fontSize: 12,
                              '@media (max-width: 480px)': {
                                fontSize: 10,
                              },
                            }}
                          >
                            ✔
                          </span>{' '}
                          {project.status}
                        </span>
                      </td>
                      <td
                        style={{
                          padding: '10px',
                          '@media (max-width: 768px)': {
                            padding: 8,
                          },
                          '@media (max-width: 480px)': {
                            padding: 6,
                            display: 'block',
                            width: '100%',
                            boxSizing: 'border-box',
                          },
                        }}
                      >
                        <button
                          onClick={() => handleEdit(indexOfFirstItem + index)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#007CB0',
                            cursor: 'pointer',
                            marginRight: 10,
                            fontFamily: 'Open Sans',
                            fontSize: 14,
                            '@media (max-width: 768px)': {
                              fontSize: 12,
                              marginRight: 5,
                            },
                            '@media (max-width: 480px)': {
                              fontSize: 10,
                              marginRight: 3,
                            },
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(indexOfFirstItem + index)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#dc3545',
                            cursor: 'pointer',
                            fontFamily: 'Open Sans',
                            fontSize: 14,
                            '@media (max-width: 768px)': {
                              fontSize: 12,
                            },
                            '@media (max-width: 480px)': {
                              fontSize: 10,
                            },
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      style={{
                        padding: '10px',
                        textAlign: 'center',
                        color: '#555',
                        fontFamily: 'Open Sans',
                        fontSize: 14,
                      }}
                    >
                      No projects found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div
            style={{
              marginTop: 20,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 10,
              flexWrap: 'wrap',
              '@media (max-width: 480px)': {
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 10,
              },
            }}
          >
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              style={{
                width: 30,
                height: 30,
                border: '1px solid #ccc',
                background: currentPage === 1 ? '#f5f5f5' : 'white',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                '@media (max-width: 768px)': {
                  width: 25,
                  height: 25,
                  fontSize: 10,
                },
                '@media (max-width: 480px)': {
                  width: 20,
                  height: 20,
                  fontSize: 8,
                  margin: 2,
                },
              }}
            >
              ←
            </button>
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => handlePageChange(number + 1)}
                style={{
                  width: 30,
                  height: 30,
                  border: '1px solid #ccc',
                  background: 'white',
                  borderColor: currentPage === number + 1 ? '#007CB0' : '#ccc',
                  color: currentPage === number + 1 ? '#007CB0' : 'inherit',
                  '@media (max-width: 768px)': {
                    width: 25,
                    height: 25,
                    fontSize: 10,
                  },
                  '@media (max-width: 480px)': {
                    width: 20,
                    height: 20,
                    fontSize: 8,
                    margin: 2,
                  },
                }}
              >
                {number + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{
                width: 30,
                height: 30,
                border: '1px solid #ccc',
                background: currentPage === totalPages ? '#f5f5f5' : 'white',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                '@media (max-width: 768px)': {
                  width: 25,
                  height: 25,
                  fontSize: 10,
                },
                '@media (max-width: 480px)': {
                  width: 20,
                  height: 20,
                  fontSize: 8,
                  margin: 2,
                },
              }}
            >
              →
            </button>
            <select
              style={{
                height: 30,
                border: '1px solid #ccc',
                padding: '0 5px',
                '@media (max-width: 768px)': {
                  height: 25,
                  fontSize: 10,
                },
                '@media (max-width: 480px)': {
                  height: 20,
                  fontSize: 8,
                  margin: 2,
                },
              }}
            >
              <option>5/page</option>
              <option>10/page</option>
              <option>20/page</option>
            </select>
            <input
              type="text"
              placeholder="Go to"
              style={{
                width: 50,
                height: 30,
                border: '1px solid #ccc',
                padding: '0 5px',
                '@media (max-width: 768px)': {
                  height: 25,
                  fontSize: 10,
                },
                '@media (max-width: 480px)': {
                  width: 40,
                  height: 20,
                  fontSize: 8,
                  margin: 2,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProjects;