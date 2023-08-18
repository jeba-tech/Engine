import React from 'react';

const ProjectInfo = ({ formData, maxMinValues, onInputChange }) => {
      return (
            <div>
                  <h2>Project Information</h2>

                  <div>
                        <label>Project Name:</label>
                        <input type="text" value={formData.projectName} readOnly />
                  </div>
                  <div>
                        <label>Project Description:</label>
                        <input type="text" value={formData.projectDescription} readOnly />
                  </div>
                  <div>
                        <label>Client:</label>
                        <input type="text" value={formData.client} readOnly />
                  </div>
                  <div>
                        <label>Contractor:</label>
                        <input type="text" value={formData.contractor} readOnly />
                  </div>

                  <div>
                        <label>Max X:</label>
                        <input
                              type="number"
                              name="maxX"
                              value={maxMinValues.maxX}
                              onChange={onInputChange}
                        />
                  </div>
                  <div>
                        <label>Min X:</label>
                        <input
                              type="number"
                              name="minX"
                              value={maxMinValues.minX}
                              onChange={onInputChange}
                        />
                  </div>

                  <div>
                        <label>Max Y:</label>
                        <input
                              type="number"
                              name="maxY"
                              value={maxMinValues.maxY}
                              onChange={onInputChange}
                        />
                  </div>
                  <div>
                        <label>Min Y:</label>
                        <input
                              type="number"
                              name="minY"
                              value={maxMinValues.minY}
                              onChange={onInputChange}
                        />
                  </div>
                  <div>
                        <label>Max Z:</label>
                        <input
                              type="number"
                              name="maxZ"
                              value={maxMinValues.maxZ}
                              onChange={onInputChange}
                        />
                  </div>
                  <div>
                        <label>Min Z:</label>
                        <input
                              type="number"
                              name="minZ"
                              value={maxMinValues.minZ}
                              onChange={onInputChange}
                        />
                  </div>
            </div>
      );
};

export default ProjectInfo;
