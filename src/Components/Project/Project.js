import React from 'react';

const Project = ({ formData, onInputChange, onFileUpload }) => {
      return (
            <div className=''>
                  <div className=''>
                        <h2 className='text-white'>Please enter project data</h2>
                        <form autocomplete="off"> 
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Project Name</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" name="projectName"
                                    value={formData.projectName}
                                    onChange={onInputChange}
                                    placeholder="Project Name" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Project Description</label>
                              <input class="form-control" id="formGroupExampleInput" type="text"
                                    name="projectDescription"
                                    value={formData.projectDescription}
                                    onChange={onInputChange}
                                    placeholder="Project Description" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Client</label>
                              <input class="form-control" id="formGroupExampleInput" type="text"
                                    name="client"
                                    value={formData.client}
                                    onChange={onInputChange}
                                    placeholder="Client" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Contractor</label>
                              <input class="form-control" id="formGroupExampleInput" type="text"
                                    name="contractor"
                                    value={formData.contractor}
                                    onChange={onInputChange}
                                    placeholder="Contractor" />
                        </div>
                        <div class="mb-2 ">
                              <label for="formGroupExampleInput" class="form-label text-white">Upload File</label>
                              <input class="form-control" id="formGroupExampleInput" type="file" onChange={onFileUpload} />
                        </div>
                        </form>
                        





                  </div>
            </div>

      );
};

export default Project;
