import React from 'react';

const Project = ({ formData, onInputChange, onFileUpload }) => {
      return (
            <div>
                  <h2>Please enter project data</h2>
                  <input
                        type="text"
                        name="projectName"
                        value={formData.projectName}
                        onChange={onInputChange}
                        placeholder="Project Name"
                  />
                  <input
                        type="text"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={onInputChange}
                        placeholder="Project Description"
                  />
                  <input
                        type="text"
                        name="client"
                        value={formData.client}
                        onChange={onInputChange}
                        placeholder="Client"
                  />
                  <input
                        type="text"
                        name="contractor"
                        value={formData.contractor}
                        onChange={onInputChange}
                        placeholder="Contractor"
                  />

                  <input type="file" onChange={onFileUpload} />
            </div>
      );
};

export default Project;
